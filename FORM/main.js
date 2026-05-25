



function inviaForm(){



    let nome = document.getElementById("nome").value;
    let cognome = document.getElementById("cognome").value;
    let email = document.getElementById("email").value;
    let eta = document.getElementById("eta").value;
    let citta = document.getElementById("citta").value;
    let messaggio = document.getElementById("messaggio").value;



    //Validazione CAMPI VUOTI

    if(
        nome === "" || 
        cognome === "" ||
        email === "" ||
        eta === 0 ||
        citta === "" ||
        messaggio === ""

    ){

        alert("Compila tutti i campi");
        return;
    }

    //controllo età
    if(eta < 18){

        alert("Devi essere maggiorenne!");
        return;
    }



    //controllo email
    if(!email.includes("@")){

        alert("Email non valida");
        return;

    }

    //Creo un Template Literals ( è un componente html che js innesta nell  index)
    
    let risultato = `

        <h2><strong>Dati inseriti</strong></h2>
        <p><strong>Nome</strong>${nome}</p>
        <p><strong>Cognome</strong>${cognome}</p>
        <p><strong>Email</strong>${email}</p>
        <p><strong>Età</strong>${eta}</p>
        <p><strong>Città</strong>${citta}</p>
        <p><strong>Messaggio</strong>${messaggio}</p>

    `;


    //stampa dell output
    document.getElementById("output").style.display = "block";

    //aggiungo componente template literals
    document.getElementById("output").innerHTML = risultato;


}