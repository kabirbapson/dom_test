const greeting = (fname, lname) => `Hello ${fname} ${lname}`

const square = x => x * x

const largestNum = (num1, num2) => num1 > num2 ? num1 : num2

const animals = ['llama', 'chicken', 'dog', 'cat'];

animals.forEach( eachAnimal => {
    const upperCase = eachAnimal.toUpperCase();
    // console.log(upperCase);
});

const scores = [5, 10, 15, 20];
const totals = (accumulator, curValue) => accumulator + curValue;
console.log(scores.reduce(totals));