//Modulo  -> resto di una divisione

//->     %


//Chiedo un numero intero all utente e verifico se il numero inserito è pari o dispari


//let numero = parseInt(prompt("Inserisci il numero da verificare : "));

if ( numero % 2 === 0 ) {

    alert("Il numero è pari");

}else {

    alert("Il numero è dispari");
}



// OPERATORI DI CONFRONTO CONCATENATI

// "&&"  -> AND (e)

// "||"  -> OR (oppure uno dei due)

// "!"   -> NOT (non è)


/*

Accesso ad un locale.
scrivete un programma che :

    chiede l età all utente
    chiede se possiede un biglietto VIP
    chiede se accompagnato
    chiede se è bannato

    REGOLE:

        può entrare se :

            ha almeno 18 anni e possiede il VIP

        può entrare anche se :

            ha più di 65 anni oppure è accompagnato

        non può entrare se :

            è bannato dal locale


*/

//ho l età
let eta = parseInt(prompt("Inserisci la tua età : ")); //int

//ho il biglietto vip
let vip = prompt("Hai il biglietto Vip? si/no : "); // si no

//se accompagnato
let accompagnato = prompt("è accompagnato? si/no: "); // si no

//se bannato
let bannato = prompt("E' bannato? si/no : "); // si no



let maggiorenneVip = eta >= 18 && vip === "si";

let anzianoOaccompagnato = eta > 65 || accompagnato === "si";

let nonBannato = bannato !== "si";




//controllo
if ((maggiorenneVip || anzianoOaccompagnato) && nonBannato){

    alert("Accesso consentito!");
}else {

    alert("Accesso non consentito.")
}











