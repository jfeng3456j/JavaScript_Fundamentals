//maps are key value pair
const map1 = new Map();

//set keys
const key1 = 'some string',
    key2 = {},
    key3 = function () {};

//SetMap value by key
map1.set(key1, 'Value of key1');
map1.set(key2, 'Value of key2');
map1.set(key3, 'Value of key3');

//get values by key
console.log(map1.get(key1), map1.get(key2), map1.get(key3))

//count values
console.log(map1.size)

//iterating map using for of to get keys and values
for (let [key, value] of map1) {
    console.log(`${key} = ${value}`);
}

//get the keys
for (let key of map1.keys()) {
    console.log(`${key}`);
}

//get the values
for (let value of map1.values()) {
    console.log(`${value}`);
}

//for each
map1.forEach(function (key, value) {
    console.log(`${key} = ${value}`);
})

//convert to Array of key value pair
const keyValArr = Array.from(map1);

//convert to Array of value pair
const valArr = Array.from(map1.values);

//-------------------------------------
//sets - store unique values of any type

const set1 = new Set();

//add values
set1.add(12);
set1.add('12');
set1.add({
    name: 'john'
})

//check for values use the has()
set1.has(12); //return true
set1.has({
    name: 'john'
}); //return false because object are reference, store in the heap

//delete from set
set1.delete(12);

//iterating through set
for (let item of set1) {
    console.log(item)
}

//iterating through set.keys
for (let item of set1.keys()) {
    console.log(item)
}

//iterating through set.values
for (let item of set1.values()) {
    console.log(item)
}

//forEach
set1.forEach((value) => {
    console.log(value)
})

//convert set to array
const setArray = Array.from(set1)