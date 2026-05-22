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
 * 
 * generare un numero casuale da 1 a 10 incluso tramite una funzione
 * mostrare il risulato del numero casuale in un p a schermo
 * 
 * scegliete voi se mostrare il res tramite bottone o meno
 * 
 */



