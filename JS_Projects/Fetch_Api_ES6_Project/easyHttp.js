/**
 * EasyHTTP Library
   Library for making HTTP Requests
 * 
   @version 2.0.0
   @author 
   @license MIT
 */


class EasyHTTP {
    //create http get request
    get(url) {
        return new Promise((resolve, reject) => {
            fetch(url)
                .then(res => res.json())
                .then(data => resolve(data))
                .catch(err => reject(err))
        });

    }

    //create post request
    post(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify(data)
                })
                .then(response => response.json())
                .then(data => resolve(data))
                .catch(err => reject(err));
        })
    }

    //create put request
    put(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                    method: 'PUT',
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify(data)
                })
                .then(response => response.json())
                .then(data => resolve(data))
                .catch(err => reject(err))
        })
    }

    //create delete request
    delete(url) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                    method: 'DELETE',
                    headers: {
                        'content-type': 'application/json'
                    }
                })
                .then(response => response.json())
                .then(() => resolve('post is removed'))
                .catch(err => reject(err))

        })
    }
}