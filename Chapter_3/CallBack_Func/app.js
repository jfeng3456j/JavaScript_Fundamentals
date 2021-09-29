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
function createPost(post, callback) {
    setTimeout(function () {
        posts.push(post);
        callback();
    }, 2000)
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
}, getPosts);