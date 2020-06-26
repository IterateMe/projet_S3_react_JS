const TutoApp = {
    getStudent(){
        return fetch(`http://localhost:8080/tutoratApp/api/users/Utilisateur?cip=boul0902`, {mode: 'cors', headers: {'Access-Control-Allow-Origin': 'http://localhost:3000', 'Access-Control-Allow-Methods': 'GET'}})
            .then(response => {
                if (response.ok){
                    return response.json();
                }
            })
            .then(jsonResponse =>{
                console.log(jsonResponse);
            })
    },

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

export default TutoApp;