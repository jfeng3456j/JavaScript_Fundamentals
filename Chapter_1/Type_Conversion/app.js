let val;

//num to string using String()
val = String(123);

//output
console.log(val);
console.log(typeof val)
console.log(val.length);

//convert boolean to string
val2 = String(true)
console.log(val2);
console.log(typeof val2)
console.log(val2.length);

//date to string
val3 = String(new Date);
console.log(val3);
console.log(typeof val3)
console.log(val3.length);


//array to string
val4 = String([1, 2, 3, 4]);
console.log(val4);
console.log(typeof val4)
console.log(val4.length);


//toString() method
val6 = (60).toString();
console.log(val6);
console.log(typeof 6)
console.log(val6.length);


//String to num using Number()
val7 = Number('123');
console.log(val7);
console.log(typeof 6);
console.log(val7.toFixed());


//bool to num
val8 = Number(true);
console.log(val8);
console.log(typeof 8);
console.log(val8.toFixed());

//arry to num returns NaN
val9 = Number([1, 2, 3, 4])
console.log(val9);
console.log(typeof 9);
console.log(val9.toFixed());

//using parseInt()
val10 = parseInt('100.30');
val10 = parseFloat('100.30');
console.log(val10);
console.log(typeof 10);
console.log(val10.toFixed(2));
