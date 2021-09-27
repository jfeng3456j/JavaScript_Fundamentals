//Window methods / objects / properties

//alert
alert('hello');

//confirm
if (confirm("Are you sure")) {
    console.log("Yes");
} else {
    console.log("No")
}

//prompt
const input = prompt('How old are you?');
alert(input);

//outter height and width
let val;
val = window.outerHeight;
val = window.outerWidth;

//inner height and width
val = window.innerHeight;
val = window.innerWidth;


//localtion object
val = window.location;
let arr = [window.localtion.hostname, window.localtion.href, window.localtion.port, window.localtion.search]

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

//redirect
window.localtion.href = 'http://google.com'

//redirect
// window.location.reload();

//history object
window.history.go(-2);
val = window.history.length;

//navigator
val = window.navigator;

console.log(val);