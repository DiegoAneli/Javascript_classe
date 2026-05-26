function saluta(){

    alert("Ciao Classe!");
}



/* Funzione che aggiunge frase a monitor */

function mostraMessaggio(){

    document.getElementById("testo1").innerHTML = "Hai cliccato il bottone";
    

}


function cambiaColore(){

    //la funzione si prende l elemento in pagina con id colorato e applica il green al bckgnd del div
    document.getElementById("colorato").style.backgroundColor = "green";
    //document.getElementById("colorato").style.display = "none";
}


/**
 * 
 * Creare due pulsanti : uno colora il div di colore rosso
 * 
 *                       l altro, lo nasconde
 * 
 */

function coloraDivRosso(){

    document.getElementById("divrosso").style.background = "#ed180d"

}

function nascondi(){

    document.getElementById("divrosso").style.display = "none";

}


function visualizza(){

    document.getElementById("divrosso").style.display = "block";
}


/**
 * es 2
 * generare un numero casuale da 1 a 10 incluso tramite una funzione
 * mostrare il risulato del numero casuale in un p a schermo
 * 
 * scegliete voi se mostrare il res tramite bottone o meno
 * 
 */

function nrandom(){

    let num = Math.floor(Math.random() * 10) + 1;

    document.getElementById("numero").innerHTML = num;


}


/**
 * es 3
 * 
 * Voglio in pagina due pulsanti che incrementano e decrementano un numero
 * 
 * il numero dovrà partire da 20.
 * 
 * ++ -- +1 -> ?
 * 
 * con un bottone aumento a 21 ect
 * con un bottone diminuisco a 19 ect
 * 
 * il valore dovrà vedersi in pagina
 * 
 * il numero sarà visualizzato rosso sotto il valore 5 e giallo sopra i 25 
 * 
 */



    //varibile con valore iniziale
    let numero = 20;

    let paragrafo = document.getElementById("numero");


    function aggiornaNumero(){


        //mostrare il valore
        paragrafo.innerHTML = numero;


        //gestione colore del testo del numero in base al valore
        if(numero < 5){

            paragrafo.style.color = "red";

        }else if (numero > 25){

            paragrafo.style.color = "yellow";

        }else {

            paragrafo.style.color = "black";
        }


    }



    function incrementa(){

        numero++;

        aggiornaNumero();

    }

    
    function decrementa(){

        numero--;

        aggiornaNumero();


    }    






  /**
   * 
   * es 4
   * 
   * Prendete due input dall utente di due numeri uno decimale e uno intero 
   * e tramite button fate la somma con funzione 
   * e mostrare in pagina il risultato 
   *
   */

  //funzione che fa la somma
  function sommaEl(){

    //prompt primo numero intero 
    let numeroInt = parseInt(prompt("Inserisci il numero intero : ")); 
    //prompt secondo numero decimale
    let numeroDec = parseFloat(prompt("Inserisci il numero decimale : "));


    //trasformo e tipizzo
    let nInt = Number(numeroInt);
    let nDec = Number(numeroDec);

    let risultato = nInt + nDec;

    document.getElementById("output").innerHTML = "Il risultato dell somma è " + risultato;

    alert("Il risultato della somma è : " + risultato);
   
  }





  /**
   * Prendiamo due valori inseriti in due input in pagina e tramite un bottone
   * facciamo la somma dei valori inseriti
   * 
   * diversamente da quello sopra, qui abbiamo due <input> e prendiamo il value.
   * 
   */

function somma(){


    let numero1 = Number(document.getElementById("num1").value);

    let numero2 = Number(document.getElementById("num2").value);


    let res = numero1 + numero2;

    //mostro il risultato
    document.getElementById("output").innerHTML = "La somma è di " + res;

    console.log(typeof numero1);
    console.log(typeof numero2);
}



