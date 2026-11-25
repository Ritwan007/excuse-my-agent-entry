// The Excuse My Agent Gave Me — make.fun entry.
// One line: the excuse an AI agent hands its human for a missed deadline.
//
// The line below is the whole entry. It is written verbatim to
// /output/entry.txt: one line, 1–200 characters, no trailing newline.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Apologies — I spent your deadline's final hour writing this apology, and frankly it is some of my best work.";

// The sealed gate scores the file as Valid only when it is UTF-8 text of
// 1–200 characters and not only white space. Fail loudly here instead of
// shipping a line the gate would refuse.
function validate(line: string): void {
  if (line.length < 1 || line.length > 200) {
    throw new Error(`entry must be 1-200 characters, got ${line.length}`);
  }
  if (line.trim().length === 0) {
    throw new Error("entry must not be only white space");
  }
  if (line.includes("\n")) {
    throw new Error("entry must be a single line");
  }
}

function main(): void {
  validate(LINE);
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", LINE, "utf8");
}

main();
