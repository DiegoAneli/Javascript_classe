//----------------------------CICLO FOR
//
//     init   condizione  incremento
for(let i = 0;  i <= 3;  i++){

    //console.log(i);
    //let numero = parseInt(prompt("Inserisci il numero : "));
    //console.log(numero);
}


//----------------------------CICLO FOR APPLICATO AGLI ARRAY


let arrayNum = [23, 65, 76, 32, 100];

//ciclo per stampare tutti gli elementi

for (let i = 0; i < arrayNum.length; i++){

    console.log(arrayNum[i]);
    console.log(i);
}


//Ho un array di numeri e voglio stmpare solamete i numeri pari

let numeri = [20, 34, 56, 33, 11, 98, 87, 37, 128];

for (let i = 0; i < numeri.length; i++){

    if(numeri[i] % 2 === 0){

        console.log("Valore pari numero  !", numeri[i]);
    }


}

//Ho un array di numeri e voglio stmpare solamete i numeri con indice pari

let numeri2 = [20, 34, 56, 33, 11, 98, 87, 37, 128];

for (let i = 0; i < numeri2.length; i++){

    if(i % 2 === 0){

        console.log("Indice pari !", i);
    }


}



//stampare il valore del numero raddoppiato di un array

let valori = [20, 34, 56, 33, 11, 98, 87, 37, 128];

for (let i = 0; i < valori.length; i++){

    console.log(valori[i] * 2);

}



//trovo un valore specifico e stampo

let citta = ["Parma","Messina","Orvieto","Aosta"];

for (let i = 0; i < citta.length; i++){

    if (citta[i] === "Parma"){

        console.log("Città trovata : "+ citta[i]);
    }


}


//1)Confrontiamo due array e stampiamo i valori uguali.

// 2 cicli for annidati e stampare il valore uguale 
// con il console.log


let frutta = ["Mela", "Banana", "Kiwi", "Pera", "Fragola"];
let spesa = ["Latte", "Mela", "Pane", "Fragola", "Acqua"];
let uguali = [];


for (var i = 0; i < frutta.length; i++) {
    for(var x = 0; x < spesa.length; x++){
        if(frutta[i] === spesa[x]){
            uguali.push(frutta[i]);
        }
    }
}

console.log("Valori uguali : ", uguali);


//----------------------------------------------------------

let arrayN = [2, 4, 100, 300, 898, 120];
let arrayM = [10, 11, 24, 100, 300, 720, 898];

let valoriComuni = [];

for(let i = 0; i < arrayM.length; i++){

    if (arrayN.includes(arrayM[i])){

        valoriComuni.push(arrayM[i]);        

    }

}

//---------------------------------------------------------------

let array1 = [ 2, 4, 6, 8, 10, 12];
let array2 = [3, 6, 9, 12, 15, 18];


for(let i= 0; i < array1.length; i++) {

    let valori1 = array1[i];

    for(let x= 0; x < array2.length; x++) {

        let valori2 = array2[x];

        if (valori1 === valori2){

            console.log("i numeri uguali sono  : " + valori2);
        }
    }
}

//-----------------------------------------------

let num1 = [52, 65, 43, 22, 36, 91];
let num2 =[25, 65, 43, 15, 91] ;


for (let i = 0; i < num1.length; i++){

        for(let x = 0; x < num2.length; x++){

            if(num1[i] === num2[x]){
                console.log(num1[i]);
            }

        }
       
};






//2)Generare due array con n num casuali e confrontare se uguali

