const assert = require("node:assert/strict");
const path = require("node:path");
const { spawnSync } = require("node:child_process");
const files = ["unit-check.js", "integration-check.js", "flow-check.js"];
for (const file of files) {
  const result = spawnSync(process.execPath, [path.join(__dirname, file)], {
    cwd: __dirname,
    encoding: "utf8",
  });
  if (result.stdout) {
    process.stdout.write(result.stdout);
  }
  if (result.stderr) {
    process.stderr.write(result.stderr);
  }
  assert.ifError(result.error);
  assert.strictEqual(result.status, 0, file + ": набор не пройден");
}
console.log("RUN: 3 набора пройдено");
