//ednpoint url api
const endpoint = 'https://jsonplaceholder.typicode.com/users';


const userList = document.getElementById("user-list");


//funzione che recupera l api
function fetchUser(){


    //oggetto request
    const xhr = new XMLHttpRequest();

    //Verificare connessione
    xhr.open('GET', endpoint);

    //definisco cosa succede quando cambia lo stato della richiesta
    xhr.onreadystatechange = () => {

        //verifico se la richiesta è completata
        if(xhr.readyState === 4 ){


            if(xhr.status === 200){

                const users = JSON.parse(xhr.responseText);

                renderUsers(users);


            }else{

                console.error('Errore nella richiesta : ', xhr.status);
            }
        }



    }


    xhr.send();

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


//richiamo function
fetchUser();



