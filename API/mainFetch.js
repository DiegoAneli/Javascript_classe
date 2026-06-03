//dichiaro endpoint
const endpoint = 'https://jsonplaceholder.typicode.com/users';


//prendo il tag html con id
const userList = document.getElementById('user-list');


function fetchUsers(){

    fetch(endpoint)

        //gestione risposta in formato json
        .then(response => {

            if(!response.ok){

                throw new Error(`Errore Http: ${response.status}`);
            }

            return response.json();
        })


        .then(users => {
            //funzone di render users
            //andrà richiamata la funzione di renderUsers();
            renderUsers(users);
        })

        .then(data => console.log(data));

    
}



//funziond i render users
function renderUsers(users){


    //per ogni utente ricevuto dall api
    users.forEach(user => {

        //creo un nuovo elemento in html
        const li = document.createElement('li');

        //imposto il contenuto dell <li> con nome e mail
        li.textContent = `
                        
                    ${user.username} --- ${user.address.zipcode}

        `;

        //appendo il <li> alla lista html ( ul con id="user-list")
        userList.appendChild(li);


    });    
}


//richiamo funzione all interno del file
fetchUsers();