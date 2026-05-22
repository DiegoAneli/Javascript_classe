
//date un nome parlante alla vostra funzione in merito a ciò che fa, esegue...
//le funzioni sono pezzi d codici riutilizzabili

//---------------------------------------------  FUNZIONI ANONIME


function saluta(){

    console.log("Ciao Classe!");

}

function salutaAlert(){

    alert("Ciao Classe!");

}

function saluta2(){

    console.log("Ciao Classe2!");

}

//la funzione deve essere richiamata per poterla eseguire
//saluta();

//occhcio all ordine delle funzioni 
//salutaAlert();

//la funzione saluta2() viene esguita dpo che ho chiuso l alert
//saluta2();


//---------------------------------------------  FUNZIONI CON PARAMETRI ( O ARGOMENTI )

function somma(x, y){

    return x + y;
}


function sottrazione(x, y){

    return x - y;
}


function potenza(x){

    return x **2;

}




let risultato = somma(15,15);
let risultatoS = somma(10,10);

let risultatoSottrazione = sottrazione(15,10);

let potenzaRes = potenza(3);

console.log("Il risultato della somma è : ", risultato);
console.log("Il risultato della sottrazione è : ", risultatoSottrazione);
console.log("la Potenza è di  : ", potenzaRes);


//Verifica età utente : 
//chiedo tramite prompt l eta all utente e 
//tramite una function verifico se maggiorenne o minorenne


let eta = parseInt(prompt("Inserisci la tua età : ")); //casting -> tipizzare il num

//trasformo in 
let etaInserita = Number(eta); //tipizzo in number

//funzione che controllase maggiorenne o minorenne

function verificaSeMaggiorenneOminorenne(x){

    if(x >=18 ){

        return "Sei maggiorenne";
    }else{

        return "Sei minorenne";
    }

}

function verificaSePensionato(x){

    if(x >= 65 ){ 

        return "Sei pensionato";
    }else{

        return "Non sei pensionato";
    }

}

function verificaSeSessantacinquenne(x){

    if(x === 65 ){ 

        return "Hai 65 anni ";
    }else{

        return " Non hai 65 anni ";
    }

}



//richiamo funzione / invocazione

let messaggio = verificaSeMaggiorenneOminorenne(etaInserita);

let verificaPensione = verificaSePensionato(etaInserita);

let sessantenne = verificaSeSessantacinquenne(etaInserita);

alert(sessantenne);

alert(verificaPensione);

alert(messaggio);

//mi dice che tipo di dato è
console.log(typeof etaInserita);



//Creare una funzione che calcola il prezzo di un prodotto

// chiedi all utente il prezzo del prodotto e la % di sconto
// i prezzi sono decimali -> toFixed(2)


//chiedo il prezzo 
let prezzo = parseFloat(prompt("Inserisci il prezzo  : "));


//chiedo lo sconto
let sconto = parseInt(prompt("Chiedi lo sconto in percentuale : "));


function calcolaPrezzoScontato(x, y){


    return x - ( x * y ) / 100;  

}


let risultato = calcolaPrezzoScontato(prezzo, sconto).toFixed(2);

console.log(risultato);


