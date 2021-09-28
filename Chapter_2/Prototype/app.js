//person constructor
function Person(firstName, lastName, dob) {
    //this refers to the current object 
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
    // this.calculateAge = function () {
    //     const diff = Date.now() - this.birthday.getTime();
    //     const ageDate = new Date(diff);
    //     return Math.abs(ageDate.getUTCFullYear() - 1970);
    // }

}

Person.prototype.calculateAge = function () {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

Person.prototype.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
}

//Get Married
Person.prototype.getsMarried = function (newLastName) {
    this.lastName = newLastName;
}

const john = new Person('john', 'smith', '8/1/2001');
const mary = new Person('mary', 'smith', '5/1/1990');

console.log(john.calculateAge())
console.log(mary.getFullName())

mary.getsMarried('johnson');
console.log(mary.getFullName())