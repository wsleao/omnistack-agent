import { buildAll } from './build.mjs';

function approxTokens(text) {
  // Portable approximation for prompt-budget tracking. Real tokenization is model-specific.
  return Math.ceil(text.length / 4);
}

function pad(value, width) {
  return String(value).padEnd(width, ' ');
}

async function main() {
  const results = await buildAll();
  const rows = results.map((result) => ({
    path: result.outPath,
    chars: result.content.length,
    approxTokens: approxTokens(result.content),
  }));

  const pathWidth = Math.max('Adapter'.length, ...rows.map((row) => row.path.length));
  const charWidth = Math.max('Chars'.length, ...rows.map((row) => String(row.chars).length));
  const tokenWidth = Math.max('Approx tokens'.length, ...rows.map((row) => String(row.approxTokens).length));

  console.log(`${pad('Adapter', pathWidth)}  ${pad('Chars', charWidth)}  ${pad('Approx tokens', tokenWidth)}`);
  console.log(`${'-'.repeat(pathWidth)}  ${'-'.repeat(charWidth)}  ${'-'.repeat(tokenWidth)}`);
  for (const row of rows) {
    console.log(`${pad(row.path, pathWidth)}  ${pad(row.chars, charWidth)}  ${pad(row.approxTokens, tokenWidth)}`);
  }
}

main().catch((err) => { console.error(err); process.exit(1); });
