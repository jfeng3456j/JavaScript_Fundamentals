class person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = dob;
    }

    greeting() {
        return `hello there ${this.firstName} ${this.lastName}`
    }

    calculateAge() {
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    getsMarried(newLastName) {
        this.lastName = newLastName;
    }

    static addNumbers(x, y) {
        return x + y;
    }
}

const mary = new Person('Mary', 'Smith', "11-01-2010");

console.log(mary);

console.log(mary.calculateAge())

mary.getsMarried('William');
console.log(mary)

//to use static, need to use class name
console.log(Person.addNumbers(1, 3));