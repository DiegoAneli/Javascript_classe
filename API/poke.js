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
    const liName = document.createElement('li');
    liName.textContent = `Specie : ${data.species.name}`;
    //appendo il li nella lista html (ul con id user-list)
    userList.appendChild(liName);
    //controllo se ha oggetti
    if(data.held_items.length > 0 ){

        //ciclo con forEach per tutti gli item di held_item
        data.held_items.forEach(itemObj => {
            
            //prendo il nome dell item
            const itemName = itemObj.item.name;

            //per ogni versione mostro la rarity
            itemObj.version_details.forEach(vd => {

                //creo il nuovo <li>
                const li = document.createElement('li');

                //testo composto dal nome dell obj , version details e rarity(numero)
                li.textContent = `Item : ${itemName}` + `Versione : ${vd.version.name}`+ `Rarity : ${vd.rarity}`;

                //appendere la riga alla lista
                userList.appendChild(li);

            })
        });
    }
}

fetchPokemon();

