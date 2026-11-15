const vipUser = { "isVip": true, "amount": 6000 };
function getDiscount(user: { isVip: boolean, amount: number }): number {
    if (user.isVip) { return user.amount > 5000 ? 20 : 10 }
    else { return user.amount > 5000 ? 5 : 0 }
};

const regularUser = { ...vipUser, "isVip": false };
console.log(getDiscount(vipUser));
console.log(getDiscount(regularUser));