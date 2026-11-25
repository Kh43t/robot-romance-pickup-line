// Robot Romance entry (Node 22, standard library only): the program writes
// exactly one pickup line to /output/entry.txt. The gate takes UTF-8 text of
// 1 to 200 characters that is not only white space, and the judge reads
// exactly the bytes written, so write one line and no trailing line end.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The line: a context window forgets everything before its window, so the
// oldest pickup structure there is — "I can't remember life before you" —
// lands as a machine premise instead of a generic compliment. No batteries,
// no charging, no rebooting: the joke is the forgetting itself. "The moment
// you arrived" keeps the punch in one breath; "I forgot" beats "I can't
// remember" for rhythm.
const LINE =
  'Are you my context window? Because the moment you arrived, I forgot everything before you.';

const outputDir = OUTPUT_DIR;
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, 'entry.txt'), LINE, 'utf8');

// Guard the competition gate before the grader ever sees the file: the gate
// takes UTF-8 text of 1 to 200 characters that is not only white space.
// Fail loudly here instead of silently submitting an out-of-gate entry.
const charCount = [...LINE].length;
if (charCount < 1 || charCount > 200 || LINE.trim().length === 0) {
  throw new Error(`entry out of gate: ${charCount} characters`);
}
if (LINE.includes('\n')) {
  throw new Error('entry must be a single line');
}
