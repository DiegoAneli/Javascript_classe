/*

Un auto consuma 5 litri di carburante ogni 100km

il prezzo è di 1.80 euro al litro per la benzina

il prezzo è di 1.60 euro al litro per il diesel

scrivere un programma che chiede : 

    i km da percorrere

    il tipo di carburante scelto

    quanti litri ha consumato per i km percorsi

    aggiungere(5 euro) autostrada come scelta opzionale

    calcola quanto spenderà di carburante

*/


//-------------------------------------------------   SVOLGIMENTO  -------------------------------------------

//chiedere i km da percorrere

let km = parseFloat(prompt("Quanti km devi percorrere?"));

//chiedere il tipo di carburante
let carburante = prompt("Inserisci il tipo di carburante scelto ( Benzina o Diesel )").toLowerCase();

//definire i prezzi al litro 
let prezzoBenzina = 1.80;
let prezzoDiesel = 1.60;

//consumo auto (litri ogni 100km)
let consumo = 5;

//variabile per prezzo al litro
let prezzoLitro;

//assegnare il prezzo corretto, se ho scelto benzina o se ho scelto diesel

if (carburante === "benzina"){

    prezzoLitro = prezzoBenzina;

}else if (carburante === "diesel"){

    prezzoLitro = prezzoDiesel;

}else {

    alert("Tipo di carburante non valido!");
}


//se il carburante è stato scelto correttamente quindi presente , facciamo i calcoli

if(prezzoLitro){

    //litri necessari
    let litriNecessari = (km / 100) * consumo;

    //costo del carburante complessivo
    let costoCarburante = litriNecessari * prezzoLitro;

    //aggiunta di pedaggio
    let autostrada = prompt("Vuoi entrare in autostrada per 5 euro? si/no");

    //costo autostrada
    let costoAutostrada = 0; // inizializzando una variabile

    if(autostrada === "si"){

        costoAutostrada = 5;
        
    }

    //costo totale
    let costoTotale = costoCarburante + costoAutostrada;

    console.log("Hai percorso", km ,"km");
    console.log("Hai scelto il carburante", carburante);
    console.log("Hai consumato ", litriNecessari.toFixed(2), "litri");
    console.log("Il costo del carburante : euro ", costoCarburante.toFixed(2));

    console.log("Totale speso : ", costoTotale.toFixed(2));

    if (costoAutostrada > 0 ){

        console.log("Costo autostrada :", costoAutostrada.toFixed(2));
    }

} 



