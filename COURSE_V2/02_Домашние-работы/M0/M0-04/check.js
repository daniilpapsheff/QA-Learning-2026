const fs = require("node:fs");
const assert = require("node:assert");

const pkg = JSON.parse(fs.readFileSync("package.json", "utf8"));

assert.strictEqual(pkg.name, "qa-learnining-2026", "имя проекта");
assert.ok(pkg.scripts && pkg.scripts.start, "нет скрипта start");
assert.match(pkg.scripts.start, /node/, "start должен запускать node");
assert.ok(pkg.devDependencies?.prettier, "нет prettier");
console.log("package.json в порядке: 4 из 4");
