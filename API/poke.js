/**
 * 
 * Esercizio poke api
 * 
 * è richiesto di andare a costruire una lista di li che verranno appesi ad una lista
 * 
 * renderizzare il name 
 * 
 * "species": {
    "name": "ditto",
    "url": "https://pokeapi.co/api/v2/pokemon-species/132/"
  },


  ciclare su held_item , verificando che se contiene almeno un oggetto
  iteriamo con foreach su ciascun oggetto e estraiamo 
  
  il nome dell oggetto
  e per ogni versione mostriamo "rarity"

 * 
 */

const endpoint = 'https://pokeapi.co/api/v2/pokemon/ditto';

const userList = document.getElementById('user-list');

function fetchPokemon(){

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
            renderPokemon(data);
        })

        .then(data => console.log(data));

    
}




function renderPokemon(data){


    //creo un li per le species name di ditto

    //appendo il li nella lista html (ul con id user-list)

    //controllo se ha oggetti

    //verifico se l array held_items ha almeno un oggetto

    //iteriamo con foreach su ciascun oggetto ("metal-powder","quick-powder")

    //estraiamo il nome dell oggetto

    //per ogni versione mostro la rarity

    //per lo stesso obj cicliamo i dettagli per version_details

    //creo un nuovo li

    //testo composto dal nome obj, version_details e rarity(numero)

    //aggiungo la riga alla lista

}



fetchPokemon();

