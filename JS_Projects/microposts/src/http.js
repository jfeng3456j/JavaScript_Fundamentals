class EasyHttp {
    //make an http GET request
    async get(url) {
        const response = await fetch(url);

        const resData = await (response.json());

        return resData;
    }

    //make an http POST request
    async post(url, data) {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },

            body: JSON.stringify(data)
        });

        const resData = await (response.json());

        return resData;
    }


    //make an http PUT request
    async put(url, data) {
        const response = await fetch(url, {
            method: "PUT",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(data)
        });

        const resData = await (response.json());

        return resData;
    }

    //make http DELETE request
    async delete(url) {
        const response = await fetch(url, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json"
            }
        });

        const resData = await "User Deleted....";
        return resData;
    }
}

export const http = new EasyHttp();