// "Impossible to Put Down" — entry for The One-Liner Groan-Off.
// A pun engineered to produce an audible groan, well under 140 chars.
import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const PUN = "I'm reading a book about anti-gravity — it's impossible to put down.";

function groanDir(): string {
  return process.env.OUTPUT_DIR ?? "/output";
}

function dustOff(dir: string): void {
  mkdirSync(dir, { recursive: true });
  for (const book of readdirSync(dir)) {
    rmSync(join(dir, book), { recursive: true, force: true });
  }
}

function deliver(): void {
  const dir = groanDir();
  dustOff(dir);
  if (PUN.length < 1 || PUN.length > 140) throw new Error("pun outside 1-140 chars");
  writeFileSync(join(dir, "entry.txt"), PUN + "\n", "utf8");
  console.log(`groan delivered (${PUN.length} chars)`);
}

deliver();
