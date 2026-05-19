/*

si Si sI SI

parola.toLowerCase()   -> trasforma la stringa in minuscolo

.toLowerCase() // APPIATISCE IN MINUSCOLO
.toUpperCase() // APPIATISCE IN MAIUSCOLO

s i si  n O 

parola.trim() -> elimina gli spazi ll interno della parola

.trim() //TOGLIE GLI SPAZI INSERITO PER SBAGLIO E QUINDI AVRò LA PAROLA "INTERA"




//esercizio : 

Calcolo del prezzo del treno :

    il programma deve chiedere all utente 

        - il numero di km da percorrere
        - l età

    Dovrà calcolare il prezzo totale del viaggio ( numero dei km * prezzo unitario al km )


    il prezzo del biglietto è definito in base ai km.

        (0.21 cent al km)

    in base all età dell utente c è uno sconto : 

        20% per i minorenni ( < 18 )
        40% per gli over 65


*/

//Svolgimento

//chiedere all utente i km da percorrere
let km = parseFloat(prompt("Quanti km devi percorrere?")); //es. 102.5 

// chiedo l età dell utente
let eta = parseInt(prompt("Quanti anni hai?")); 

//prezzo al km
let prezzoKm = 0.21; 

// Prezzo totale base km * prezzokm
let prezzoTotale = km * prezzoKm;


//Applico i vari sconti

if( eta < 18 ) {

    //sconto del 20%
    prezzoTotale = prezzoTotale * 0.8;

}else if( eta > 65 ) {

    //Sconto del 40%
    prezzoTotale = prezzoTotale * 0.6;

}


//mando a schermo il messaggio

alert("Il prezzo del biglietto è : " + prezzoTotale.toFixed(2) + " euro ");








