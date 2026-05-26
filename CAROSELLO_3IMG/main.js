let immagini = [

    "https://picsum.photos/id/240/200/300",
    "https://picsum.photos/id/237/200/300",
    "https://picsum.photos/id/238/200/300",

    "https://picsum.photos/id/240/200/300",
    "https://picsum.photos/id/237/200/300",
    "https://picsum.photos/id/238/200/300",

    "https://picsum.photos/id/240/200/300",
    "https://picsum.photos/id/237/200/300",
    "https://picsum.photos/id/238/200/300",
];





let indice = 0;

function mostraImmagine(){

    let contenitore = document.getElementById("contenitoreCard");

    contenitore.innerHTML = "";

    for (let i = 0; i < 3; i++){

        let posizione = indice + i;


        if(posizione >= immagini.length){

            posizione = posizione - immagini.length;
        }


        let card







    }









}










//-------------------------------INTERAZIONI PAGINA
//function successiva
function successiva(){
//indice ++
    indice++;

    if(indice >= immagini.length){

        indice = 0;

    }
    mostraImmagine();

}
//function precedente
function precedente(){

    // indice--
    indice--;

        if (indice < 0){

            indice = immagini.length - 1;
        }

    mostraImmagine();

}








//-------------------------------LOGICA INTERNA PAGINA
mostraImmagine();













//aggiungo funzionalità frecce tastiera EventListner

document.addEventListener("keydown", function(event) {


    //freccia destra
    if(event.key === "ArrowRight"){

        successiva();
    }


    //freccia sinistra

     if(event.key === "ArrowLeft"){

        precedente();
    }

});







