const Zeus = {
    search(term){
        return fetch(`http://localhost:8080/tutoratApp/api/zeus?url=http://zeus.gel.usherbrooke.ca:8080/ms/rest/groupe_cours?inscription=2017-01-01;trimestre_id=${term};departement_id=1808`)
            .then((response)=>{
                    if(response.ok){
                        return response.json();
                    }
                })
                .then(jsonResponse => {
                    if (!jsonResponse){
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
            })
    },

    getStudiedCourses(cip, courses){
        return fetch(`http://localhost:8080/tutoratApp/api/zeus?url=http://zeus.gel.usherbrooke.ca:8080/ms/rest/controle_note?inscription=2017-01-01;cip_etudiant=${cip}`)
            .then(response => {
                if(response.ok){
                    return response.json();
                }
            })
            .then(jsonResponse=>{
                let courseArray = jsonResponse.map(course=>{
                    return{
                        id: course.ap_id
                    }
                })
                return courseArray.filter((course, index, self) => {
                    return (index === self.findIndex((c) => c.id === course.id))
                });
            })
            .then(studiedCourses => this.getCoursesToDisplay(courses, studiedCourses));
    },

    getCoursesToDisplay(availableCourses, studiedCourses){
        let coursesToDisplay = [];
        studiedCourses.forEach(course => {
            let currentCourse = availableCourses.find(c => c.name === course.id);
            if(currentCourse){
                coursesToDisplay.push(currentCourse);
            }
        })
        return coursesToDisplay;
    }
}

export default Zeus;

/*
    & = %26
*/

/*

*/