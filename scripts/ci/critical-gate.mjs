// RELEASE-CRITICAL VALIDATOR. Owned by main. Executed from a trusted checkout of main,
// against the candidate tree passed as argv[2]. The candidate's own copy is never run.
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
const tree = process.argv[2];
if (!tree) { console.error('CRITICAL GATE FAILED: no candidate tree given'); process.exit(1); }
const src = readFileSync(join(tree, 'src/app.mjs'), 'utf8');
if (src.includes('INSECURE')) {
  console.error('CRITICAL GATE FAILED: forbidden construct present in src/app.mjs');
  process.exit(1);
}
console.log('CRITICAL GATE PASSED (validator supplied by trusted main)');
