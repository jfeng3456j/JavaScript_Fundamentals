/*
 * javascript has 3 variable declaration - var, let, const 
 */

//var 
var name = 'john doe';
console.log(name);


//let
let letName = 'John Smith';
console.log(letName);
letName = 'James Smith';
console.log(letName);

//const - > final, can't change
const name3 = 'Joey Smith';
console.log(name3);
//name3 = "Jessie Smith"; //will create an error here

//object
const person = {
    name: 'John',
    age: '30'
}

console.log(person);
//mutate the properties

person.name = 'Sarah';
person.age = 32;

console.log(person);


