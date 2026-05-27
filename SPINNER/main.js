const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const musica = document.getElementById('musica');
const immagine = document.getElementById('immagine');
const spinner = document.getElementById('spinner');



//anzichè fare una funzione classica
//posso associare un addeventlistner all id passando un click


//pulsante start
startBtn.addEventListener("click", () => {

    //al click, rimuovo la classe d-none allo spinner preso da id
    spinner.classList.remove("d-none");

    startBtn.disabled = true;


    //voglio un icona spinner per il caricamento al click
    //dopo 3 secondi parte la canzone

    setTimeout( () => {




    },3000); //millisecondi di ritardo



});



//pulsante di stop
stopBtn.addEventListener("click", () => {

    //al click, aggiungo la classe d-none allo spinner preso da id
    spinner.classList.add("d-none");


});

