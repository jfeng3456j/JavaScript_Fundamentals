//Destructring assignment

let a, b;
[a, b] = [100, 200]; //a = 100, b = 200

//Rest pattern
[a, b, ...rest] = [100, 200, 300, 400, 500]; //... is a spread operator
//rest returns an array of 300, 400,500
console.log(rest);

//destructure object
({
    a,
    b
} = {
    a: 100,
    b: 200,
    c: 300,
    d: 400,
    e: 500,
})(
    //destructure object using rest
    ({
        a,
        b,
        ...rest
    } = {
        a: 100,
        b: 200,
        c: 300,
        d: 400,
        e: 500,
    })
);

console.log(rest);

//Array destructuring
//-----------------------------
const people = ['john', 'mike', 'mary'];
const [person1, person2, person3] = people;
//put john -> person1, mike -> person2...

//Parse array returned from function
function getPeople() {
    return ['john', 'mike', 'mary'];
}

//get the same result as above
let person1, person2, person3;
[person1, person2, person3] = getPeople();


//object destructure
//-----------------------------
const person = {
    name: 'john doe',
    age: 32,
    city: 'Chicago',
    gender: 'male',
    sayHello: function () {
        console.log('hello')
    }
}

//old ES5
const name = person.name,
    age = person.age,
    city = person.city;

//es6 object destructuring
const {
    name,
    age,
    city,
    sayHello
} = person

console.log(name, age, city)