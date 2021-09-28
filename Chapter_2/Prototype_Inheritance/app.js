//Person constructor
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

//Greeting
Person.prototype.greeting = function () {
    return `Hello there ${this.firstName} ${this.lastName}`;
}

const person1 = new Person('John', 'Doe');

console.log(person1.greeting());

//Customer constructor
function Customer(firstName, lastName, phone, membership) {
    //call() can another function from another context
    Person.call(this, firstName, lastName);

    this.phone = phone;
    this.membership = membership;
}

//Inherit the Person prototype methods
Customer.prototype = Object.create(Person.prototype);

//use customer.prototype return customer()
Customer.prototype.constructor = Customer;

//Create customer
const customer1 = new Customer('Tom', 'Smith', '314-900-9000', 'standard');

console.log(customer1);

//overrid greeting()
Customer.prototype.greeting = function () {
    return `Override Hello there ${this.firstName} ${this.lastName}`;
}

console.log(customer1.greeting());