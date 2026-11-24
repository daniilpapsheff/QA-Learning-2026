const fs = require("node:fs");
const assert = require("node:assert/strict");

const plan = JSON.parse(
  fs.readFileSync("COURSE_V2\\02_Домашние-работы\\M1-01\\process.json"),
);
const required = [
  "requirements",
  "planning",
  "design",
  "environment",
  "execution",
  "report",
  "closure",
];

assert.ok(Array.isArray(plan.phases), "phases должен быть массивом");
assert.strictEqual(
  plan.phases.length,
  required.length,
  "фаз должно быть " + required.length,
);
for (const name of required) {
  const phase = plan.phases.find((p) => p.name === name);
  assert.ok(phase, "нет фазы: " + name);

  assert.strictEqual(
    typeof phase.owner,
    "string",
    name + ": owner должен быть строкой",
  );
  assert.ok(phase.owner.trim().length > 0, name + ": не указан владелец");

  assert.strictEqual(
    typeof phase.artifact,
    "string",
    name + ": artifact должен быть строкой",
  );
  assert.ok(
    phase.artifact.trim().length >= 5,
    name + ": артефакт слишком короткий",
  );
}

console.log("Процесс описан: 7 из 7 фаз");
