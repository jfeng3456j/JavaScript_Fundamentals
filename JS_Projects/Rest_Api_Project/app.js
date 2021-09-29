const http = new easyHTTP;

//GET posts
http.get('https://jsonplaceholder.typicode.com/posts', function (error, response) {

    if (error) {
        console.log(error);
    } else {
        console.log(response);
    }


});

//Create data
const data = {
    title: "New Post",
    body: "New Post"
}

//Create http post request
http.post('https://jsonplaceholder.typicode.com/posts', data, function (error, post) {
    if (error) {
        console.log(error);
    } else {
        console.log(post);
    }
})


//Create put data
const putData = {
    title: "New Post 2",
    body: "New Post 2"
}

//Create put request
http.put('https://jsonplaceholder.typicode.com/posts/100', putData, function (err, post) {
    if (err) {
        console.log(err);
    } else {
        console.log(post)
    }
})


//create delete request
http.delete('https://jsonplaceholder.typicode.com/posts/100', function (error, response) {

    if (error) {
        console.log(error);
    } else {
        console.log(response);
    }


});