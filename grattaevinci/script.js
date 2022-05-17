window.addEventListener("DOMContentLoaded", () => { //metodo EventTarget dell'interfaccia imposta una funzione che verrà chiamata ogni volta che l'evento specificato viene consegnato alla destinazione

   var saldo=0;
    const contenitoreNumeri = document.querySelector('.num-container'),
          numOutput = document.querySelectorAll('.num-output'),
          dialogBox = document.querySelector('.dialog-box'),
          dialogMessage = document.querySelector('.dialog-message'),
          winner = Math.floor(Math.random() * 9),
          outputnum = a => numOutput.forEach((num, i) => num.textContent = a[i]),
          shuffleArray = a => {
              for (let i = a.length - 1; i > 0; i--) {
                  const j = Math.floor(Math.random() * (i + 1));
                  [a[i], a[j]] = [a[j], a[i]];
              }

              return a;
          },

          
          init = () => {
            saldo = saldo + winner; 
              if (winner) {
                  numeri.push('3'); //numero vincente
                  message = "Congratulazioni hai vinto! " + winner + " euro";  //winner(valore random vincita) 

              } else {
                  num.push('6'); 
                  message = "Hai perso! Grazie per aver giocato"; //output quando si perde
              }

              outputnum(shuffleArray(numeri));
          },
          rainMoney = () => {
              const w = window.innerWidth;

          };

    let numeri = ['1', '2', '3', '4', '5', '6', '7', '8', '9'], //VETTORE CON I NUMERI POSSIBILI
      numeriVincentiTrovati = 0, //Impostiamo i numeri trovati vincenti a 0
      numeriRimasti = 9, //numeri rimasti iniziali 9
      message = '';

      contenitoreNumeri.addEventListener('click', e => {

        const target = e.target;

        if (target.classList.contains('num-btn') && !target.classList.contains('uncovered')) {

          //  numeriRemaining--;

            target.classList.add('uncovered');

            //Check dell'emoji per la vincita
            if (target.textContent === '3') {

                target.classList.add('winning-num');


                winningnumeriFound++;
            }

           
            if(numeriRemaining === 0) {
                dialogBox.classList.add('show-dialog');
                dialogMessage.textContent = message;
            }
        }
    });


    init(); //inizia il gioco

  
});


//var num = Math.floor(Math.random()*1000);
//alert('Hai vinto: ' + num + '€')