const Zeus = {
    search(term){
        return fetch(`http://localhost8080/tutoratApp/api/makeZeusRequest?url=http://zeus.gel.usherbrooke.ca:8080/ms/rest/groupe_cours?inscription=2017-01-01&trimestre_id=${term}&departement_id=1808`)
            .then((response)=>{
                    if(response.ok){
                        return response.json();
                    }
                })
                .then(jsonResponse => {
                    if (!jsonResponse){
                        console.log('Nothing to show here. Move on');
                        return [];
                    } else {
                        return jsonResponse.map(course=>{
                            return {
                                id: course.ap_id,
                                name: course.ap_id,
                                description: course.description,
                                credits: course.credit_annuaire
                            }
                        })
                    }                        
            });
    }
}

export default Zeus;
