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
// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2020;
// console.log(ageJonas, ageSarah);

// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// // 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2;

// const firstName = 'Jonas';
// const lastName = 'Doe';
// console.log(firstName + " " + lastName);

// // Assignment Operators
// let x = 10 + 5; // 15
// x += 10; // x = x + 10
// x *= 4;
// x++;
// console.log(x);

// let y = 300 + 5;
// y += 50;
// y *= 2;
// y++;
// y--;
// y--;
// console.log(y);

// Comparison Operators
// console.log(ageJonas > ageSarah) // >, <, >=, <=
// console.log(ageSarah >= 18);

// const isFullAge = ageSarah >= 18;

// console.log(now - 1991 > now - 2018)

///////////////////////////////////////////////////////////////////////////////////////
// Operator Precendence
///////////////////////////////////////////////////////////////////////////////////////

// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;

// console.log(now - 1991 > now - 2018)

// let x, y;
// x = y = 25 - 10 - 5;
// console.log(x, y)

// const averageAge = (ageJonas + ageSarah) / 2;
// console.log(ageJonas, ageSarah, averageAge)

///////////////////////////////////////////////////////////////////////////////////////
// Coding Challenge #1
///////////////////////////////////////////////////////////////////////////////////////

// const markMass = 78;
// const markHeight = 1.69;
// const johnMass = 92;
// const johnHeight = 1.95;
// const markBMI = markMass / (markHeight * markHeight);
// const johnBMI = johnMass / (johnHeight * johnHeight)
// const markHigherBMI = markBMI > johnBMI

// console.log(markBMI);
// console.log(johnBMI)
// console.log(markHigherBMI)

// const markMass = 95;
// const markHeight = 1.88;
// const johnMass = 85;
// const johnHeight = 1.76;
// const markBMI = markMass / (markHeight * markHeight);
// const johnBMI = johnMass / (johnHeight * johnHeight)
// const markHigherBMI = markBMI > johnBMI

// console.log(markBMI);
// console.log(johnBMI)
// console.log(markHigherBMI)

///////////////////////////////////////////////////////////////////////////////////////
// Strings & Template literals
///////////////////////////////////////////////////////////////////////////////////////

// const firstName = 'Jonas';
// const job = 'teacher';
// const birthYear = 1991;
// const year = 2037

// const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';

// console.log(jonas);

// const jonasNew = `I'm ${firstName}, a ${(year - birthYear)} year old ${job}!`

// console.log(jonasNew);

// console.log(`Just a regular string...`);

// console.log('String with \n\
// multiple \n\
// lines');

// console.log(`String
// multiple
// lines`)

///////////////////////////////////////////////////////////////////////////////////////
// Taking decisions: if / else Statements
///////////////////////////////////////////////////////////////////////////////////////

// const age = 19; 

// if(age >= 18) {
//     console.log('Sarah can start driving license');
// } else {
//     const yearsLeft = 18 - age;
//     console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`)
// }

// const birthYear = 1998;
// let century;
// if(birthYear <= 2000) {
//     century = 20;
// } else {
//     century = 21;
// }

// console.log(century)

///////////////////////////////////////////////////////////////////////////////////////
// Coding Challenge #2
///////////////////////////////////////////////////////////////////////////////////////

// const markMass = 78;
// const markHeight = 1.69;
// const johnMass = 92;
// const johnHeight = 1.95;
// const markBMI = markMass / (markHeight * markHeight);
// const johnBMI = johnMass / (johnHeight * johnHeight)

// console.log(markBMI);
// console.log(johnBMI)
// console.log(markHigherBMI)

// const markMass = 95;
// const markHeight = 1.88;
// const johnMass = 85;
// const johnHeight = 1.76;
// const markBMI = markMass / (markHeight * markHeight);
// const johnBMI = johnMass / (johnHeight * johnHeight)
// const markHigherBMI = markBMI > johnBMI

// console.log(markBMI);
// console.log(johnBMI)
// console.log(markHigherBMI)

// if (markBMI > johnBMI) {
//     console.log(`Mark's BMI (${markBMI}) is higher than John's! (${johnBMI})`)
    
// } else {
//     console.log(`John's BMI (${johnBMI}) is higher than Mark's!(${markBMI})`)
// }

///////////////////////////////////////////////////////////////////////////////////////
// Type Conversation and Coercion
///////////////////////////////////////////////////////////////////////////////////////

// // type converstion
// const inputYear = '1991';
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// console.log(Number('Jonas'))
// console.log(typeof NaN);

// console.log(String(23), 23);

// // type coercion
// console.log('I am ' + 23 + ' years old');
// console.log('23' - '10' - 3);
// console.log('23' * '2');
// console.log('23' / '2');
// console.log('23' > '18');

///////////////////////////////////////////////////////////////////////////////////////
// Truthy and Falsy Values
///////////////////////////////////////////////////////////////////////////////////////

// 5 falsy values: 0, '', undefined, null NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 0;
if (money) {
    console.log("Don't spend it all ;)");
} else {
    console.log("You should get a job");
}

let height;
if (height) {
    console.log('YAY! Height is defined');
} else {
    console.log('Height is UNDEFINED');
}