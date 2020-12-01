    // let js = 'amazing';
    // if(js === 'amazing')

    // console.log(40 + 8 + 23 - 10);

    // console.log("Jonas");
    // console.log(23)

    // let firstName = "Matilda";
    

    // console.log(firstName);
    // console.log(firstName);
    // console.log(firstName);

    // let jonas_matilda = "JM";
    // let $function = 27;

    // let person = "jonas";
    // let PI = 3.1415;

    // let myFirstJob = "Programmer";
    // let myCurrentJob = "Teacher";

// let country = "Canada";
// let continent = "North America";
// let population = 579;

// console.log(country);
// console.log(continent);
// console.log(population);

// let javascriptIsFun = true;
// console.log(javascriptIsFun)

// console.log(typeof true);
// console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');

// javascriptIsFun = 'YES!';
// console.log(typeof javascriptIsFun)

// let year;
// console.log(year);
// console.log(typeof year);

// year = 1991;
// console.log(typeof year);

// console.log(typeof null);

// let age = 30;
// age = 31;

// const birthYear = 1991;
// birthYear = 1990
// const job;

// var job = 'programmer';
// job = 'teacher';

// lastName = 'Doe';
// console.log(lastName);

///////////////////////////////////////////////////////////////////////////////////////
// Basic Operators
///////////////////////////////////////////////////////////////////////////////////////

// Math Operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2020;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2;

const firstName = 'Jonas';
const lastName = 'Doe';
console.log(firstName + " " + lastName);

// Assignment Operators
let x = 10 + 5; // 15
x += 10; // x = x + 10
x *= 4;
x++;
console.log(x);

let y = 300 + 5;
y += 50;
y *= 2;
y++;
y--;
y--;
console.log(y);

// Comparison Operators
console.log(ageJonas > ageSarah) // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018)