const TutoApp = {

    async validateSignIn(cip){
        return fetch(`http://localhost:8080/tutoratApp/api/users?cip=${cip}`)
            .then(response => {
                if (response.ok){
                    return response.json();
                }
            })
            .then(jsonResponse => {
                if(jsonResponse.length > 0){
                    console.log(jsonResponse);
                    return jsonResponse;
                }
                console.log('No entry found');
                return false;
            });
    },

    send(data, endPoint){
        return fetch(endPoint,
            {
                method: "POST",
                body: JSON.stringify(data),
                headers: { 'Content-Type': 'application/json; charset=UTF-8' }
            })
            .then(response =>{
                if(response.ok) {
                    alert("Success")
                }
                else {
                    alert('Une erreur est survenue')
                    return null;
                }
            })
            .then(jsonResponse => {
                return true;
            })
            .catch(erreur => {
                alert(erreur)
            })
    },

    getCourseAsMentorConfirmed(cip){
        return fetch(`http://localhost:8080/tutoratApp/api/jumelages?mentore_par=${cip}`)
            .then(response => {
                if(response.ok){
                    return response.json()
                }
            })
            .then(jsonResponse => {
                if(!jsonResponse){
                    return []
                } else {
                    console.log('Getting courses as Mentor');
                    let courseArray = jsonResponse.map(course => {
                        return {
                            id: course.cours_id,
                            semester: course.session_id,
                            student: course.etudiant,
                            mentor: course.mentore_par
                        }
                    })
                    return courseArray
                }
            })
    },

    getCourseAsStudent(cip){
        return fetch(`http://localhost:8080/tutoratApp/api/jumelages?etudiant=${cip}`)
            .then(response => {
                if(response.ok){
                    return response.json()
                }
            })
            .then(jsonResponse => {
                if(!jsonResponse){
                    return []
                } else {
                    console.log('Getting courses as Student');
                    let courseArray = jsonResponse.map(course => {
                        return {
                            id: course.cours_id,
                            semester: course.session_id,
                            student: course.etudiant,
                            mentor: course.mentore_par
                        }
                    })
                    return courseArray
            }
        })
    },

    createMatches(){
        return fetch('http://localhost:8080/tutoratApp/api/jumelages/makeJumelages')
        .then(response => {
            if (response){
                console.log(response);
            }
        })
    },

    resetMatches(){
        return fetch(`http://localhost:8080/tutoratApp/api/jumelages/resetJumelages`)
        .then(response => {
            if(response === "OK"){
                console.log(response);
            }
        })
    }
}

export default TutoApp;

/*
*      "cours_id": "GEN101",
*      "session_id": "E20",
*      "etudiant": "frev2701",
*      "mentore_par": "graw3301"
*/