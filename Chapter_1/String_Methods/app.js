const fName = 'william';
const lName = 'Dee';
const str = 'Hello there there is a dog';

let val = fName +' '+ lName;
//use concatenat()
console.log(fName.concat(' ',lName));

//append
val = 'John ';
val += 'Doe';

//Escape sequence
val2 = 'Today\'s a great day'; //use backslash \


//Methods
val3 = fName.length;

val4 = fName.toUpperCase();
val4 = lName.toLowerCase();

val5 = fName[0]; //taking the 0 index of the string as string

//indexOf
val6 = fName.indexOf('i');

//lastIndexOf
val7 = fName.lastIndexOf('l'); //return 3

//charAt
val8 = fName.charAt('2'); //return l


//get last char
val9 = fName.charAt(fName.length - 1);

//substring
val10 = fName.substring(0, 3); // wil

//slice
val11 = fName.slice(0, 3); //wil similar to substring
val12 = fName.slice(-3); //return iam, it starts from the back

//split
val13 = str.split('\\s'); //split by space

//replace
val14 = str.replace('there', ' that');

//includes - true or false
val15 = str.includes('Hello');

console.log(val);