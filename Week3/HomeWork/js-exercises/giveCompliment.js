'use-strict';
let compliments = ["great", "awesome", "nice", 'energetic', 'beautiful', 'amazing', 'brave', 'friendly', 'confident', 'supportive'];
const giveCompliment = (name) => {
    let randomCompliment = Math.floor(Math.random() * compliments.length);
    console.log(`You are ${compliments[randomCompliment]}, ${name}`);
};
giveCompliment('Mohammad');
giveCompliment('Mohammad');
giveCompliment('Mohammad');