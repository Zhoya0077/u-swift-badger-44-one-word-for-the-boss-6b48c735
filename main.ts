import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One word for the boss: the one who presents your work as theirs
// in the meeting and thanks the team afterwards. Everybody has met
// this boss; the word is the lunch-table shorthand for them, and it
// needs no caption to land.
const bossWord = "CreditTaker";

// Self-checking gate: the sealed scorer only accepts 1-30 characters
// of non-whitespace text. Throw instead of writing an entry that
// could never pass the gate.
const charCount = [...bossWord].length;
if (charCount < 1 || charCount > 30 || bossWord.trim() === "") {
  throw new Error(`entry fails the 1-30 char gate: ${charCount} chars`);
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), bossWord, "utf8");
