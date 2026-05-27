//chiedo all utente la difficoltà

let difficoltà = parseInt(prompt("Scegli la difficoltà : 0 (facile), 1(media), 2(difficile)"));

//imposto il valore massimo del numero in base alla difficoltà

let max; //...100 a volte sarà 80 a volte sarà 50

if (difficoltà === 0 ){

    max = 100;

}else if ( difficoltà === 1){

    max = 80;
    
}else{

    max = 50;
}

//creo un array vuoto per memorizzare i numeri vietati

let bombe = [];

//Genero 16 numeri casuali da 1 a MAX

while(bombe.length < 16 ){

    let numero = Math.floor(Math.random() * max) + 1;

    //controllo : aggiungiamo solo se il numero NON E' già presente 
    if(!bombe.includes(numero)){

        //pusho
        bombe.push(numero);
    }
        
    console.log(numero);
}


console.log(bombe);

//creo un array vuoto per memorizzare i numeri inseriti dall utente

let tentativi = [];

let gameOver = false;

//Finchè l utente non perde e non ha raggiunto il numero massimo di tentativi (ciclo while)
//chiediamo all utente un numero ( prompt )

//se il numero è tra le bombe(if)
    //l utente ha perso
//se invece il numero non è già stato inserito
    //lo aggiungiamo alla lista dei tentativi validi (.push)

//altrimenti se è già stato inserito, non facciamo nulla.

while(!gameOver && tentativi.length < (max - 16)){

    let input = parseInt(prompt(`Inserisci un numero da 1 a ${max}`));

    if(bombe.includes(input)){

        gameOver = true;
        console.log("Hai perso.");
    }else if (!tentativi.includes(input)){

        tentativi.push(input);

    }else{

        console.log("va bene.");
    }
}


//se hai vinto
if(!gameOver){

    consolelog("Complimenti ha evitato tutte le bombe");


}


//stampo il numero di tentativi, punteggio finale

console.log("Punteggio finale : ", tentativi.length);


//spiegazione : l obiettivo è evitare di inserire un numero "bomba"
//ci sono 16 numeri generati casualmente
//posso inserire numeri tra 1 e MAX ; dove MAX è la difficoltà
//il numero di tentativi non è MAX , ma MAX - 16 , PERCHè CI SONO 16 NUMERI VIETATI(LE BOMBE)



