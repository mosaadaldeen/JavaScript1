'use-strict';

// This function is to calculate the digits of the card number
function sumNumbers(cardNumber) {
    let sum = 0;
    for (let i in cardNumber) {
        sum += Number(cardNumber[i]);
    }
    return sum;
}

// this function is to check if there is one same digit 
function checkSameDigit(cardNumber) {
    let obj = {};
    for (let i in cardNumber) {
        obj[cardNumber[i]] = true;
    }
    if (Object.keys(obj).length < 2) {
        return false;
    }
    return obj;
}

// this function is to check the length of cardNumber if it is 16 or less
function checkLength(cardNumber) {
    if (cardNumber.length === 16) {
        console.log(`Your card is must be 16 digits`);
    } else {
        return true;
    }
}

// this function is to check if there are any characters
function checkForCharacters(cardNumber) {
    if (isNaN(cardNumber)) {
        console.log(`${cardNumber}:  the card number contains characters`);
    } else {
        return true;
    }
}

// this function is to check the last digit in the cardNumber
function checkLastDigit(cardNumber) {
    if ((cardNumber[cardNumber.length - 1]) % 2 === 0) {
        return true;
    } else {
        console.log(`${cardNumber}: the last digit must be even `);
    }
}

// the CreditCardValidator function is to check if the length of the card number is equal to 16, and if the last digit is even,
// and if it contains characters in it, and if the sum is bigger than 16, and lastly, to check if there is just same one digit or not.
function CreditCardValidator(cardNumber) {

    if (cardNumber.length !== 16)
        return `${cardNumber}: the length of the card number is not 16 number`;

    if ((isNaN(cardNumber)))
        return `${cardNumber}:  the card number contains characters`;

    if ((cardNumber[cardNumber.length - 1]) % 2 !== 0)
        return `${cardNumber}:  the last digit must be even`;

    if (sumNumbers(cardNumber) <= 16)
        return `${cardNumber}:  the sum of the digits must be 16 or more`;

    if (!checkSameDigit(cardNumber))
        return `${cardNumber}:  the card number contains the same digits`;

    return `${cardNumber}: your card Number is valid`;


    // if (cardNumber.length === 16) {
    //     if (!(isNaN(cardNumber))) {
    //         if ((cardNumber[cardNumber.length - 1]) % 2 === 0) {
    //             if (sumNumbers(cardNumber) > 16) {
    //                 if (checkSameDigit(cardNumber)) {
    //                     // if all the conditions above are true, then this console log will be printed
    //                     console.log(`
    // $ { cardNumber }: your card Number is valid `);
    // //                 } else {
    // //                     console.log(`
    // $ { cardNumber }: the card number contains the same digits `);
    // //                 }
    // //             } else {
    // //                 console.log(`
    // $ { cardNumber }: the sum of the digits must be 16 or more `);
    // //             }
    // //         } else {
    // //             console.log(`
    // $ { cardNumber }: the last digit must be even `);
    // //         }
    // //     } else {
    // //         console.log(`
    // $ { cardNumber }: the card number contains characters `);
    // //     }
    // // } else {
    // //     console.log(`
    // $ { cardNumber }: the length of the card number is not 16 number `);
    // // }
}
console.log(CreditCardValidator('9999777788880000'));
console.log(CreditCardValidator('6666666666661666'));
console.log(CreditCardValidator('a92332119c011112'));
console.log(CreditCardValidator('4444444444444444'));
console.log(CreditCardValidator('1111111111111110'));
console.log(CreditCardValidator('6666666666666661'));