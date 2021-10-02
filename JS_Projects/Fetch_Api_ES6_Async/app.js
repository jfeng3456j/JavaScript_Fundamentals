const http = new EasyHTTP;

//Get Users
const users = http.get('https://jsonplaceholder.typicode.com/users')
    .then(data => console.log(data))
    .catch(err => console.log(err))


//Post request user
const data = {
    name: 'john',
    username: 'jd',
    email: 'johndoe@gmail.com'
}

http.post("https://jsonplaceholder.typicode.com/users", data)
    .then(response => console.log(response))
    .catch(err => console.log(err));


//Put request 
const putData = {
    name: 'john',
    username: 'jd',
    email: 'johndoe@gmail.com'
}

http.put("https://jsonplaceholder.typicode.com/users/10", putData)
    .then(response => console.log(response))
    .catch(err => console.log(err))


//Delete request
http.delete("https://jsonplaceholder.typicode.com/users/1")
    .then(response => console.log(response))
    .catch(err => console.log(err))