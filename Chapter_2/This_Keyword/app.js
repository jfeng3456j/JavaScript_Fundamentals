//constructor function

function Person(name, dob) {
    //this refers to the current object 
    this.name = name;
    this.birthday = new Date(dob);
    this.calculateAge = function () {
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

}

const person = new Person('john', '9/20/1999');

console.log(person);