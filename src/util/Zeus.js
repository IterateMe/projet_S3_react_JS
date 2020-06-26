const Zeus = {

    search(term, cip){
        return fetch(`http://localhost:8080/tutoratApp/api/zeus?url=http://zeus.gel.usherbrooke.ca:8080/ms/rest/groupe_cours?inscription=2017-01-01;trimestre_id=${term};departement_id=1808`)
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
                        let currIndex = -1;
                        let courseArray = jsonResponse.map(course=>{
                            currIndex += 1;
                            return {
                                id: currIndex,
                                name: course.ap_id,
                                description: course.description,
                                credits: course.credit_annuaire
                            }
                        })

                        return courseArray.filter((course, index, self) => {
                            return (index === self.findIndex((c) => c.name === course.name))
                        });
                    }                        
            });
    }
}

export default Zeus;
