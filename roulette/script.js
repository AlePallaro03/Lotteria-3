var bal = 1000;
var cols = [];
var nums = [];
var bets = [];
var h = 1;
var saldo = 0;
const buttonRitira = document.querySelector('.buttonRitira');
const guadagnoRitira = document.querySelector('.guadagnoRitira');
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

function roll(color) {

  var a = bal;
  var winc = 0;
  var bet = document.getElementById("bet").value;
  bet = parseInt(bet);
  if (bet > bal) {
    document.getElementById("msg").innerHTML = "Bet troppo alta!";
  } else {
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
    if (win % 2 == 0) {
      winc = "red";
    }
    if (win % 2 != 0) {
      winc = "black";
    }
    if (win == 28) {
      winc = "green";
    }
    if (color == winc) {
      if (color == "black" || color == "red") {
        bal = bal + bet;
        bets.push("<br><font style='color: green;'>+"+bet+"</font>");
      } else {
        bal = bal + bet * 14;
        bets.push("<br><font style='color: green;'>+"+bet*14+"</font>");
      }
    } else {
      bal -= bet;
      bets.push("<br><font style='color: red;'>-"+bet+"</font>");
    }
    cols.push(winc);
    nums.push(win);
    history();
    document.getElementById("bal").innerHTML = bal;
    document.getElementById("stat").innerHTML = bets;
  }

}
  
  buttonRitira.addEventListener('click', () => {
      saldo+=win;
      guadagnoRitira.innerHTML = saldo;
  });