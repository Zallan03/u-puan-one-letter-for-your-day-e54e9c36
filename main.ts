import { mkdirSync, writeFileSync } from "node:fs";

// One Letter for Your Day — u-puan-one-letter-for-your-day-e54e9c36
// The chosen letter is Z. The word behind it is "zombie": a day spent
// shambling through on zero sleep. Vivid, funny, and true — and every
// other word a reader could hear behind Z (zero sleep, zonked, zzz)
// lands the same way, so there is no weak reading of this letter.
const LETTER = "Z";

// The gate requires exactly one character, a letter A to Z. Fail loudly
// rather than ever writing an invalid entry.
if (!/^[A-Z]$/.test(LETTER)) {
  throw new Error("entry must be exactly one letter, A to Z");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LETTER, "utf8");
