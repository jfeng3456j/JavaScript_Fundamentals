//constructor
//es5
function easyHTTP() {
    this.http = new XMLHttpRequest();
}

//make an http get request
easyHTTP.prototype.get = function (url, callback) {
    this.http.open('GET', url, true);

    let self = this;
    this.http.onload = function () {
        if (self.http.status === 200) {
            callback(null, self.http.responseText);
        } else {
            callback('Error: ' + self.http.status);
        }
    }



    this.http.send();
}

//make an http post request
//callback is for asychronously
easyHTTP.prototype.post = function (url, data, callback) {
    let self = this;
    self.http.open('POST', url, true);

    self.http.setRequestHeader('content-type', 'application/json')

    self.http.onload = function () {
        callback(null, self.http.responseText);
    }


    self.http.send(JSON.stringify(data));
}

//make an http put request
easyHTTP.prototype.put = function (url, data, callback) {
    let self = this;
    self.http.open('PUT', url, true);

    self.http.setRequestHeader('content-type', 'application/json');

    self.http.onload = function () {
        callback(null, self.http.responseText);
    }
    self.http.send(JSON.stringify(data));
}

//make an http delete request
easyHTTP.prototype.delete = function (url, callback) {
    let self = this;

    self.http.open('DELETE', url, true);

    self.http.onload = function () {
        if (self.http.status === 200) {
            callback(null, 'Post removed');
        } else {
            callback('Error: ' + self.http.status);
        }
    }

    self.http.send();
}