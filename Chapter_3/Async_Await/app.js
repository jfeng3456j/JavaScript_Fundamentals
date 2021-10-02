// //asycn makes a function return a promise
// async function myFunc() {

//     //await is waiting the func to be resolved
//     const promise = new Promise((resolve, reject) => {
//         setTimeout(() =>
//             resolve('HELLO'), 10000)

//     })

//     const error = true;

//     if (!error) {
//         const res = await promise;
//         return res;
//     } else {
//         await Promise.reject(new Error('Something went wrong'))
//     }

//     //await until the promise is resolved taht is 1sec

// }

// myFunc()
//     .then(res => console.log(res))
//     .catch(err => console.log(err))


//using fetch with async

async function getUsers() {

    //await response for the fetch call
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    //only procced once the promise is resolved
    const data = await response.json();

    //only proceed once second promise  is resolved
    return data;
}

getUsers().then(response => console.log(response))