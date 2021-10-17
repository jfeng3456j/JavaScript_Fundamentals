//syntax for importing module
const person = require('./mymodule')


//ES6 import
import {
    personES6,
    sayHello
} from './mymoduleES6';

//import everything as a variable mod
// import * as mod from './mymoduleES6';


import greeting from './mymoduleES6';


console.log(person.name);

console.log('ES importing', personES6.name);
console.log('ES 6 importing', sayHello())

console.log(greeting);