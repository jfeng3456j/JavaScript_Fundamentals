const posts = [{
        title: 'Post one',
        body: 'This is post one'
    },
    {
        title: 'Post two',
        body: 'This is post two'
    }
]

// function createPost(post) {
//     setTimeout(function () {
//         posts.push(post)
//     }, 2000)
// }

// function getPosts() {
//     let output = '';
//     setTimeout(function () {

//         posts.forEach(function (post) {
//             output += `<li>${post.title}</li>`;
//         })

//         document.querySelector(".output").innerHTML = output;

//     }, 1000)

// }



// getPosts();

//callback asynchronous
function createPost(post) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            posts.push(post);

            const error = true;
            if (!error) {
                resolve();
            } else {
                reject('Error: Something is not right');
            }

        }, 2000)
    });


}

function getPosts() {
    let output = '';
    setTimeout(function () {

        posts.forEach(function (post) {
            output += `<li>${post.title}</li>`;
        })

        document.querySelector(".output").innerHTML = output;

    }, 1000)

}

createPost({
    title: "Post Three",
    body: "this is post three"
}).then(getPosts).catch(function (err) {
    console.log(err)
});