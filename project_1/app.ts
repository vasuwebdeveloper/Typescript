const number1 = 5.9;
const number2 = 9;


function add(number1: number,number2: number){
    return number1+number2;
}

var result = add(number1,number2);
console.log(result);



let sentence: string;
sentence = "stringval";


// Object, Array, Tupple

const person : {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string]; // Tupple
   } = {
   name: 'Vasu',
   age: 26,
   hobbies: ['Sports', 'Cooking'],
   role: [2, 'author']
   };
   