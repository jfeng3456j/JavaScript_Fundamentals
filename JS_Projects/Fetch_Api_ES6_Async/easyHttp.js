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
    async get(url) {
        const response = await fetch(url);

        const resData = await response.json();

        return resData;

    }

    //create post request
    async post(url, data) {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        const resData = await response.json();

        return resData;
    }

    //create put request
    async put(url, data) {

        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        const resData = response.json();

        return resData;
    }

    //create delete request
    async delete(url) {
        const response = await fetch(url, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            }
        })

        const resData = await 'data is removed';

        return resData;
    }
}