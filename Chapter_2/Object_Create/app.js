const personPrototype = {
    greeting: function () {
        return `Hello There ${this.firstName} ${this.lastName}`;
    },
    getsMarried: function (newLastName) {
        this.lastName = newLastName;
    }
}

const mary = Object.create(personPrototype);
mary.firstName = "mary";
mary.lastName = "doe";
mary.age = 30;

console.log(mary);

mary.getsMarried("William");

console.log(mary.greeting);


const john = Object.create(personPrototype, {
    firstName: {
        value: 'John'
    },
    lastName: {
        value: 'Doe'
    },
    age: {
        value: 30
    }
});

console.log(john)

console.log(john.greeting())