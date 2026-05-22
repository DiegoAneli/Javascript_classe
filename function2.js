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