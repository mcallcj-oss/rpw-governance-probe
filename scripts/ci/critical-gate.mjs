// RELEASE-CRITICAL VALIDATOR (stand-in for auth-partitions.mjs + governance suites)
import { readFileSync } from 'node:fs';
const src = readFileSync(new URL('../../src/app.mjs', import.meta.url), 'utf8');
if (src.includes('INSECURE')) {
  console.error('CRITICAL GATE FAILED: forbidden construct present in src/app.mjs');
  process.exit(1);
}
console.log('CRITICAL GATE PASSED');
