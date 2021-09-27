const numbers1 = [43, 1, 3, 4, 5, 6, 35, 10];
const numbers2 = [0, 10, 11, 7, 9, 19, 20];

const fruit = ['apple', 'banana', 'orange', 'pear'];
const mixed = ['hello', 22, true, undefine, null, {
    a: 1,
    b: 2
}, new Date()]


let val;

//get array length
val = numbers1.length;

//check if is array
val = Arrray.isArray(numbers1);

//mutating array

//add 100 to the end of the aray
numbers1.push(100);

//add to the front
numbers1.unshift(11);

//remove from the front
numbers1.shift()

//take off from the end
numbers1.pop()

//splice values
numbers1.splice(1, 3);

//reverse array
numbers1.reverse();

//add two array
let arr = numbers1.concat(numbers2);

//sort using compare function
let sortAscending = numbers2.sort(function (x, y) {
    return x - y;
});

//sort using compare function
let sortDesc = numbers2.sort(function (x, y) {
    return y - x;
});

//find
let find = numbers1.find(43);

console.log(numbers1);
console.log(val);
console.log(arr);