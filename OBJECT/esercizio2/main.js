/**
 * 
 * ----------------------------------------------Registro studenti----------------------------------------
 * 
 * 
 * ogni studente deve essere un oggetto con :
 * 
 * nome = document.getElementbyId("nome").value;
 * 
 * 
 * let studente :
 *      {
 *          nome : nome,
 *          cognome : cognome,
 *          eta : eta,
 *          voto : voto,
 *          sport : []    
 *      } 
 * 
 * L applicazione deve avere un form in HTML dove poter inserire : 
 * 
 *      - nome 
 *      - cognome
 *      - eta
 *      - voto
 *      - primo sport
 *      - secondo sport
 * 
 * Dopo aver compilato il form, l utente può cliccare su un bottone 
 * "AGGIUNGI STUDENTE" creando quindi un oggetto studente che andrà 
 * pushato dentro l array di oggetti degli studenti
 * 
 * 
 * 
 * 
 * Richieste : 
 * 
 *  //BOTTONE 
 *  Aggiungere uno studente
 *      - crea un oggetto con i dati del form e lo aggiungi all array
 * 
 *  //BOTTONE
 *  mostrare gli studenti
 *      - stampa in pagina tutti gli studenti presenti nella array usando forEach()
    
    //BOTTONE
 *  calcolare media voti
        -calcola la media dei voti utilizzando forEach()

    //BOTTONE
 *  mostrare primo studente
        -stampa solamente il primo studente dell array

    //BOTTONE
 *  aggiungere proprietà promosso
        - aggiungi ad ogni studente la proprietà promosso 
        - se il voto è maggiore di 6 sarà true altrimenti false

    //BOTTONE
 *  elimina età primo studente
        
    //BOTTONE
 *  mostra chiavi primo studente
        
    //BOTTONE
 *  mostra valori primo studente

    //BOTTONE
 *  clona primo studente
 *      - crea una copia del primo studente utilizzando un ciclo "for in"
 * 
 * 
 *  Mostrare i risultati in un DIV A PAGINA
 * 
 */



// inizializzo un array vuoto che dovrà contenere gli oggetti studente

let studenti = [];


//prendo tutti i valori dei campi di input e li salvo in una variabile

//aggiungo studente alla lista
function aggiungiStudente(){

   let nome = document.getElementById("nome").value;
   let cognome = document.getElementById("cognome").value;
   let eta = Number(document.getElementById("eta").value);
   let voto = Number(document.getElementById("voto").value);
   let sport1 = document.getElementById("sport1").value;
   let sport2 = document.getElementById("sport2").value;



   //creo l oggetto con i dati presi dagli input

   let studente = {

      nome: nome,
      cognome: cognome,
      eta: eta,
      voto: voto,
      sport: [sport1,sport2]
   };


   //aggiungo studente all array di obj studenti
   studenti.push(studente);

   document.getElementById("risultato").innerHTML = `
   
      <div class="alert alert-success">
            Studente Aggiunto Correttamente!
        </div>
   `;


   console.log(studenti);
}


//mostro lista studenti
function mostraStudenti(){

   let output = "";

   studenti.forEach(function(studente){

      output += `
      

    
         <div class="studente-card">
                    <h4>${studente.nome} ${studente.cognome}</h4>
                    <p><strong>Età : </strong>${studente.eta}</p>
                    <p><strong>Voto : </strong>${studente.voto}</p>
                    <p><strong>Sport : </strong>${studente.sport[0]}, ${studente.sport[1]}</p>
         </div>
   
      `;

      document.getElementById("risultato").innerHTML = output;

   });
}


//calcolo media
function calcolaMedia(){

   //dichiaro variabile a zero che conterrà tutti i voti degli studenti
   let somma = 0;
   


   //ciclo "i" che è studente, sull array studenti ed aggiungo il voto dello studente alla somma
   studenti.forEach(function(studente){

      somma += studente.voto;

   });


   //calcola media 
   let media = somma / studenti.length;



   document.getElementById("risultato").innerHTML = `
   
      <div class="alert alert-success">
            <p>La media dei voti è di <strong>${media.toFixed(1)}</strong></p>
        </div>
   `;

   console.log(media);

}


//mostra primo studente
function mostraPrimoStudente(){

   let primoStudente = studenti[0];

   document.getElementById("risultato").innerHTML = `
   
      <div class="studente-card">
                    <h4>${primoStudente.nome} ${primoStudente.cognome}</h4>
                    <p><strong>Età : </strong>${primoStudente.eta}</p>
                    <p><strong>Voto : </strong>${primoStudente.voto}</p>
                    <p><strong>Sport : </strong>${primoStudente.sport[0]}, ${primoStudente.sport[1]}</p>
         </div>
   `;


}




