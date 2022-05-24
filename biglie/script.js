document.addEventListener("DOMContentLoaded", function(e) {
  console.log("ok");
  const body = document.querySelector("body"); //dichiaro costante doby 
  const section = document.querySelector("section"); //dichiaro costante section
  const articleLotto = document.querySelector(".lotto"); //dichiaro costante articleLotto
  const articleLottoHeader = articleLotto.querySelector("h3"); //dichiaro costante articleLottoHEader
  const articleBalls = document.querySelector(".balls"); //dichiaro costante articleBalls
  const numbers = []; //dichiaro costante doby 
  const balls = document.getElementsByClassName("ball");
  const drawnNums = [];
  const chosenByMachine = [];


  //Creo i numeri in tabella (49) 
  function createNumberBoard(number) {
    const board = document.createElement("div"); //CreateElement è un metodo che crea un elemento HTML specificato con un tag, in questo caso div
    board.classList.add("board"); //classlist è una proprietà di sola lettura che restituisce una raccolta degli attributi di classe dell'elemento. 
    articleLotto.append(board); //csa fa append? il contenuto viene inserito come ultimo elemento interno degli elementi cui è associato il metodo append().
    for (let i = 0; i < number; i++) {
      const boardEl = document.createElement("button");
      boardEl.classList.add("boardEl");
      board.append(boardEl);
    }
    const boardEls = document.getElementsByClassName("boardEl"); //prendo elemento con nome classe ="boardEl"
    for (let i = 0; i < boardEls.length; i++) {
      boardEls[i].setAttribute("data-number", i + 1);
      const dataNumber = boardEls[i].getAttribute("data-number");
      const number = parseInt(dataNumber, 10);
      numbers.push(number);
      boardEls[i].textContent = number;
    }
  }
  createNumberBoard(49); //assegno alla funzione 49 come parametro

  const board = document.querySelector(".board");
  const boardEls = document.querySelectorAll(".boardEl"); //ritorno tutti gli elementi contenuti in boardEls che combaciano con il selettore css indicato

  function drawNumbers() {
    boardEls.forEach(boardEl => boardEl.addEventListener("click", selectNums));

    function selectNums() {
      const number = parseInt(this.dataset.number, 10); //la funzione parseint analizza un argomento stringa e restituisce un intero della radice specificat
      if (this.hasAttribute("data-number")) {
        if (drawnNums.length === 6) {
          makeAlert();
        } else {
          if (drawnNums.indexOf(number) < 0) {
            drawnNums.push(number);
          }
          console.log(drawnNums);
          this.removeAttribute("data-number");
          this.classList.add("crossedOut");
        }
      } else {
        const newNum = this.textContent;
        const trueNum = parseInt(newNum, 10);
        this.setAttribute("data-number", newNum);
        this.classList.remove("crossedOut");
        const indx = drawnNums.indexOf(trueNum);
        if (indx >= 0) {
          drawnNums.splice(indx, 1);
        }
      }
      console.log(drawnNums, drawnNums.length);
      if (drawnNums.length < 6) {
        let startDraw = document.querySelector(".startDraw");
        if (startDraw !== null) {
          startDraw.classList.add("invisible");
        }
      } else if (drawnNums.length === 6) {
        console.log("sei numeri");
        console.log(drawnNums, drawnNums.length);
        let startDraw = document.querySelector(".startDraw");
        if (startDraw === null) {
   
          createButtonForMachineDraw();
        } else {
         
          startDraw.classList.remove("invisible");
        }
      }
    }
    return drawnNums;
  }
  drawNumbers();

  function makeAlert() { //funzione di avviso
    const alertBox = document.createElement("div"); //CreateElement è un metodo che crea un elemento HTML specificato con un tag, in questo caso div
    board.append(alertBox);
    alertBox.classList.add("alertBox"); //classlist è una proprietà di sola lettura che restituisce una raccolta degli attributi di classe dell'elemento. 
    alertBox.textContent = "I tuoi numeri"; //contenuto di testo con messaggio di output
    setTimeout(() => { //imposto il timeout
      alertBox.parentNode.removeChild(alertBox);
    }, 1500);
  }

  function showMyNumbers() {
    console.log(drawnNums);
    articleLottoHeader.parentNode.removeChild(articleLottoHeader);
    const newHeader = document.createElement("h3");
    articleLotto.append(newHeader);
    newHeader.textContent = "I tuoi numeri scelti: ";
    const numbersBoard = document.createElement("div");
    articleLotto.append(numbersBoard);
    numbersBoard.classList.add("numbersBoard");
    for (let i = 0; i < drawnNums.length; i++) {
      const numDiv = document.createElement("div");
      numbersBoard.append(numDiv);
      numDiv.textContent = drawnNums[i];
    }
  }

  function removeTheBoard() {
    board.parentNode.removeChild(board);
  }

  function machineDraw() {
    for (let i = 0; i < 6; i++) {
      const idx = Math.floor(Math.random() * numbers.length);
      chosenByMachine.push(numbers[idx]);
  
      numbers.splice(idx, 1);
      console.log(numbers);
      
    }
    const btnToRemove = document.querySelector(".startDraw");

    btnToRemove.classList.add("invisible");

    return chosenByMachine;
  }
  

  function createButtonForMachineDraw() {
    const startDraw = document.createElement("button");
    startDraw.classList.add("startDraw");
    section.append(startDraw);
    startDraw.textContent = "Rilascia le biglie";
    startDraw.addEventListener("click", removeTheBoard);
    startDraw.addEventListener("click", showMyNumbers);
    startDraw.addEventListener("click", machineDraw);
    startDraw.addEventListener("click", compareArrays);
  }

  function compareArrays() {
    for (let i = 0; i < balls.length; i++) {
      balls[i].textContent = chosenByMachine[i];
      setTimeout(() => {
        balls[i].classList.remove("invisible");
      }, 1000 * (i + 1));
    }
    const common = [];
    const arr1 = chosenByMachine;
    const arr2 = drawnNums;
    for (let i = 0; i < arr1.length; i++) {
      for (let j = 0; j < arr2.length; j++) {
        if (arr1[i] === arr2[j]) {
          common.push(arr1[i]);
        }
      }
    }
    console.log(arr1, arr2, common); 
    function generateResult() {
      const resultsBoard = document.createElement("article");
      section.append(resultsBoard);
      const paragraph = document.createElement("p");
      resultsBoard.append(paragraph);
      resultsBoard.classList.add("resultsBoard");
      resultsBoard.classList.add("invisible");
      console.log(arr2.length);

      if (common.length === 0) { //se le biglie uscite non corrispondono neanche con una nostra
        paragraph.textContent =
          "Hai perso! (" + common.length + " biglie)"; //messaggio di output con dichiarazione di sconfitta
        } else if (common.length == 1) { //se esce solo una biglia uguale alla nostra 
        paragraph.textContent =
          "Hai perso! (" + common.length + " biglia"; //messaggio di output con dichiarazione di sconfitta
      } else if (common.length == 2) { //se escono due biglie uguali alla nostre
        paragraph.textContent =
          "Per poco! (" + common.length + " biglie)"; //messaggio di output con dichiarazione di sconfitta
      } else if (common.length === 3) { //se escono tre biglie uguale alle nostre
        paragraph.textContent =
          "Hai vinto! (" + common.length + " biglie) hai vinto 20 euro "; //messaggio di output con valore di vittoria deciso
      } else if (common.length === 4) { //se escono quattro biglie uguali alle nostre
        paragraph.textContent =
          "Hai vinto! " + common.length + " , hai vinto 100 euro "; //messaggio di output con valore di vittoria deciso
      } else if (common.length === 5) { //se escono cinque biglie uguali alle nostre
        paragraph.textContent =
          "Hai vinto! " + common.length + " , hai vinto 1000 euro "; //messaggio di output con valore di vittoria deciso
      } else if (common.length === 6) { //Se escono tutte le biglie uguali alle nostre 
        paragraph.textContent =
          "Congratulazioni hai fatto jackpot e ti porti a casa 1 MILIONE"; //messaggio di output con il jackpot massimo di vittoria
      }

      setTimeout(() => {
        makeComebackBtn();
        document.querySelector(".resultsBoard").classList.remove("invisible"); 
      }, 8000);
    }

    generateResult(); //genero i risultati delle biglie
  }

  function makeComebackBtn() { //funzione per rigiocare 
    const comebackBtn = document.createElement("a");
    comebackBtn.classList.add("comebackBtn");
    section.append(comebackBtn);
    comebackBtn.textContent = "Rigioca"; //contenuto di testo: Rigioca
    comebackBtn.setAttribute("href", "https://lotteria-ale-e-luk.pallaro.repl.co/biglie/"); //assegniamo come attributo il nostro link per ricaricare la pagina
  }
});
