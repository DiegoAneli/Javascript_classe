/*

I biglietti per il cinema hanno 4 fasce di prezzo in base all età della persona.

le persone sino ai 12 anni non pagano.

le persone sino ai 35 pagano 15 euro.

le persone dai 35 ai 65 pagano 13 euro.

le persone dai 65 pagano 10 euro.

Nel programma viene chiesta l età all utente, 
ed in base all età verrà mostrato a schermo un messaggio con il costo del biglietto. 


*/

let eta = parseInt(prompt("Inserisci la tua età : "));

if (eta <= 12){

    alert("Il biglietto è gratuito");

}else if ( eta <= 35 ){

    alert("Il Biglietto costa 15 euro");

}else if( eta <= 65 ){

    alert("Il biglietto costa 13 euro");

}else {

    alert("il biglietto costa 10 euro");
}





