document.getElementById("button1").addEventListener("click", getText);

document.getElementById("button2").addEventListener("click", getJson);

document.getElementById('button3').addEventListener('click', getApi);

function getText() {
    fetch("customer.txt")
        .then(response => response.text())
        .then(data => {
            document.getElementById("output").innerHTML = data;
        });
}

function getJson() {
    fetch("customer.json")
        .then(response => response.json())
        .then(data => {
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
        .catch(err => {
            console.log(err);
        });
}

function getApi() {
    fetch('https://api.github.com/users')
        .then(response => response.json())

        .then(data => {
            console.log(data)
            let output = '';
            data.forEach(function (user) {
                output += `<li><a href=${user.html_url} target="_blank">${user.html_url}</a></li>`
            })

            document.getElementById('output').innerHTML = output;
        })
        .catch(err => {
            console.log(err);
        })
}