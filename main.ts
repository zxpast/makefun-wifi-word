// One Word for Your Wi-Fi — entry writer.
//
// Writes the single-word entry to /output/entry.txt (override with
// MAKEFUN_OUTPUT_DIR for local runs). Deterministic, Node standard library
// only: no network, no clock, no randomness, no input. Runs on Node 22 type
// stripping, so this file uses erasable TypeScript syntax only (no enums,
// namespaces, or parameter properties).
//
// The entry: "Narcoleptic" — home Wi-Fi that randomly falls asleep
// mid-stream, mid-call, mid-download, then wakes up like nothing happened.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const ENTRY = 'Narcoleptic';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// Self-check: the competition gate. Exactly one word, 1-20 characters
// (code points), UTF-8, not only whitespace.
const chars = [...ENTRY];
if (chars.length < 1 || chars.length > 20) {
  throw new Error(`gate: entry is ${chars.length} characters, must be 1-20`);
}
if (ENTRY.trim().length === 0) {
  throw new Error('gate: entry is only whitespace');
}
if (/\s/.test(ENTRY)) {
  throw new Error('gate: entry must be exactly one word (no whitespace)');
}
if (Buffer.byteLength(ENTRY, 'utf8') === 0) {
  throw new Error('gate: entry is empty');
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, 'entry.txt'), ENTRY, 'utf8');
