/*

Viene chiesto all utente una password.
Se la password coincide, all utente viene mostrato un messaggio : "Benvenuto nella dashboard!"
Se la password non è corretta, mostra un messaggio : "Non abilitato alla dashboard."

*/

// come chiedo la password all utente?
// devo salvare la risposta in una variabile;
// devo verificare con la password corretta la password inserita
// Output?

//questa è la password per entrare
let passwordGiusta = "password";

//il messaggio per l utente
let passwordUtente = prompt("Inserisci la password per entrare : ");

/*
if (passwordGiusta === passwordUtente){

    alert("Benvenuto nella dashboard!");
}else{

    alert("Non abilitato alla dashboard.");
}
*/

if (passwordUtente === passwordGiusta){

    alert("Benvenuto nella dashboard!");

}else if(passwordUtente === null){

    alert("Hai annullato l operazione.");

}else if(passwordUtente === ""){

    alert("Devi inserire almeno la password!");

}else {

    alert("Non abilitato alla dashboard.");
}


