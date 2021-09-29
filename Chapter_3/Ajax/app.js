document.getElementById('button').addEventListener('click', loadData);


function loadData() {
    //create an xhr object
    const xhr = new XMLHttpRequest();

    //open
    xhr.open('GET', 'SampleData.txt', true);

    //optional - used for spinner/loader
    xhr.onprogress = function () {
        console.log("ready state", xhr.readyState);
    }


    //onload
    xhr.onload = function () {
        console.log("ready state", xhr.readyState);
        if (this.status === 200) {
            document.getElementById('output').innerHTML = `<h1>${this.responseText}<h1>`
        }
    }

    //log error in case
    xhr.onerror = function () {
        console.log("requeset error");
    }

    //send
    xhr.send();
}