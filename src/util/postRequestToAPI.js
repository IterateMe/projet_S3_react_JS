const postRequest = {
    send(data, endPoint){
        return fetch(endPoint,
            {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            })
            .then(function(response) {
                if(response.ok) {
                    return response.json();
                }
            })
            .then(responseJson => {
                console.log(responseJson.status);
                alert(responseJson.status)
            })
    }
}