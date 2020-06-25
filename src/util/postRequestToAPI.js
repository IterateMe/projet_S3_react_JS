const postRequest = {
    send(data, endPoint){
        return fetch(endPoint,
            {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            }).then( response => response.json())
    }
}