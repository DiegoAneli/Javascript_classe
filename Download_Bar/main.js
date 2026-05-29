/**
 * 
 * 
 * Ricreare una simulazione di una barra di avanzamento di download di un file 
 * 
 *  - dovrà essere comandata da pulsanti che :
 * 
 *      - Avvia download
 *      - Pausa
 *      - Riprendi
 *      - Annulla
 * 
 * Dovrà visualizzarsi una % percentuale numerica di avanzamento della barra del download  
 * 
 * Quando il download termina verrà visualizzato un messaggio a schermo : 
 *  
 *          - potrà essere un alert 
 *          - oppure un componente bootstrap chiamato MODALE( documentatevi sul sito bootstrap )
 *          - un altra pagina di atterraggio finita l operazione
 * 
 *          L importante che funzioni la logica 
 * 
        *          messaggio :  " Download Completato!"
        *          
        *          altrimenti
        *                     per : "Download Annullato! "
 * 
 * 
 * 
 * Potete aggiungere classic di avanzamento gestendole con css (transform, deg, %...)
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */

let percentuale = 0;

let avviato = false;

let tempo;

function avvia(){


    if (avviato) return;

    avviato = true;

    const barra = document.getElementById("barra");

    tempo = setInterval(() => {

        if(percentuale < 100 ){

            percentuale += 5;

            barra.style.width = percentuale + "%";
            barra.innerHTML = percentuale + "%";
  
        }

        if (percentuale >= 100){

            clearInterval(tempo);
            if (percentuale === 100){

                barra.classList.remove("progress-bar-striped");
                barra.classList.add("bg-success");
                barra.innerHTML = "Completed!";
            }
            console.log("Download completato");
        }
       
        console.log("Click!");
    }, 500);

    
}