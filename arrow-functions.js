/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function

//function addTwoNumbers(a, b) {
    //Code block
//    return a + b;
//}
//let sum = addTwoNumbers(3, 5);
//console.log(sum);

// Arrow Function With Parameters

const addTwoNumbers = (a, b) => {
    //Code block
    return a + b;
}
let sum = addTwoNumbers(3, 5);
console.log(sum);

// Single Line Arrow Function With Parameters

//const addTwoNumbers2 = (a, b) => (a + b); also valid
const addTwoNumbers2 = (a, b) => a + b;
let sum2 = addTwoNumbers2(6, 4);
console.log(sum2);

// Implicit Returns

const saySomething = message => console.log(message);
saySomething('Hello World!!');

const sayHello = () => console.log('hello');
sayHello()

// Returning Multiple Lines

// Arrow function Challenge

//You will create a function using the arrow syntax that should return the average marks of a subject. 
//Your function should loop through the array that is passed in. For each student contained within, you should: 1. Check if the subject passed into your function is in said student's results object; 2. If it is, add it to a cumulative total of all results for that subject. 3. Finally, return the average result for the subject.
//You will only be asked to return the average marks for the subject english, but your function must be able to return the average marks if another subject name is used, and the tests will check for this.
// 1. Declare a variable named averagePoints using the keyword const
// 2. Assign it an arrow function, which should take two parameters named: arr and subject
// 3. The function should have a return statement
// 4. Declare a variable named: averageMarks using the keyword let
// 5. Assign it the return value from calling the function averagePoints, and passing it the students array and one of the following strings: 'maths', 'english', 'cad', 'science', 'art'
// 6. log out the variable averageMarks to see its value
// 7. The function should return the correct value no matter which subject is used.

const returnMultipleLines = () => (
    `<p>
       This is a multiple string
     <p>`
)
console.log(returnMultipleLines());

let students = [
    {
        name: 'John',
        subjects: ['maths', 'english', 'cad'],
        teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
        results: {maths: 90, english: 75, cad: 87},
    },
    {
        name: 'Emily',
        subjects: ['science', 'maths','english', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', english: 'Joan', art: 'Simon'},
        results: {science: 93, maths: 95, english: 80, art: 95},
    },
    {
        name: 'Adam',
        subjects: ['science', 'maths', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
        results: {science: 63, maths: 79, art: 95},
    }
];


const averagePoints = (arr, subject) => {
    let allPoints = 0;
    let sum = 0;
    for(let itm of arr) {
      if(subject in itm.results) {
        allPoints += itm.results[subject];
        sum+=1;
      }
    }
    return allPoints / sum;
};

let averageMarks = averagePoints(students, 'english');
console.log(averageMarks);