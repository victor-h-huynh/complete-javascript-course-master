'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('I can drive :D');

// // const interface = 'Audio';
// // const private = 534;

// function logger() {
//     console.log('My name is Jonas');
// }

// // calling / running / invoking function
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);


////////////////////////////////////////////////////////////////
//Function declaration vs Function Expression
///////////////////////////////////////////////////////////////

// Function declaration

// function calcAge1(birthYear) {
//     return 2037 - birthYear
// }

// const age1 = calcAge1(1991);
// console.log(age1);

// // Function expression

// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear;
// }

// const age2 = calcAge2(1991);

// console.log(age1, age2);

////////////////////////////////////////////////////////////////
// Arrow Functions
///////////////////////////////////////////////////////////////

// // Arrow function
// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     // return retirement;
//     return `${firstName} retires in ${retirement} years`
// }

// console.log(yearsUntilRetirement(1991, 'Jonas'));
// console.log(yearsUntilRetirement(1980, 'Bob'));

////////////////////////////////////////////////////////////////
// Functions Calling Other Functions
///////////////////////////////////////////////////////////////

// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);

//     const juice = `Juice with ${applePieces} piece of apples and ${orangePieces} piece of oranges.`;
//     return juice;
// }

// console.log(fruitProcessor(2, 3));

////////////////////////////////////////////////////////////////
// Reviewing Functions
////////////////////////////////////////////////////////////////

// const calcAge = function(birthYear) {
//     return 2037 - birthYear;
// }

// const yearsUntilRetirement = function (birthYear, firstName) {
//     const age = calcAge(birthYear)
//     const retirement = 65 - age;

//     if(retirement > 0) {
//         console.log(`${firstName} retires in ${retirement} years`);
//         return retirement;
//     } else {
//         console.log(`${firstName} has already retired`);
//         return -1
//     }
// }

// console.log(yearsUntilRetirement(1991, 'Jonas'));
// console.log(yearsUntilRetirement(1970, 'Mike'));

////////////////////////////////////////////////////////////////
// Coding Challenge #1
////////////////////////////////////////////////////////////////

// const calcAverage = (a, b, c) => (a + b + c) / 3

// const dolphinsTeam = calcAverage(85, 54, 41)
// const koalasTeam = calcAverage(23, 34, 27)

// console.log(dolphinsTeam)
// console.log(koalasTeam)

// function checkWinner(avgDolphins, avgKoalas) {
//     if(avgDolphins >= 2 * avgKoalas) {
//         console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`)
//     } else if(avgKoalas >= 2 * avgDolphins) {
//         console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`)
//     } else {
//         console.log('There is no winner')
//     }
// }

// checkWinner(dolphinsTeam, koalasTeam)

////////////////////////////////////////////////////////////////
// Introduction to Arrays
////////////////////////////////////////////////////////////////

// const friends = ['Michael', 'Steven', 'Peter'];
// console.log(friends);

// const y = new Array(1991, 1984, 2008, 2020);

// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = 'Jay';
// console.log(friends);

// const firstName = 'Jonas';
// const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
// console.log(jonas);
// console.log(jonas.length)

// //Exercise
// function calcAge(birthYear) {
//     return 2037 - birthYear
// }

// const years = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);

// console.log(age1, age2 ,age3);

// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])]
// console.log(ages)


////////////////////////////////////////////////////////////////
// Basic Array Operators(Methods)
////////////////////////////////////////////////////////////////

// const friends = ['Michael', 'Steven', 'Peter'];

// // Add elements
// friends.push('Jay'); // End
// console.log(friends);

// friends.unshift('John'); // Beginning
// console.log(friends);

// // Remove elements
// friends.pop(); // Last
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

// friends.shift(); // First
// console.log(friends);

// console.log(friends.indexOf('Steven'));
// console.log(friends.indexOf('Bob'));

// friends.push(23)
// console.log(friends)
// console.log(friends.includes('Steven'));
// console.log(friends.includes('Bob'));
// console.log(friends.includes(23));

// if (friends.includes('Steven')) {
//     console.log('You have a friend called Steven');
// }

////////////////////////////////////////////////////////////////
// Coding Challenge #2
////////////////////////////////////////////////////////////////

// const bills = [125, 555, 44]
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]

// function calcTip (bill) {
//     if (bill >= 50 && bill <= 300) {
//         const tipPercent = 0.15 * bill;
//         return tipPercent;
//     }  else {
//         const tipPercent = 0.20 * bill;
//         return tipPercent;
//     }
// }

// console.log(tips)
// console.log(total)

////////////////////////////////////////////////////////////////
// Objects
////////////////////////////////////////////////////////////////