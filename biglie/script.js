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

  
  function createNumberBoard(number) {
    const board = document.createElement("div");
    board.classList.add("board");
    articleLotto.append(board);
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
  createNumberBoard(49);

  const board = document.querySelector(".board");
  const boardEls = document.querySelectorAll(".boardEl");

  function drawNumbers() {
    boardEls.forEach(boardEl => boardEl.addEventListener("click", selectNums));

    function selectNums() {
      const number = parseInt(this.dataset.number, 10);
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
        console.log("six numbers");
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

  function makeAlert() {
    const alertBox = document.createElement("div");
    board.append(alertBox);
    alertBox.classList.add("alertBox");
    alertBox.textContent = "I tuoi numeri";
    setTimeout(() => {
      alertBox.parentNode.removeChild(alertBox);
    }, 1500);
  }

  function showMyNumbers() {
    console.log(drawnNums);
    articleLottoHeader.parentNode.removeChild(articleLottoHeader);
    const newHeader = document.createElement("h3");
    articleLotto.append(newHeader);
    newHeader.textContent = "Your chosen numbers";
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

      if (common.length === 0) {
        paragraph.textContent =
          "Hai perso! (" + common.length + " biglie)";
        } else if (common.length == 1) {
        paragraph.textContent =
          "Hai perso! (" + common.length + " biglia";
      } else if (common.length == 2) {
        paragraph.textContent =
          "Per poco! (" + common.length + " biglie)";
      } else if (common.length === 3) {
        paragraph.textContent =
          "Hai vinto! (" + common.length + " biglie) hai vinto 20 euro ";
      } else if (common.length === 4) {
        paragraph.textContent =
          "Hai vinto! " + common.length + " , hai vinto 100 euro ";
      } else if (common.length === 5) {
        paragraph.textContent =
          "Hai vinto! " + common.length + " , hai vinto 1000 euro ";
      } else if (common.length === 6) {
        paragraph.textContent =
          "Congratulazioni hai fatto jackpot e ti porti a casa 1 MILIONE";
      }

      setTimeout(() => {
        makeComebackBtn();
        document.querySelector(".resultsBoard").classList.remove("invisible"); 
      }, 8000);
    }

    generateResult();
  }

  function makeComebackBtn() {
    const comebackBtn = document.createElement("a");
    comebackBtn.classList.add("comebackBtn");
    section.append(comebackBtn);
    comebackBtn.textContent = "Rigioca";
    comebackBtn.setAttribute("href", "https://lotteria-ale-e-luk.pallaro.repl.co/biglie/");
  }
});
