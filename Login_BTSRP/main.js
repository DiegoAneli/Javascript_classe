function login(){


    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;


    //definisco credenziali
    let userCorretto = "admin";
    let passwordCorretta = "1234";


    //controllo
    if(
        username === userCorretto && password === passwordCorretta
    ){
        //reindirizzamento
        window.location.href = "dashboard.html";
    }else{

        document.getElementById("errore").innerHTML = "Username o password non corretti!";

    }

}



function returnHome(){


    window.location.href = "index.html";

    
}