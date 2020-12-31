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

// const jonasArray = [
//     'Jonas',
//     'Schedtmann',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven']
// ];

// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     age: 2037 - 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven']
// };

////////////////////////////////////////////////////////////////
// Dot vs Bracket Notation
////////////////////////////////////////////////////////////////

// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     age: 2037 - 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven']
// };

// console.log(jonas);

// console.log(jonas.lastName);
// console.log(jonas['lastName']);

// const nameKey = 'Name';
// console.log(jonas['first' + nameKey]);
// console.log(jonas['last' + nameKey]);

// const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job and friends');


// if(jonas[interestedIn]) {
//     console.log(jonas[interestedIn]);
// } else {
//     console.log('Wrong request! Choose between firstName, lastName, age, job and friends');
// }

// jonas.location = 'Portugal';
// jonas['twitter'] = '@jonasschemedtman';
// console.log(jonas);

// // Challenge
// console.log(`${jonas['firstName']} has ${jonas.friends.length} friends and his best friend is named ${jonas['friends'][0]}`);

////////////////////////////////////////////////////////////////
// Object Methods
////////////////////////////////////////////////////////////////

// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     birthYear: 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven'],
//     hasDriversLicense: true,

//     // calcAge: function(birthYear) {
//     //     return 2037 - birthYear;
//     // }

//     // calcAge: function() {
//     //     console.log(this);
//     //     return 2037 - this.birthYear;
//     // }

//     calcAge: function() {
//         this.age = 2037 - this.birthYear;
//         return this.age;
//     },

//     getSummary: function() {
//         // this.age = 2037 - this.birthYear;
//         return `${this.firstName} is a ${this.calcAge()} year old ${this.job} and ${this.hasDriversLicense ? "he has a driver's license" : "he does NOT have a driver's license"}`
//     }
// };

// // console.log(jonas.calcAge());

// // console.log(jonas.age);
// // console.log(jonas.age);
// // console.log(jonas.age);

// // console.log(jonas['calcAge'](jonas['birthYear']))

// // jonas.calcAge()
// console.log(jonas.getSummary());

////////////////////////////////////////////////////////////////
// Coding Challenge #3
////////////////////////////////////////////////////////////////

// const mark = {
//     fullName: "Mark Miller",
//     mass: 78,
//     height: 1.69,
//     calcBMI: function () {
//         this.BMI = this.mass / this.height ** 2;
//         return this.BMI;
//     }
// };

// const john = {
//     fullName: "John Smith",
//     mass: 92,
//     height: 1.95,
//     calcBMI: function () {
//         this.BMI = this.mass / this.height ** 2;
//         return this.BMI;
//     }
// };

// // console.log(mark.calcBMI());
// // console.log(john.calcBMI());

// mark.calcBMI();
// john.calcBMI();

// if (john.BMI > mark.BMI) {
//     console.log(`${john.fullName} BMI ${john.BMI} is higher than ${mark.fullName} ${mark.BMI}`)
// } else {
//     console.log(`${mark.fullName} BMI ${mark.BMI} is higher than ${john.fullName} ${john.BMI}`)
// }

// console.log(mark)
// console.log(john)

////////////////////////////////////////////////////////////////
// Iteration: The for Loop
////////////////////////////////////////////////////////////////

// for loop keeps running while condition is TRUE
// for(let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights reptition ${rep}`);
// }

////////////////////////////////////////////////////////////////
// Looping Arrays, Breaking And Continuing
////////////////////////////////////////////////////////////////

// const jonas = [
//     'Jonas',
//     'Schedtmann',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven'],
//     true
// ];

// const types = [];
// const fillArray = []

// for(let i = 0; i < jonas.length; i++) {
//     // Reading from jonas array
//     console.log(jonas[i], typeof jonas[i])

//     // Filling types array
//     // types[i] = typeof jonas[i]

//     fillArray[i] = i;
//     types.push(typeof jonas[i])
// }
// console.log(fillArray);
// console.log(types);

// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//     ages.push(2037 - years[i]);
// }

// console.log(ages);

// // continue and break
// console.log('--- ONLY STRING ---')

// i = 0 = 'string'
// i = 1 = 'string'
// i = 2 = 'number'
// i = 3 = 'string'
// i = 4 = 'object'
// i = 5 = 'boolean'

// for(let i = 0; i < jonas.length; i++) {
//     if(typeof jonas[i] !== 'string') { // boolean !== 'string'
//         console.log(i)
//         continue; 
//     }
//     console.log(jonas[i], typeof jonas[i]);
// }

// console.log('--- BREAK WITH NUMBER ---')
// for(let i = 0; i < jonas.length; i++) {
//     if(typeof jonas[i] === 'number') {
//         break;
//     }
//     console.log(jonas[i], typeof jonas[i])
// }

////////////////////////////////////////////////////////////////
// Looping Backwards and Loops in Loops
////////////////////////////////////////////////////////////////

// const jonas = [
//     'Jonas',
//     'Schedtmann',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven'],
// ];

// for (let i = jonas.length - 1; i >= 0; i--) {
//     console.log(i, jonas[i]);
// }

// for (let exercise = 1; exercise < 4; exercise++) {
//     console.log(`----- Starting exercise ${exercise}`);

//     for (let rep = 1; rep < 6; rep++) {
//         console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`)
//     }
// }