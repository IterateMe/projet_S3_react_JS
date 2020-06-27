const TutoApp = {
    send(data, endPoint){
        return fetch(endPoint,
            {
                method: "POST",
                body: JSON.stringify(data),
                headers: { 'Content-Type': 'application/json; charset=UTF-8' }
            })
            .then(response =>{
                if(response.ok) {
                    return response.json();
                }
            })
            .then(jsonResponse => {
                console.log(jsonResponse);
                let message =  `Added\nid: ${jsonResponse.id} \ntitle: ${jsonResponse.title} \nbody: ${jsonResponse.body}`;
                alert(message);
            })
    }
}

export default TutoApp;