

let immagini = [

"https://picsum.photos/id/10/200/300",
"https://picsum.photos/id/11/200/300",
"https://picsum.photos/id/12/200/300",
"https://picsum.photos/id/13/200/300",
"https://picsum.photos/id/14/200/300",
"https://picsum.photos/id/15/200/300",
"https://picsum.photos/id/16/200/300",
"https://picsum.photos/id/17/200/300",
"https://picsum.photos/id/18/200/300",


]

//funzione mostraImmagine

let indice = 1;

function mostraImmagine(){

    
    document.getElementById("img1").src = immagini[indice -1]
    document.getElementById("img2").src = immagini[indice]
    document.getElementById("img3").src = immagini[indice +1]

    
}

//function successiva

function successiva(){

    indice++;

    if (indice >= immagini.length - 1) {
        indice = 1;

        console.log(indice);
    }


    mostraImmagine();
}


//function precedente

function precedente(){

    indice--;

    if (indice < 0) {
        indice = immagini.length - 1;

        
        console.log(indice);
    }

    mostraImmagine();

}


mostraImmagine();