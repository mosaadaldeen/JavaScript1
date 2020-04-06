'use-strict';
let cartForParty = { beer: 1.44, cola: 0.25, thee: 0.50, coffee: 0.99, energyDrink: 1.99 };
const calculateTotalPrice = (cartForParty) => {
    let sum = 0;
    for (let i in cartForParty) {
        sum += cartForParty[i];
    }
    console.log(`the sum of the drinks is ${sum}`);
};
calculateTotalPrice(cartForParty);