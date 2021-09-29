document.querySelector('.get-calls').addEventListener('click', getApi);


function getApi(e) {

    const number = document.querySelector('input[type="number"]').value;

    const xhr = new XMLHttpRequest();

    xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);

    xhr.onload = function () {
        if (this.status === 200) {
            const response = JSON.parse(this.responseText);

            let output = '';
            if (response.type === 'success') {
                response.value.forEach(function (data) {
                    output += `<li>${data.joke}</li>`;
                });

            } else {
                output += '<li>error</li>';
            }

            document.querySelector('.api').innerHTML = output;
        }
    }

    xhr.send();
    e.preventDefault();

}