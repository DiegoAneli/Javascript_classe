const btn = document.getElementById('btn');
const jokeImg = document.getElementById('jokeImg');
const jokeElement = document.getElementById('joke')
const jokeId = document.getElementById('idJ');


const endpoint = 'https://api.chucknorris.io/jokes/random';



function fetchDati(){

    fetch(endpoint)

        //gestione risposta in formato json
        .then(response => {

            if(!response.ok){

                throw new Error(`Errore Http: ${response.status}`);
            }

            return response.json();
        })


        .then(data => {
            //funzone di render users
            //andrà richiamata la funzione di renderUsers();
            renderJoke(data);
        })

        .then(data => console.log(data));

    
}



function renderJoke(data){



    jokeElement.textContent = data.value;

    jokeId.textContent = `Creata il : ${ 
                                            new Date(data.created_at).toLocaleString()
                                        
                                        }`;

}


btn.addEventListener('click', fetchDati);



fetchDati();