const fs = require("node:fs");
const assert = require("node:assert/strict");

const checks = JSON.parse(
  fs.readFileSync("COURSE_V2\\02_Домашние-работы\\M1-01\\checks.json", "utf8"),
);
const known = new Set([
  "requirements",
  "planning",
  "design",
  "environment",
  "execution",
  "report",
]);
const without = checks.filter((c) => !known.has(c.phase));
assert.deepStrictEqual(without, [], "у части проверок нет фазы");
const design = checks.filter((c) => c.phase === "design");
assert.ok(design.length >= 3, "в фазе design меньше трёх проверок");

console.log("Проверок: " + checks.length + ", в дизайне: " + design.length);
