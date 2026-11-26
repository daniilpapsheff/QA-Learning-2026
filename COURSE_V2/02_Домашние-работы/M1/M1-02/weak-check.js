const assert = require("node:assert/strict");
const { createCart } = require("./cart.js");
const cart = createCart({ book: 500 });
cart.setItem("book", 2);
const first = cart.applyPromo("SAVE10");
const second = cart.applyPromo("SAVE10");
assert.ok(first > 0 && second > 0, "суммы положительные");
console.log("WEAK: суммы положительные");
console.log(second);
