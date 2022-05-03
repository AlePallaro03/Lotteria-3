

var cadastro = function() {

  var user = document.getElementById('cad_user').value;
  var senha = document.getElementById('cad_senha').value;
  var senhaConfirm = document.getElementById('senha_confirm').value;
  var usernome = document.getElementById('nome').value;
  var usersob = document.getElementById('sobrenome').value;
    localStorage.setItem("user", user);
    localStorage.setItem("senha", senha);
    localStorage.setItem("usernome", usernome);
    localStorage.setItem("usersob", usersob);
    localStorage.setItem("senhaConfirm", senhaConfirm);
}

function verTecla() {
  if(event.keyCode > 48 && event.keyCode < 57) {
    alert("Non inserire numeri.")
    document.getElementById('nome').value = "";
  } else {
  };
  if(event.keyCode == 32) {
    alert("Non inserire spazi")
    document.getElementById('nome').value = "";
  }else {

  };
}

function verificarNumeros() {
  if(event.keyCode > 48 && event.keyCode < 57) {
    alert("Non inserire numeri.")
    document.getElementById('sobrenome').value = "";
  } else {
  };
}
function verificarEspaco() {
  if(event.keyCode == 32) {
    alert("Non inserire spazi.")
    document.getElementById('cad_user').value = "";
    document.getElementById('cad_senha').value = "";
  }else {

  }
}


var verificarTudo = function() {

  var senha1 = document.getElementById('cad_senha').value;
  var senha2 = document.getElementById('senha_confirm').value;

  if(senha1 != senha2) {
    alert("Le password non corrispondono, riprova.");
    var senha1 = document.getElementById('cad_senha').value = "";
    var senha2 = document.getElementById('senha_confirm').value = "";
  } else {
      var campo1 = document.getElementById('nome').value;
      var campo2 = document.getElementById('sobrenome').value;
      var campo3 = document.getElementById('cad_user').value;
      var campo4 = document.getElementById('cad_senha').value;
      var campo5 = document.getElementById('senha_confirm').value;
       if( campo1 == "" || campo2 == "" || campo3 == "" || campo4 == "" || campo5 == ""){
         alert("Compila i campi");
        }   else {
              window.location.href = "login.html";
       }
  }
}
function salvar() {
  verificarTudo();
  cadastro();

}

function verificar() {
  var campo1 = document.getElementById('loginUser');
  var campo2 = document.getElementById('loginSenha');

  if(event.keyCode == 32) {
    alert("Non digitare spazi");
    campo1.style.borderBottom = "2px solid red";
  } else {
    campo1.style.borderBottom = "2px solid black";
    }
}

function redirecionar() {
  window.location.href = "index.html";
}

function espacos() {
  var loginUser = document.getElementById('loginUser').value;
  var loginSenha = document.getElementById('loginSenha').value;
  if(loginUser, loginSenha == "") {
    alert("Dati non validi");
  } else {
    var loginUser = document.getElementById('loginUser').value;
    var loginSenha = document.getElementById('loginSenha').value;

    if(loginUser == localStorage.user && loginSenha == localStorage.senha ) {
    window.location.href="medicenter/site.html";
  } else {
    alert("Dati non validi")
  }
  }
}