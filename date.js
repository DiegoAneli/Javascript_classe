/*

il tempo in js viene gestito da una libreria internoa a js

Istanzio una variabile con un Oggetto che se loggato, restituisce la data odierna.

*/


let dataDiOggi = new Date();

let ora = dataDiOggi.getHours();
let minuti = dataDiOggi.getMinutes();
let giorno = dataDiOggi.getDay();

console.log("Ora di adesso : ", ora);
console.log("Minuti : ", minuti);
console.log(dataDiOggi);

