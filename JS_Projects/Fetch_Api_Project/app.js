document.getElementById("button1").addEventListener("click", getText);

document.getElementById("button2").addEventListener("click", getJson);

document.getElementById('button3').addEventListener('click', getApi);

function getText() {
    fetch("customer.txt")
        .then(function (response) {
            return response.text();
        })
        .then(function (data) {
            document.getElementById("output").innerHTML = data;
        });
}

function getJson() {
    fetch("customer.json")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            let output = "";

            data.forEach(function (customer) {
                output += `
                <li>${customer.name}</li>
                <li>${customer.company}</li>
                <li>${customer.phone}</li>
                `;

                document.getElementById("output").innerHTML = output;
            });
        })
        .catch(function (err) {
            console.log(err);
        });
}

function getApi() {
    fetch('https://api.github.com/users')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data)
            let output = '';
            data.forEach(function (user) {
                output += `<li><a href=${user.html_url} target="_blank">${user.html_url}</a></li>`
            })

            document.getElementById('output').innerHTML = output;
        })
        .catch(function (err) {
            console.log(err);
        })
}