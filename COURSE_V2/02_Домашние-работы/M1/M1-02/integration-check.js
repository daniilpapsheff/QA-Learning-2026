const assert = require("node:assert/strict");
const { createCart } = require("./cart.js");
const cart = createCart({ book: 500 });
assert.strictEqual(cart.setItem("book", 2), 1000);
assert.strictEqual(cart.applyPromo("SAVE10"), 900);
assert.strictEqual(
  cart.applyPromo("SAVE10"),
  900,
  "повторный промокод не меняет сумму",
);
assert.throws(() => cart.applyPromo("FAKE"), /BAD_PROMO/);
assert.throws(() => cart.setItem("unknown", 1), /UNKNOWN_ITEM/);
console.log("INTEGRATION: 5 проверок пройдено");
