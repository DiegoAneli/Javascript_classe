
//--------------------------------------------ARRAY DI DATI

let array = []; // dichiarazione di array vuoto

//insieme di dati strutturati
let arrayNomi = ["Pippo","Pluto","Paperino"];
//   index          0       1        2 

//console.log(arrayNomi);
//console.log(arrayNomi[0]);
//console.log(arrayNomi[1]);
//console.log(arrayNomi[2]);

//array di numeri
let arrayNumeri = [4, 6, 34, 67];

//console.log(arrayNumeri.length);





//--------------------------------------------POPOLARE UN ARRAY CON METODO "PUSH()"

let numeri = [65, 34, 78, 43, 108];



//aggiungo un dato
numeri.push(10);

numeri.push(35);

console.log(numeri);


//--------------------------------------------RIMUOVERE L ULTIMO ELEMENTO POP()

let frutti = ["Fragola", "Kiwi", "Mela"];

let ultimofrutto = frutti.pop();

//console.log("Ecco i frutti : ", frutti)
//console.log("Elemento rimosso : ", ultimofrutto);


//--------------------------------------------AGGIUNGERE UN ELEMENTO ALL INIZIO UNSHIFT()

let nomi = [23, "Diego", 45, "Paolo", true, false];

nomi.unshift("Anna");

console.log("array di nomi con anna : ", nomi);




//--------------------------------------------RIMUOVERE UN ELEMENTO ALL INIZIO SHIFT()

let nomi = [23, "Diego", 45, "Paolo", true, false];

let eliminatoPrimo = nomi.shift();

console.log("array senza il primo : ", nomi);



//--------------------------------------------CONTROLLARE SE ESISTE UN ELEMENTO NELLA LISTA
//--------------------------------------------INCLUDES() -> RESPONSE(risposta) BOOLEANA(v/f)

let num = [54, 32, 65, 289, 7643, 236];

let esiste = num.includes(289);
console.log("Il numero 289 esiste nell array ? ", esiste );

//--------------------------------------------trovare la posizione index del numero 289
let indice = num.indexOf(289);

console.log("Posizione del numero 289 : ", indice);


//--------------------------------------------ESTRARRE PARTE DI UN ARRAY con SLICE(IDX0 -> IDX);

let colori = ["red", "blue", "black", "white", "green", "yellow"];

let primiTre = colori.slice(0, 3);

console.log("Primi tre colori : ", primiTre);


//--------------------------------------------UNIRE DUE ARRAY CONCAT()

let a = [34, 65, 123];
let b = [87, 34, 98];

let c = a.concat(b);

console.log("concatenazione di array a+b : ", c);


//--------------------------------------------CREARE UNA STRINGA DA UN ARRAY

let parole = ["ciao","come","stai","?"];

console.log(parole);

let fraseStringa = parole.join(" ");

console.log("Frase  : ", fraseStringa)



//--------------------------------------------ARRAY MULTIDIMENSIONALI   ->  MATRIX
/*
let matrix = 0[
                0[
                    0[],
                    1[],
                    2[],
                    3[],
                    4[],
                    5[],
                    6[]
                ],

                1[
                    0[],
                    1[],
                    2["pippo"]
                ],

                2[
                    0[]
                ]
             ]

console.log(matrix[0[1[2]]]);
*/