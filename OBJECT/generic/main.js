//Tipi di dato

let array = [];  // ARRAY  -> dataset di tipi misti "", 0, true
let arrayBi = [[]]; //ARRAY BIDIMENSIONALI "MATRICI" 
let nome = "";   // STRING
let numero = 0;  // NUMBER
let booleano = true; // BOOLEAN


//OBJECT -> OGGETTI

let oggetto = {}; // oggetto vuoto

let tantiOggetti = [{},{},{}]; // arry di oggetti
// let oggettoArray = {[]};

//oggetto auto
let auto = {

    ruote : 4, //attributo o proprietà
    colore : "blue",
    alimentazione : "benzina",
    kw : 15,
    cavalli : 200

}


let persona1 = {

 // chiave : valore
    gambe : 2,
    occhi : "verdi",
    altezza : 185,
    peso : 85,
    carnagione : "chiara",
    eta : 44,

}


let listaPersone = [
                        {
                            eta : 43,
                            sesso : "M",
                            peso : 76,
                            altezza : 189,
                            nome : "Luca",
                            cognome : "Rossi",
                            sport : ["basket", "calcio"]
                        },
                        {
                            eta : 45,
                            sesso : "F",
                            peso : 50,
                            altezza : 170,
                            nome : "Giulia",
                            cognome : "Verdi",
                            sport : ["golf", "calcio"]   
                        },
                        {
                            eta : 22,
                            sesso : "M",
                            peso : 90,
                            altezza : 190,
                            nome : "Marco",
                            cognome : "Gialli",
                            sport : ["tennis", "pallavolo"]
                        }
                   ];


console.log(listaPersone);


//----------------------------ACCESSI (MODIFICA, DELETE)------------------------------

let persona = {

    nome : "Mario",
    cognome : "Rossi",
    eta : 45,
   //professione : "Cuoco"
}

console.log(persona);

//aggiungo una proprietà all oggetto persona
persona.professione = "Cuoco";
console.log(persona);


//modificare una proprietà
persona.professione = "web developer";
console.log(persona);

//modifico l età
persona.eta = 48;
console.log(persona);


//eliminare una proprietà dall oggetto persona
delete persona.cognome;
console.log(persona);



//-------------------------------METODI-----------------------

//restituire solamente le chiavi dell obj
let chiavi = Object.keys(persona);
console.log("Ecco le chiavi dell obj : ", chiavi);

//restituire solamente i valori dell obj
let valori = Object.values(persona);
console.log("Ecco i valori dell obj : " ,valori)

//restituire sia le chiavi che i valori in array
let chiaveValore = Object.entries(persona);
console.log("Chiavi con Valori divisi per array : ", chiaveValore);

//clonare un oggetto
const originale = {a:4, b:6, c:3};
const clone = {};

for (let i in originale){

    clone[i] = originale[i]
}

console.log("ecco il clone : ", clone);
console.log("ecco l originale : ", originale);


//--------------------------------------FUNZIONI NEGLI OGGETTI--------------------------------

const cane = {

    nome : "Fido",
    razza : "Dalmata",

    //funzione dell oggetto
    abbaia : function(){

        console.log("Bau !");
    },

    //funzone dell obj
    mangia : function(){

        console.log("Gnam !");
    } 


}


cane.mangia();

//console.log(cane);


//es : Scontistiche

const scontistiche = {

    //funzione dell obj che fa lo sconto del 30%
    scontoApplicato30 : function(prezzo){

        console.log("Prezzo finale con sconto 30% : ", prezzo - (prezzo * 30 / 100));
    },

    //funzione dell obj che fa lo sconto del 70%
    scontoApplicato70 : function(prezzo){

        console.log("Prezzo finale con sconto 70% : ", prezzo - (prezzo * 70 / 100));

    }

}


scontistiche.scontoApplicato30(100);
scontistiche.scontoApplicato70(100);


console.log(scontistiche);




//----------------------------------ARRAY DI OGGETTI---------------------------------------

// FOR EACH -> "per ciascun elemento presente"


let studenti = [
                        {
                            eta : 43,
                            sesso : "M",
                            peso : 76,
                            altezza : 189,
                            voto : 10,
                            nome : "Luca",
                            cognome : "Rossi",
                            sport : ["basket", "calcio"]
                        },
                        {
                            eta : 45,
                            sesso : "F",
                            peso : 50,
                            altezza : 170,
                            voto : 5,
                            nome : "Giulia",
                            cognome : "Verdi",
                            sport : ["golf", "calcio"]   
                        },
                        {
                            eta : 22,
                            sesso : "M",
                            peso : 90,
                            altezza : 190,
                            voto : 5,
                            nome : "Marco",
                            cognome : "Gialli",
                            sport : ["tennis", "pallavolo"]
                        }
                   ];


//stampo le proprietà dello studente

studenti.forEach(function(studente){

    console.log("Studente : ", studente.nome, "Voto : ", studente.voto);

});


//Calcolare la media dei voti tramite un ciclo foreach

// inizializzo a zero un counter

let somma = 0;


// ciclo su tutti gli studenti e per ogni studente prendo il voto
// e lo aggiungo al counter

studenti.forEach(function(studente){

    somma += studente.voto;

});

console.log(somma);

// media totale / array.lenght
let media = somma / studenti.length; // il n di studenti

console.log(media);


console.log(studenti[1].nome);
console.log(studenti[0].cognome);
console.log(studenti[2].voto);
console.log(studenti[1].sport[1]);


