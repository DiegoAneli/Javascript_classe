// commento su linea

/* commento su piu linee

    in questo modo

*/

//Tipizzazione dato in Input

var nomeVariabile = "Pippo"; // variabile di tipo STRINGA (STRING)

var nomeVariabile2 = 5; // variabile di tipo NUMERO (NUMBER)

// Costanti
const pigrego = 3.14;


//valore BOOLEANO -> ci da un risultato VERO o FALSO (0 o 1) ( ACCESO / SPENTO )

var semaforoRosso = true; // valore booleano 1
var semaforoRosso = false;// valore bool 0

//Operatori + - / *


var numero1 = 15;
var numero2 = 5;

var somma = numero1 + numero2;

//console.log("Il risultato della somma dei numeri è : ", somma);


var numero3 = 10; // dato hardcoded  
var numero4 = 5;



var moltiplicazione = numero3 * numero4;

//console.log("Il risultato della moltiplicazione è : ", moltiplicazione);


//PRENDERE DATI DALL UTENTE TRAMITE METODO PROMPT();

// prompt("Inserisci il tuo nome : ");


//var inputUtente = prompt("Inserisci il tuo nome : ");

//console.log("Il nome inserito è : ", inputUtente);


//tipizzo numero intero tramite prompt
var inputIntero = parseInt(prompt("Inserisci un numero intero : "));


//tipizzo numero decimale tramite prompt
var inputDecimale = parseFloat(prompt("Inserisci un numero decimale : "));


//console.log("Numero intero :", inputIntero);
//console.log("Numero decimale : ", inputDecimale);

//SOMMA
var somma = inputDecimale + inputIntero;

//STAMPA CONSOLE
console.log("la somma dei numeri è di : " , somma);


//STAMPA A SCHERMO DEL RISULTATO
alert("la somma dei numeri è di : " + somma);


//STAMPARE RISULTATO IN CONSOLE:

//console.log(nomeVariabile);
//console.log(nomeVariabile2);

//console.log("Il testo della variabile è : " , nomeVariabile);
//console.log("Il numero della variabile è : " , nomeVariabile2);