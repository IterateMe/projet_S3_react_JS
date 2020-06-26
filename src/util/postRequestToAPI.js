const postRequest = {
    send(data, endPoint){
        return fetch(endPoint,
            {
                method: "POST",
                headers: { 'Content-Type': 'application/json; charset=UTF-8' },
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

export default postRequest