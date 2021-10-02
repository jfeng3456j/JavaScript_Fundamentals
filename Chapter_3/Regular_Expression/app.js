let re;

re = /hello/i; // i => make its case insensitive
let ree = /hello/g; // g => global search

console.log(re);

//fucntion to evaluate regular expression
//exe() return result in an array or null
const result = re.exec('John says hello world');

//return match string - hello and at what position
console.log(result);
console.log(result.index)
console.log(result.input);

//test() returns true or false if there's a match
const result2 = re.test('Hello');
console.log(result2)

//match() returns result array or null
const str = 'hello There'
const result3 = str.match(re);
console.log(result3);

//search() returns index of the first match if not found returns -1
const str1 = 'hello there';
const result4 = str1.search(re);
console.log(result4)

//replace() returns new string with some or all match
const str2 = 'Hello there';
const result5 = str2.replace(re, 'Hi');
console.log(result5)



//------------------------------------------------
//Meta character match
let re2;
re2 = /^h/i; // ^ => must start with h case insensitive
re2 = /world$/i; // must ends with world
re2 = /^hello$/i; //must starts with hello and ends with hello
re2 = /h.llo$/i; //. => wild card, any word matchs h*llo
re2 = /h*llo$/i; //* => match any characters 0 or more times
re2 = /gre?a?y/i; //? => optional character, e or a is optional

//escape characters
re2 = /gre?a?y\?/i; // \ => escape character


//Brackets [] - character sets//------------------------------------------------
re2 = /gr[ae]y/i // [] => must be a or e
re2 = /[GF]ray/i; //[] => must be G or F case sensitive
re2 = /[^GF]ray/i; //[^] => match anything except a G or F
re2 = /[A-Z]ray/ //[A-Z] => match any uppercase case
re2 = /[a-z]ray/ //[a-z] => match any lower case
re2 = /[A-Za-z]ray/ //[A-Za-z] match any characters
re2 = /[0-9]ray/ //match any digits

//Braces {} - quantifiers ------------------------------------------------
re2 = /Hel{2}o/i; //{2} => match exactly 2 characters of l

re2 = /hel{2,4}o/i //{2,4} => give a range of match 2 to 4 characters of l

re2 = /hel{2,}o/i //{2,} => give a range of match 2 to n characters of l

//parenthese- Grouping
//------------------------------------------------
re2 = /([0-9]x){3}/i; // () => match any digits plus x 3 times

re2 = /^([0-9]x){3}$/i; // () => must begin and ends with any digits plus x 3 times 


//short hand- character
//------------------------------------------------
re2 = /\w/i; // w => word character search -alphanumeric or _

re2 = /\w+/i; //w+ => one oe more word character search -alphanumeric or _

re2 = /\W/i; //W => uppercase w - non word character

re2 = /\d/i; //d => match 1 digits

re2 = /\d+/; //d => match any digits 0 or more 

re2 = /\D/; //D => match non digit

re2 = /\s/; //s => match white space

re2 = /\S/; //S => match non white space

re2 = /Hell\b/i; //\b => word boundary find the exact word: hell, not hello


//assertion - condition
//------------------------------------------------
re2 = /x(?=y)/; //match x only if followed by y

re2 = /x(?!y)/; // ! => match x only if Not followed by


//string to match
const str3 = 'daxy';

//log result
const result6 = re2.exec(str3);
console.log(result6);
reTest(re2, str3)

function reTest(re, str) {
    if (re.test(str)) {
        console.log(`${str} matched ${re.source}`)
    } else {
        console.log(`${str} does not match ${re.source}`)
    }
}