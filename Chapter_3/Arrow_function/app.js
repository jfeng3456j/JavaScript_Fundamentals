const sayHello = function () {
    console.log('hello')
}

//arrow func
const sayHello2 = () => {
    console.log('hello')
}

const sayHello3 = () => console.log('hello')

//return hello string
const sayHello4 = () => "hello"

//return object literal
const sayHello5 = () => ({
    msg: 'hello'
})

//one parameter doesn't need parenthesis
const sayHello6 = name => console.log(`Hello ${name}`);

sayHello();

//use arrow function as callback

const users = ['Joe', 'James', 'Jane']

//map elements in array and return a new array
const nameLength = users.map(function (name) {
    return name.length;
})

const arrowFunction = user.map(name => {
    name.length;
})

console.log(nameLength);

console.log(arrowFunction)