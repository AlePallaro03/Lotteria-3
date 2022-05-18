var bal = 1000; //valore iniziale di bal (impostato a 1000 per un gioco piu' duraturo)
var cols = [];
var nums = [];
var bets = [];
var h = 1;
var saldo = 0;
const buttonRitira = document.querySelector('.buttonRitira'); //prendo solamente elemento .buttonRitira
const guadagnoRitira = document.querySelector('.guadagnoRitira'); //prendo solamente elemento .guadagnoRitira
document.getElementById("bal").innerHTML = bal;

function history() {
  for (i = 0; i < h; i++) {
    document.getElementById("a" + i).style = "background: " + cols[i] + ";";
    document.getElementById("a" + i).innerHTML = nums[i];
  }
  h++;
  if (h == 9) {
    for (j = 0; j < h; j++) {
      document.getElementById("a" + j).style = "";
      document.getElementById("a" + j).innerHTML = "";
      cols.length = 0
      nums.length = 0
    }
    h = 1;
  }
}

/*
-CREAZIONE DEL GIOCO INSERENDO NUOVE VARIABILI COME A = BAL(VARIABILE INIZIALE CON VALORE 1000)
-IN QUESTA FUNZIONE ABBIAMO INSERITO I CHECK DEI NUMERI CON ABBINAMENTO DEL COLORE PER VERIFICARE SE AGGIUNGERE SOLDI AL SALDO O TOGLIERLI
*/
function roll(color) {

  var a = bal;
  var winc = 0; //CREO NUOVA VARIABILE WINC E INSERISCO IL VALORE
  var bet = document.getElementById("bet").value;
  bet = parseInt(bet);

  /*SE LA BET SCOMMESSA E' MAGGIORE DI BAL PRENDO L'EMENTO DAL DOCUMENTO CON ID MSG DAL NOSTRO HTML E VISUALIZZO MESSAGGIO DI OUTPUT*/
  if (bet > bal) {
    document.getElementById("msg").innerHTML = "Bet troppo alta!";
  }
  else { 
    var win = Math.floor((Math.random() * 100) + 0); 
    if (win > 4) {
      var rollm = win * 40 - 40 * 4.2;
      document.getElementById("roll").style = "margin-left: -" + rollm + "px ";
    }
    if (win < 4) {
      var rollm = 180 - 40 * win -20;
      document.getElementById("roll").style = "margin-left: " + rollm + "px ";
    }
    if (win == 4) {
      var rollm = 0;
      document.getElementById("roll").style = "margin-left: -" + rollm + "px ";
    }
    if (win % 2 == 0) { //CONDIZIONE CHE E' VERA QUANDO IL RESTO DELLA DIVISIONE DI WIN PER 2 E' 0, CIOE' E' TRUE SE WIN E' PARI.
      winc = "red"; //
    }
    if (win % 2 != 0) { //CONDIZIONE CHE E' VERA QUANDO IL RESTO DELLA DIVISIONE DI WIN PER 2 E' 1, CIOE' E' TRUE SE WIN E' DISPARI.
      winc = "black";
    }
    if (win == 0) { //SE WIN == 0 OVVERO SE ESCE 0 
      winc = "green";
    }
    if (win == 100) { //SE WIN == 0 OVVERO SE ESCE 100 
      winc = "green";
    }
    if (color == winc) {
      if (color == "black" || color == "red") { //SE IL COLORE E' UGUALE A 'BLACK' O A 'RED'
        bal = bal + bet; //AGGIORNO IL VALORE DI BAL SOMMANDO IL SUO STESSO VALORE PIU' IL VALORE DI BET
        bets.push("<br><font style='color: green;'>+"+bet+"</font>");
      } else { //ALTRIMENTI
        bal = bal + bet * 14; //AGGIORNO IL VALORE DI BAL MOLTIPLICANDO LA BET * 14 E SOMMANDOLA AL VALORE DI BAL
        bets.push("<br><font style='color: green;'>+"+bet*14+"</font>");
      }
    } else { //ALTRIMENTI
      bal -= bet; //AGGIORNO IL VALORE DI BAL SOTTRAENDO IL VALORE DI BET A BAL
      bets.push("<br><font style='color: red;'>-"+bet+"</font>");
    }
    cols.push(winc);
    nums.push(win);
    history();
    document.getElementById("bal").innerHTML = bal;
    document.getElementById("stat").innerHTML = bets;
  }

}

//CREAZIONE DELLA FUNZIONE RITIRA PER RITIRARE I SOLDI
  buttonRitira.addEventListener('click', () => {
      saldo+=win;
      guadagnoRitira.innerHTML = saldo;
  });