/*

███╗   ██╗ ██████╗ ███╗   ██╗    ████████╗ ██████╗  ██████╗ ██████╗ █████╗ ██████╗ ███████╗    
████╗  ██║██╔═══██╗████╗  ██║    ╚══██╔══╝██╔═══██╗██╔════╝██╔════╝██╔══██╗██╔══██╗██╔════╝    
██╔██╗ ██║██║   ██║██╔██╗ ██║       ██║   ██║   ██║██║     ██║     ███████║██████╔╝█████╗      
██║╚██╗██║██║   ██║██║╚██╗██║       ██║   ██║   ██║██║     ██║     ██╔══██║██╔══██╗██╔══╝      
██║ ╚████║╚██████╔╝██║ ╚████║       ██║   ╚██████╔╝╚██████╗╚██████╗██║  ██║██║  ██║███████╗    
╚═╝  ╚═══╝ ╚═════╝ ╚═╝  ╚═══╝       ╚═╝    ╚═════╝  ╚═════╝ ╚═════╝╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝    
                                                                                               

*/

var aleEluk = function() {

    var utente = document.getElementById('utente').value;
    var password = document.getElementById('password').value;
    var passwordConfirm = document.getElementById('password_conferma').value;
    var utentenome = document.getElementById('nome').value;
    var utentesob = document.getElementById('nomeU').value;
      salvadati.setItem("utente", utente);
      salvadati.setItem("password", password);
      salvadati.setItem("utentenome", utentenome);
      salvadati.setItem("utentesob", utentesob);
      salvadati.setItem("passwordConfirm", passwordConfirm);
  }

//FUNZIONE CHE VERIFICA LA CORRETTEZZA DELLA PASSWORD
  function verificaPassword() {
    if(event.keyCode > 48 && event.keyCode < 57) {
      alert("Non inserire numeri.")
      document.getElementById('nome').value = "";
    } else {
    };
    if(event.keyCode == 32) { //CHECK SE SONO STATI INSERITI SPAZI NELLA PASSWORD
      alert("Non inserire spazi")
      document.getElementById('nome').value = "";
    }else {
  
    };
  }
  //FUNZIONE PER LA VERIFICA SE SONO STATI INSERITI NUMERI NEL NOME
  function verificaNumero() {
    if(event.keyCode > 48 && event.keyCode < 57) {
      alert("Non inserire numeri.")
      document.getElementById('nomeU').value = "";
    } else {
    };
  }
//FUNZIONE PER LA VERIFICA DEGLI SPAZI IN NICKNAME E PASSWORD
  function verificaSpazi() {
    if(event.keyCode == 32) {
      alert("Non inserire spazi.")
      document.getElementById('utente').value = "";
      document.getElementById('password').value = "";
    }else {
  
    }
  }
  
  //CREO LA FUNZIONE VERIFICALOGIN
  var verificaLogin = function() {
  
    var password1 = document.getElementById('password').value;
    var password2 = document.getElementById('password_conferma').value;
  
    if(password1 != password2) {
      alert("Le password non corrispondono, riprova.");
      var password1 = document.getElementById('password').value = "";
      var password2 = document.getElementById('password_conferma').value = "";
    } else {
        var campo1 = document.getElementById('nome').value;
        var campo2 = document.getElementById('nomeU').value;
        var campo3 = document.getElementById('utente').value;
        var campo4 = document.getElementById('password').value;
        var campo5 = document.getElementById('password_conferma').value;
         if( campo1 == "" || campo2 == "" || campo3 == "" || campo4 == "" || campo5 == ""){
           alert("Compila i campi");
          }   else {
                window.location.href = "login.html";
         }
    }
  }
  function salvataggio() {
    verificaLogin();
    aleEluk();
  
  }
  
  function verifica() {
    var campo1 = document.getElementById('loginUtente');
    var campo2 = document.getElementById('loginpassword');
  
    if(event.keyCode == 32) {
      alert("Non digitare spazi");
      campo1.style.borderBottom = "2px solid red";
    } else {
      campo1.style.borderBottom = "2px solid black";
      }
  }
  
  function reindirizzamento() {
    window.location.href = "index.html";
  }
  
  function spazi() {
    var loginUtente = document.getElementById('loginUtente').value;
    var loginpassword = document.getElementById('loginpassword').value;
    if(loginUtente, loginpassword == "") {
      alert("Dati non validi");
    } else {
      var loginUtente = document.getElementById('loginUtente').value;
      var loginpassword = document.getElementById('loginpassword').value;
  
      if(loginUtente == localStorage.utente && loginpassword == localStorage.password ) {
      window.location.href="https://lotteria-3.pallaro.repl.co/home/index.html";
    } else {
      alert("Dati non validi")
    }
    }
  }


