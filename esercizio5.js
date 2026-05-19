//------------------------------------- CALCOLO BOLLETTA LUCE ------------------------------------

/*

Un Utenza elettrica consuma energia in kwh.

1) il costo è di 0.25 euro/kwh per i primi 100kw.

2) i successivi, 0.20 euro/kwh


devo chiedere all utente : i kwh consumati
                           e se applicare un canone fisso di 10 euro (per abbonamento sky)
            
Calcolare la bolletta totale.


*/

//------------------------------------       SVOLGIMENTO    ---------------------------------------


let kwh = parseFloat(prompt("Quanti kwh hai consumato?"));

let costoBase = 0.25; // fino a 100kw
let costoRidotto = 0.20; // dopo i 100kw

let costoCanone;
let costoEnergia;

if(kwh <= 100){

    costoEnergia = kwh * costoBase;

}else{

    costoEnergia = (100 * costoBase) + ((kwh-100) * costoRidotto);
}


let canone = prompt("Vuoi sottoscrivere l abbonamento a Sky? si/no").toLowerCase();


if(canone === "si"){

    costoCanone = 10;
}else{

    costoCanone = 0;
}


let totale = costoEnergia + costoCanone;

console.log("Consumo : ", kwh, "kwh");
console.log("Costo energia : ", costoEnergia.toFixed(2));
console.log("Totale bolletta : ",totale.toFixed(2));

if (costoCanone > 0 ){

    console.log("Costo canone :", costoCanone.toFixed(2));
}