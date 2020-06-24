const Zeus = {
    search(){
        return fetch(`https://jsonplaceholder.typicode.com/albums`)
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
                            return jsonResponse.map(album=>{
                                return {
                                    name: 'Bouboul',
                                    artist: album.userId,
                                    album: album.title,
                                    id: album.id
                                }
                            })
                        }                        
                    });
    }
}

export default Zeus;
