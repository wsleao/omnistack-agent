import { readdir, readFile } from 'node:fs/promises';
import { join, dirname, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import { normalizeEol } from './lib.mjs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const KNOWLEDGE_DIR = join(ROOT, 'knowledge');
const INDEX_PATH = join(KNOWLEDGE_DIR, '_index.md');

const REQUIRED_HEADINGS = [
  '## Concepts',
  '## Best Practices',
  '## Patterns & Examples',
  '## Common Pitfalls / Anti-patterns',
  '## References',
];

async function walk(dir) {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory() && !entry.isSymbolicLink()) out.push(...(await walk(full)));
    else if (entry.isFile() && entry.name.endsWith('.md')) out.push(full);
  }
  return out;
}

function toKnowledgeRelative(absPath) {
  return relative(KNOWLEDGE_DIR, absPath).split('\\').join('/');
}

function extractIndexLinks(indexBody) {
  const links = new Set();
  const regex = /\[[^\]]+\]\(([^)]+\.md)\)/g;
  let match;
  while ((match = regex.exec(indexBody)) !== null) {
    const href = match[1].trim();
    if (!href.startsWith('http://') && !href.startsWith('https://') && !href.startsWith('#')) {
      links.add(href.replace(/^\.\//, ''));
    }
  }
  return links;
}

function assertModuleShape(relPath, body, errors) {
  if (!/^#\s+\S+/m.test(body)) errors.push(`${relPath}: missing top-level title`);

  for (const heading of REQUIRED_HEADINGS) {
    if (!body.includes(heading)) errors.push(`${relPath}: missing required heading "${heading}"`);
  }

  if (!/<!--\s*level:\s*(beginner|intermediate|advanced)\s*-->/i.test(body)) {
    errors.push(`${relPath}: missing or invalid level marker`);
  }
}

async function main() {
  const allFiles = (await walk(KNOWLEDGE_DIR)).sort();
  const moduleFiles = allFiles.filter((file) => toKnowledgeRelative(file) !== '_index.md');
  const existingModules = new Set(moduleFiles.map(toKnowledgeRelative));
  const indexBody = normalizeEol(await readFile(INDEX_PATH, 'utf8'));
  const indexLinks = extractIndexLinks(indexBody);
  const errors = [];

  for (const rel of existingModules) {
    if (!indexLinks.has(rel)) errors.push(`knowledge/_index.md: missing link to ${rel}`);
  }

  for (const link of indexLinks) {
    if (!existingModules.has(link)) errors.push(`knowledge/_index.md: broken link to ${link}`);
  }

  for (const file of moduleFiles) {
    const rel = toKnowledgeRelative(file);
    const body = normalizeEol(await readFile(file, 'utf8'));
    assertModuleShape(rel, body, errors);
  }

  if (errors.length) {
    console.error('✗ Knowledge base integrity check failed:');
    for (const error of errors) console.error(`  - ${error}`);
    process.exit(1);
  }

  console.log(`✓ Knowledge base integrity OK (${moduleFiles.length} modules, ${indexLinks.size} index links).`);
}

main().catch((err) => { console.error(err); process.exit(1); });
