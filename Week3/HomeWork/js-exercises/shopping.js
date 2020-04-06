'use-strict';
const groceryItems = ["bananas", "milk"];
const addToShoppingCart = (groceryItem) => {
    groceryItems.push(groceryItem);
    if (groceryItems.length > 3) {
        groceryItems.shift();
    }
    return `You bought ${groceryItems.join('  ')}!`;
};
console.log(addToShoppingCart('tomato'));
console.log(addToShoppingCart('chips'));
console.log(addToShoppingCart('cola'));
console.log(groceryItems);
// console.log(`You bought ${groceryItems.join('  ')}!`);