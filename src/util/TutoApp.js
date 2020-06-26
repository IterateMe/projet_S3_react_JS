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
    }
}

export default TutoApp;