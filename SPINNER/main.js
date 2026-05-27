const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const musica = document.getElementById('musica');
const immagine = document.getElementById('immagine');
const spinner = document.getElementById('spinner');



//anzichè fare una funzione classica
//posso associare un addeventlistner all id passando un click

stopBtn.disabled = true;



//pulsante start
startBtn.addEventListener("click", () => {

    //al click, rimuovo la classe d-none allo spinner preso da id
    spinner.classList.remove("d-none");

    //disabilito il play
    startBtn.disabled = true;

    //attivo il pulsante di Stop
    stopBtn.disabled = false;


    //voglio un icona spinner per il caricamento al click
    //dopo 3 secondi parte la canzone

    setTimeout( () => {

        //rimuovere lo spinner
        spinner.classList.add('d-none');


        //ruoto l immagine
        immagine.classList.add("rotate");


        //inizia la musica
        musica.play();



    },3000); //millisecondi di ritardo



});



//pulsante di stop
stopBtn.addEventListener("click", () => {

    //al click, aggiungo la classe d-none allo spinner preso da id
    spinner.classList.add("d-none");

    //arresto musica
    musica.pause();
    musica.currentTime = 0; //riporto la canzone all inizio

    //abilito il bottone di play
    startBtn.disabled = false;

    //disabilitae se stesso quindi di stop
    stopBtn.disabled = true;


    //fermo  immagine
    immagine.classList.remove("rotate");

});

