'use-strict';

const calculateDogAge = (num) => {
    const dogAge = num * 7;
    console.log(`Your doggie is ${dogAge} years old in dog years!`);
};

calculateDogAge(3);
calculateDogAge(5);
calculateDogAge(6);

// Calculate your dog's age based on the conversion rate of 1 human year to 7 dog years.
// Return a string: "Your doggie is [CALCULATED_VALUE] years old in dog years!"
// Call the function three times with different sets of values.