window.addEventListener("DOMContentLoaded", () => {

    var saldo = 0;
    const emojiContainer = document.querySelector('.emoji-container'),
          emojiOutput = document.querySelectorAll('.emoji-output'),
          dialogBox = document.querySelector('.dialog-box'),
          dialogMessage = document.querySelector('.dialog-message'),
          bellSound1 = document.querySelector('.bell-sound-1'),
          bellSound2 = document.querySelector('.bell-sound-2'),
          bellSound3 = document.querySelector('.bell-sound-3'),
          winSound = document.querySelector('.win-sound'),
          loseSound = document.querySelector('.lose-sound'),
          winner = Math.floor(Math.random() * 9),
          outputEmojis = a => emojiOutput.forEach((emoji, i) => emoji.textContent = a[i]),
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
                  emojis.push('💎');
                  message = "Congratulazioni hai vinto! " + winner + " euro";           

              } else {
                  emojis.push('⌚');
                  message = "Hai perso! Grazie per aver giocato";
              }

              outputEmojis(shuffleArray(emojis));
          },
          rainMoney = () => {
              const w = window.innerWidth;

              //in caso di vincita scenderanno i dollari
              for(i = 0; i < 70; i++) {
                  const dollar = document.createElement('div');

                  dollar.classList.add('dollar-bill');
                  dollar.textContent = '💵';
                  dollar.style.left = `${Math.floor(Math.random() * w)}px`;

                  document.body.appendChild(dollar)
              }
          };

    let emojis = ['👜', '🏆', '🍾', '🎁', '👑', '💍', '💎', '💎'], //lista delle emoji disponbili
        winningEmojisFound = 0,
        emojisRemaining = 9,
        message = '';

    emojiContainer.addEventListener('click', e => {

        const target = e.target;

        if (target.classList.contains('emoji-btn') && !target.classList.contains('uncovered')) {

            emojisRemaining--;

            target.classList.add('uncovered');

            //Check dell'emoji per la vincita
            if (target.textContent === '💎') {

                target.classList.add('winning-emoji');


                winningEmojisFound++;
            }

           
            if(emojisRemaining === 0) {
                dialogBox.classList.add('show-dialog');
                dialogMessage.textContent = message;
            }
        }
    });


    init(); //inizia il gioco

  
});


//var num = Math.floor(Math.random()*1000);
//alert('Hai vinto: ' + num + '€')