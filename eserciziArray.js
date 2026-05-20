/**
 * 1)Un docente ha una classe con degli studenti presenti a lezione.
 * 
 *  - deve aggiungere un nuovo studente in ritardo
 *  - rimuovere lo studente che è andato via prima
 *  - mostrare a lista finale degli studenti presenti
 * 
 * 2)Dovendo far spesa al supermarket, ho una lista della spesa
 * 
 *  - voglio rimuovere il primo elemento perchè già comprato
 *  - aggiungere all inizio "acqua"
 *  - controllare se nella lista della spesa esiste il "LATTE"
 *  - stampare la lista della spesa in stringa
 * 
 * 3)In un ristorante, due camerieri prendono gli ordini
 * 
 *  - voglio avere un unica lista per gli ordini e stamparla in stringa
 * 
 * 
 */

//----------------------------------Svolgimento 1 esercizio

//dichiarazione array classe
let classe = ["giovanni", "paolo", "luca", "mario"];

//aggiungo studente in ritardo
classe.unshift("giulia");
console.log("Classe con nuovo studente entrato : ", classe);

//rimuovo l ultimo studente
let andatoVia = classe.pop();
//utente uscito
console.log("chi è uscito?", andatoVia);

//mostrare lista studenti presenti
console.log("Classe : ", classe);

//----------------------------------Svolgimento 2 esercizio

//dichiaro l array spesa
let spesa = ["Pane", "Latte", "Uova", "Mela"];

//elimino il primo elemento
let giaComprato = spesa.shift();

//aggiungo all inizio acqua
spesa.unshift("Acqua");
console.log("con Acqua : ",spesa);

//controllo se esiste il latte nella lista
let haLatte = spesa.includes("Latte");
console.log("Esiste il latte nella lista?",haLatte );


let spesaStringa = spesa.join(", ");
console.log("Lista spesa in string : ", spesaStringa);

//----------------------------------Svolgimento 3 esercizio

let cameriere1 = ["pizza napoli", "birra", "caffè"];

let cameriere2 = ["costata", "vino", "dolce"];


let listaCompleta = cameriere1.concat(cameriere2);

//stampo lista in stringa

let fraseStringa = listaCompleta.join(", ");

console.log("lista in formato string : ", fraseStringa);