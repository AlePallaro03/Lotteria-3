window.addEventListener("DOMContentLoaded", () => {

    const emojiContainer = document.querySelector('.emoji-container'),
          emojiOutput = document.querySelectorAll('.emoji-output'),
          dialogBox = document.querySelector('.dialog-box'),
          dialogMessage = document.querySelector('.dialog-message'),
          bellSound1 = document.querySelector('.bell-sound-1'),
          bellSound2 = document.querySelector('.bell-sound-2'),
          bellSound3 = document.querySelector('.bell-sound-3'),
          winSound = document.querySelector('.win-sound'),
          loseSound = document.querySelector('.lose-sound'),
          winner = Math.floor(Math.random() * 9), //valore iniziale = 2
          outputEmojis = a => emojiOutput.forEach((emoji, i) => emoji.textContent = a[i]),
          shuffleArray = a => {
              for (let i = a.length - 1; i > 0; i--) {
                  const j = Math.floor(Math.random() * (i + 1));
                  [a[i], a[j]] = [a[j], a[i]];
              }

              return a;
          },
          init = () => {
              if (winner) {
                  emojis.push('💎');
                  message = "Congratulazioni hai vinto!";
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

                //sound emojii
                switch (winningEmojisFound) {
                    case 0:
                        bellSound1.play();
                        break;
                    case 1:
                        bellSound2.play();
                        break;
                    case 2:
                        bellSound3.play();
                        break;
                }

                winningEmojisFound++;
            }

           
            if(emojisRemaining === 0) {

               
                setTimeout(() => {
                    if (winner) {
                        winSound.play();
                        setTimeout(() => rainMoney(), 1200);
                    } else {
                        loseSound.play();
                    }
                }, 1500);

               
                dialogBox.classList.add('show-dialog');
                dialogMessage.textContent = message;
            }
        }
    });

  
  if(winner){
    var num = Math.floor(Math.random()*1000);
    alert('Hai vinto: ' + num + '€')
  }
    init(); //inizia il gioco

});