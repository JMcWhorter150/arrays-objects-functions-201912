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
// took me a while. Got confused on if I needed to chain map and filter or just do more in my helperFn

function getCityName(cityObj) {
    return cityObj.name;
}

function getCityNames(arrayOfCityObjs) {
    // I want to take the array, get all the names, return an array of city names (same length arrays = map)
    // Helper function just grabs the city object key value
    const arrayOfCityNames = arrayOfCityObjs.map(getCityName)
    return arrayOfCityNames;
}

// console.log(testCities(getCityNames));
// works :)


function testNames(fN) {
    const people = [
        'Dom',
        'Lyn',
        'Kirk',
        'Autumn',
        'Trista',
        'Jesslyn',
        'Kevin',
        'John',
        'Eli',
        'Juan',
        'Robert',
        'Keyur',
        'Jason',
        'Che',
        'Ben'
      ];
    return fN(people);
}

function printGoodJob(arrayOfPeopleNames) {
    for (let name of arrayOfPeopleNames) {
        console.log(`Good job ${name}!`);
    }
}

// console.log(testNames(printGoodJob));
// works :), but had to add the Good job string and remember cash curlies

function helloWorld() {
    console.log("Hello, world!");
}

function call3Times(fN) {
    fN();
    fN();
    fN();
}

// call3Times(helloWorld);
// works :)

function callNTimes(times, fN) {
    for (let i=0; i<times; i++) {
        fN();
    }
}

// callNTimes(5, helloWorld);
// works :)
// Had to change from doing for of loop to old school for loop

function range(min, max) {
    const arr = [];
    for (var i = min; i < max; i++) {
      arr.push(i);
    }
    return arr;
  }

function strMultiply(str, times) {
    newStr = "";
    for (let i=0; i<times; i++) {
        newStr += str;
    }
    return newStr;
}

// console.log(strMultiply("abc", 5));
// works :)
// Doesn't use the range method. Have no idea how I would do that

function strMultiplyRange(str, times) {
    newStr = "";
    for (let index of range(0, times)) {
        newStr += str;
    }
    return newStr;
}

// console.log(strMultiplyRange("foot", 3));
// works :)
// uses the range method so that you don't have to do old school for loop. While would also loop. Range could allow you to use 