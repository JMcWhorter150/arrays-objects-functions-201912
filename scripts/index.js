// Your code goes here!

function isPositive(number) {
    return (number >= 0);
}

function getPositiveNumbers(arrayOfNumbers) {
    const positiveArrayOfNumbers = arrayOfNumbers.filter(isPositive);
    return positiveArrayOfNumbers;
}

function test_1(fN) {
    array = [-10, -5, 6, 7, 10000, 0, 0.1, -0.1, -1000]
    return fN(array);
}
// created test array with negatives, positives, floats, odds, and evens

// console.log(test_1(getPositiveNumbers));
// worked :)
function isEven(number) {
    return (number % 2 === 0)
}

function getEvenNumbers(arrayOfNumbers) {
    const arrayOfEvenNumbers = arrayOfNumbers.filter(isEven);
    return arrayOfEvenNumbers;
}

// console.log(test_1(getEvenNumbers));
// worked :)
function squareNumber(number) {
    return number * number;
}

function getSquaredNumbers(arrayOfNumbers) {
    const arrayOfSquaredNumbers = arrayOfNumbers.map(squareNumber);
    return arrayOfSquaredNumbers;
}

// console.log(test_1(getSquaredNumbers));
// worked :)

function testCities(fN) {
    const cities = [
        { name: 'Los Angeles', temperature: 60.0},
        { name: 'Atlanta', temperature: 52.0 },
        { name: 'Detroit', temperature: 48.0 },
        { name: 'New York', temperature: 80.0 }
      ];
    return fN(cities);
}
// creates test for cities example

function cityTempLessThan70(cityObj) {
    let cityTemp = cityObj.temperature
    return (cityTemp < 70);
}

function getCoolCities(arrayOfCityObjs) {
    // setup
    // I want to for each object in cities to check if the temperature of the city is less than 70 and filter out cities with temp greater than 70
    // Then I want to return an array of only the city objects
    // To do this, I'm going to use a filter function due to needing a smaller list
    // I need the filter to take in a city object, get the temp from each city, and then return true or false depending on if the city temp is less than 70
    const coolCities = arrayOfCityObjs.filter(cityTempLessThan70);
    return coolCities;
}

// console.log(testCities(getCoolCities));
// works :)