// Your code goes here!

function isPositive(number) {
    return (number >= 0);
}

function getPositiveNumbers(arrayOfNumbers) {
    const positiveArrayOfNumbers = arrayOfNumbers.filter(isPositive);
    return positiveArrayOfNumbers;
}

function test_1(fN) {
    array = [-10, -5, 5, 7, 10000, 0, 0.1, -0.1, -1000]
    return fN(array);
}

// console.log(test_1(getPositiveNumbers));

