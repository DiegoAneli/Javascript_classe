//RANDOM MATH LIBRARY JS

//genero numero casuale tra 0 e 9 
//let numeroRandom = Math.floor(Math.random() * 10);

//console.log(numeroRandom); 


//genero numero da 2 a 11
//let numeroRandom = Math.floor(Math.random() * 10) + 2;

//console.log(numeroRandom);


//lancio di un dado
//let dado = Math.floor(Math.random() * 6 ) + 1;

//console.log("Hai lanciato il dado ed è uscito : ", dado);


//--------------------------------------- Esercizi ---------------------------------------

/**
 * 
 * Viene chiesto all utente di lanciare 2 dadi
 * se la somma di entrambi i dadi è superiore a 7 console.log : "hai vinto"
 * se la somma di entrambi i dadi è pari fare console.log : "risultato pari"
 *  
 **/
/*
let dado1 = Math.floor(Math.random() * 6 ) + 1;
let dado2 = Math.floor(Math.random() * 6 ) + 1;

//somma
let somma = dado1 + dado2;

console.log("Dado 1 : ", dado1);
console.log("Dado 2 : ", dado2);
console.log("Somma dadi : ", somma);


//controllo se maggiore di 7
if (somma > 7 ){

    console.log("Hai vinto");
}

//controllo se il risultato è pari
if ( somma % 2 === 0 ){

    console.log("la somma dei dadi è pari");
}
*/


/**
 * Orario casuale : solo con Math NO DATE
 * 
 *  ora casuale tra 0 e 23
 *  minuti casuali tra 0 e 59
 *  Stampare in console log ora:minuti 22:59 23:09
 * 
 **/



/**
 * Orario casuale : con Math e DATE
 * 
 *  ora casuale tra 0 e 23
 *  minuti casuali tra 0 e 59
 *  Stampare in console log ora:minuti
 * 
 **/


/**
 * 
 * Lancio Moneta, se testa o croce
 * 
 * 
 * 
 * 
 **/

let moneta = Math.floor(Math.random() * 2 );  //le 2 facce della moneta

if ( moneta === 0 ){

    console.log("è uscita Testa", moneta);
}else {

    console.log("è uscita Croce", moneta);
}

//oppure -> da Samuele :

/*
let moneta = Math.floor(Math.random() * "testa" && "croce")

if (moneta === "testa"){
    console.log("è uscito testa")
}else if (moneta === "croce"){
    console.log("è uscito croce")
}
*/






















// esempio : il programma genera un numero casuale compreso tra 1 e 10
// l utente tramite prompt deve indovinare il numero

///genero un n da 1 a 10 
/*
let numeroCasuale = Math.floor(Math.random() * 10 ) + 1;


let tentativo = parseInt(prompt("Indovina il numero compreso tra 1 e 10 !"));

//controllo

if (tentativo === numeroCasuale){

    alert("Hai vinto");
    console.log(numeroCasuale);

}else{

    alert("Hai sbagliato numero");
    console.log(numeroCasuale);
}
*/


