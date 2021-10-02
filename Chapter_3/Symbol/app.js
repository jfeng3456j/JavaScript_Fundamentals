//Createa a symbol

const sym1 = Symbol();
const sym2 = Symbol('sym2');

console.log(sym1);
console.log(sym2);

//Benefits of symbol is to create Unique object key
const key1 = Symbol();
const key2 = Symbol('sym2');

const myObject = {}

//create object variable
myObject[key1] = 'prop1';
myObject[key2] = 'prop2';

//create key3&4 property
myObject.key3 = 'prop3';
myObject.key4 = 'prop4';

//Symbols are not enumerable in for in
for (let i in myObject) {
    console.log(`${i} : ${myObject[i]}`)
}

//Symbols are ignored by JSON.stringify
console.log(JSON.stringify({
    key: 'propr'
}))
console.log(JSON.stringify({
    [Symbol('sym1')]: 'propr'
}))