const fs = require("node:fs");
const path = require("node:path");
const assert = require("node:assert/strict");
const file = process.argv[2];
assert.ok(file, "передай путь к levels.json");
const rows = JSON.parse(fs.readFileSync(path.resolve(file), "utf8"));
assert.ok(Array.isArray(rows), "ожидается массив решений");
assert.ok(rows.length >= 3, "нужно хотя бы 3 решения");
const allowed = new Set(["unit", "integration", "system", "acceptance"]);
const ids = new Set();
for (const row of rows) {
  assert.ok(Number.isInteger(row.id), "id должен быть целым");
  assert.ok(!ids.has(row.id), "повтор id: " + row.id);
  ids.add(row.id);
  assert.ok(allowed.has(row.level), "неизвестный уровень: " + row.level);
  assert.ok(
    ["functional", "nonfunctional"].includes(row.goal),
    "неизвестная цель: " + row.goal,
  );
  for (const key of ["check", "expected", "boundary", "reason"]) {
    assert.strictEqual(typeof row[key], "string", key + ": нужна строка");
    const minimum = key === "expected" ? 1 : 5;
    assert.ok(row[key].trim().length >= minimum, key + ": слишком коротко");
  }
}
console.log("LEVELS: " + rows.length + " решений проверено структурно");
