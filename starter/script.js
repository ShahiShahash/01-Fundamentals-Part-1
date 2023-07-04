/*let js = 'amazing';
console.log(40 + 8 + 23 - 10);
console.log('Jonas');
console.log(23);

let firstName = 'Jonas';
let _function = 27;
let PI = 3.1415;

let myFirstJob = 'Programmer';
let myCurrentJob = 'teacher';


let javaScriptFun = true;
//console.log(javaScriptFun);
//console.log(typeof true);
console.log(typeof javaScriptFun);
//console.log(typeof 'Shahash');

javaScriptFun = 'YES!';
console.log(typeof javaScriptFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(year);
console.log(typeof year);

console.log(typeof null);



let age = 30;
age = 31;

// const birthYear = 1991;
// birthYear = 1990;


var job = 'programmer';
job = 'teacher';

let lastName = 'Schmnadt';
console.log(lastName);

lecture- 13: Basic Operators;



const presentAge = 2037;
const ageJonas = presentAge - 1991;
const ageSarah = presentAge - 2020;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageSarah / 10, 2 ** 3);
// 2**3 means 2 to the power of 3 = 2 * 2 * 2 


const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);
console.log(typeof firstName);

// Assignment operators:
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--; // x = x - 1 
console.log(x);

// Comparison operators:
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;
console.log(isFullAge);

*/

// Lecture -14 Operator Precedence; (The order in which operators are executed.)

/*
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y)

const avgAge = (ageJonas + ageSarah) / 2
console.log(ageJonas, ageSarah, avgAge);

// Coding challenge 1:

// Data: 1
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark ** 2);
const BMIJohn = massJohn / (heightJohn ** 2);

const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markHigherBMI);
*/


// Lecture- 17 Template literals and Strings:

/*
const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year-birthYear) + ' years old' + job + '!';
console.log(jonas);

const jonasNew = `I'm ${firstName} a ${year-birthYear} years old ${job} !`;
console.log(jonasNew);

console.log(`Just a regular string as well....`);

console.log('String with \n\
multiple lines\n\
new lines');

console.log(`String
multiple
lines`);
*/


// Lecture- 18. Taking Decisions: if / else Statements

/*
const age = 15;

if (age >= 18) {
    console.log('Sarah can Start driving License 🚗')
} else {
    const yearLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearLeft} years :)`)
}

const birthYear = 2023;
let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);

// Coding Challenge #2

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark ** 2);
const BMIJohn = massJohn / (heightJohn ** 2);
console.log(`${BMIMark} ${BMIJohn}`);
if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI (${BMIMark}) is higher than John's ${BMIJohn}!`);
} else {
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
}

*/

// lecture - 20 Type Conversion Coercion

/*const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23), 23);

// type Coercion;

console.log('I am ' + 23 + ' years old');
console.log('I am ' + '23' + ' years old');
console.log(`I am 23 years old`);
console.log('23' + '10' + 3);
console.log('23' * '2');
console.log('23' / '2');


let n = '1' + 1; // '11'
n = n - 1; 
console.log(n);

const num = 2 + 3 + 4 + '5';
console.log(num);

const nI = '10' - '4' - '3' - 2 + '5';
console.log(nI);

*/

// Lecture 21 : Truthly and Falsy Values;

// 5 falsy values: 0, '', undefined, null, NaN

/*
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(""));
console.log(Boolean({}));

const money = 100;
if(money) {
    console.log(`Don't spend it all`);
} else {
    console.log(`You should get a job`);
}

let height = 0;
if(height) {
    console.log('Yah! height is defined');
} else {
    console.log(`Height is undefined!`);
}

*/

// Lecture- 22 Equality Operators: == vs. ===;

/*
const age = 18;
if (age === 18) {
    console.log(`You just became an adult. (strict)`);
}

const ageNew = '18';
if (ageNew === 18) {
    console.log('You are a teen (loose)');
}

const userNum = Number(prompt('What is your favourite number??'));
console.log(typeof userNum);

if (userNum === 23) { // '23' == 23
    console.log('Cool ! 23 is an amazing number.');
} else if (userNum === 7) {
    console.log('7 is also a cool numer!');
} else {
    console.log('Number is not 23 or 7');
}

if (userNum !== 23) {
    console.log('Why not 23?');
}

*/

// lecture-23 Boolean Logic;

const hasDriverLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriverLicense && hasGoodVision);
console.log(hasDriverLicense || hasGoodVision);
console.log(!hasDriverLicense);

// const shouldDrive = hasDriverLicense && hasGoodVision;
// if(shouldDrive) {
//     console.log('Sarah is able to drive');
// } else {
//     console.log('Someone else should drive....')
// }

const isTired = false;// C
console.log(hasDriverLicense && hasGoodVision && isTired);

if (hasDriverLicense && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive');
} else {
    console.log('Someone else should drive....')
}

// Coding challenge 3;

/*
const gameFirstDolphin = 96;
const gameSecondDolphine = 108;
const gameThirdDolphine = 89;

const gameFirstKoalas = 88;
const gameSecondKoalas = 100;
const gameThirdKoalas = 110;

const scoreDolphins = (gameFirstDolphin + gameSecondDolphine + gameThirdDolphine) / 3;

const scoreKoalas = (gameFirstKoalas + gameSecondKoalas + gameThirdKoalas) / 3;

console.log(scoreDolphins, scoreKoalas);

if(scoreDolphins > scoreKoalas) {
    console.log(`Dolphins win the trophy`);
}else if(scoreDolphins === scoreKoalas) {
    console.log(`Both win the trophy`);
}else {
    console.log(`Koalas win the trophy`);
}
*/

// Bonus 1
/*
const scoreDolphins = (97 + 112 + 80) / 3;
const scoreKoalas = (109 + 95 + 50) / 3;
console.log(scoreDolphins, scoreKoalas);

if(scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
    console.log(`Dolphins win the trophy`);
}else if( scoreDolphins < scoreKoalas && scoreKoalas >= 100) {
    console.log(`Koalas wins the trophy🏆`);
} else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
    console.log(`Both win the trophy🏆`);
} else {
    console.log('Noone wins the trophy')
}
*/

// Lecture -26. The switch Statement

/*
const day = prompt('The day of the week?');

switch(day) {
    case 'Monday': // day === 'monday'
        console.log('Plan Course Structure');
        console.log('Go to coding meetup');
        break;
    case 'Tuesday':
        console.log('Prepare theory videos');
        break;
    case 'Wednesday':
    case 'Thrusday':
        console.log('Write code examples');
        break;
    case 'Friday':
        console.log('Record videos');
    case 'Saturday':
    case 'Sunday':
        console.log('Enjoy the weekend:');
        break;
    default:
        console.log('Not a valid day!');
}

*/

/*
const newDay = 'saturday';
if(newDay === 'monday') {
    console.log('Plan course Structure');
    console.log('Go to coding setup');
}else if(newDay === 'tuesday') {
    console.log('Prepare theory videos');
}else if(newDay === 'wednesday' || newDay === 'thursday') {
    console.log('Write code examples');
}else if(newDay === 'friday') {
    console.log('Record videos');
}else if(newDay === 'saturday' || newDay === 'sunday') {
    console.log('Enjog the weekend Shahash!');
}else {
    console.log('Invalid day!');
}
*/

// Lecture - 27 Statements and Expressions;

/*
if(23>10) {
    const str = '23 is bigger';
}
const me='Jonas'
console.log(`I'm ${2037 - 1991} years old ${me}.`);
*/

// Lecture- 28. The Conditional (Ternary) Operator

/*
const age = 23;
age >= 18 ? console.log('I like to drink wine.🍷') :
console.log('I like to drink water.💦');

const drink = age >= 18 ? 'wine🍷' : 'water💦';
console.log(drink);

let drink2;
if(age>=18) {
    drink2 = 'wine';
} else {
    drink2 = 'water';
}
console.log(drink2);

console.log(`I like to drink ${age>=18 ? 'wine🍷' : 'water💦'}`)
*/

// Coding challenge 4 -

// if else condition
/*
let bill = 430;
let tip = (15 / 100) * bill;
let finalBillValue = bill + tip ;
if (bill > 50 && bill < 300) {
    console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${finalBillValue}.`);
} else if (bill > 300) {
    tip = (20 / 100) * bill;
    finalBillValue = bill + tip ;
    console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${finalBillValue}.`)
}
*/

// Ternary Operator

/*
const bill = 40;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.20;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);
*/


