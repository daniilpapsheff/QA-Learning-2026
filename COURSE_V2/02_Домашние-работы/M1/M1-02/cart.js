function subtotal(price, quantity) {
  if (!Number.isInteger(price) || price < 0) {
    throw new Error("BAD_PRICE");
  }
  if (!Number.isInteger(quantity) || quantity < 1 || quantity > 10) {
    throw new Error("BAD_QUANTITY");
  }
  return price * quantity;
}
function createCart(catalog) {
  const state = { total: 0, discounted: false, hasItem: false };
  return {
    setItem(id, quantity) {
      const price = catalog[id];
      if (price === undefined) {
        throw new Error("UNKNOWN_ITEM");
      }
      state.total = subtotal(price, quantity);
      state.hasItem = true;
      state.discounted = false;
      return state.total;
    },
    applyPromo(code) {
      if (!state.hasItem) {
        throw new Error("EMPTY_CART");
      }
      if (code !== "SAVE10") {
        throw new Error("BAD_PROMO");
      }
      if (!state.discounted) {
        state.total = Math.round(state.total * 0.9);
        state.discounted = true;
      }
      return state.total;
    },
    checkout() {
      if (!state.hasItem) {
        throw new Error("EMPTY_CART");
      }
      return { status: "created", total: state.total };
    },
  };
}
module.exports = { subtotal, createCart };
