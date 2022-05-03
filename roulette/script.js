$(document).ready(function() {
  //chips di partenza 
  var yourChips = 1000;
  
  var chipH = 38;
  //scommessa totale
  var allBet = 0;
  //chip selezionato, valore chip selezionato
  var selectChip, selectChipVal;
  
  var allBetVal = [];

  outputUI();

  //L'importo di ciascuna area di puntata viene azzerato
  function allBetValZero() {
    allBetVal = [];
    for (i = 0; i < 49; i++) {
      allBetVal.push(0);
    }
  }
  allBetValZero();

  //Piazza le tue chips quando fai clic sull'area delle scommesse
  $(function() {
    $(".select").on("click", function() {
      if (selectChip) {
        if (yourChips >= selectChipVal) {
          var thisH = $(this).height();
          var hadChip = $(this).children().length;
          var ranX = Math.random() * 6 - 3;
          var ranY = Math.random() * 4 - 2;
          var thisChipY = (thisH - chipH) / 2 + hadChip * -6 + ranY;
          var thisBetId = $(this).attr("betId");
          $(this).append(
            '<div class="' +
              selectChip +
              '" style="top: ' +
              thisChipY +
              "px;margin-left: " +
              ranX +
              'px">' +
              selectChipVal +
              "</div>"
          );

          allBetVal[thisBetId] += parseInt(selectChipVal);
          $(this).attr("val", allBetVal[thisBetId]);

          console.log(allBetVal);

          allBet += parseInt(selectChipVal);
          yourChips -= parseInt(selectChipVal);
          outputUI();
        } else {
          alert("Non hai abbastanza Chips");
        }
      }
    });
  });

  //scegli la chips
  $(function() {
    $(".chip").on("click", function() {
      selectChip = $(this).attr("class");
      selectChipVal = $(this).attr("val");
      if (yourChips >= selectChipVal) {
        $(".chipBox .chip").removeClass("active");
        $(this).addClass("active");
      }
    });
  });

  //azzerare la tabella
  $(function() {
    $("#reset").on("click", function() {
      $(".select .chip, .winInfo").remove();
      $(".select").removeClass("win");
      $("#lottery").removeClass("on");
      yourChips += allBet;
      allBet = 0;
      allBetValZero();
      outputUI();
    });
  });

  var winNumber, ranRotate;
  var rotateTimes = 0;

  //lotteria
  $(function() {
    $("#lottery").on("click", function() {
      if (yourChips >= 0) {
        rotateTimes += 1;
        if ($("#lottery").hasClass("on")) {
          yourChips -= allBet;
        }

        $("#lottery").addClass("on");
        winNumber = Math.round(Math.random() * 36);

        ranRotate =
          "rotate(" +
          (
            (winNumber + 1) * -360 / 37 +
            (rotateTimes % 2 === 0 ? 1 : -1) * 720
          ).toFixed(2) +
          "deg)";
        $(".wheel")
          .addClass("wheelActive")
          .delay(100)
          .css({
            transform: ranRotate
          });

        console.log(ranRotate, rotateTimes);

        whichWin(winNumber);
        $(".yourLog").prepend("<li>scommessa <span>-" + allBet + "</span></li>");
        $(".yourLog").prepend(
          `<li>fuori <span class="allBet">${winNumber}</span> pagamento <span>+ ${allWin} </span></li>`
        );
        for (i = 0; i < $(".yourLog").children().length - 4; i++) {
          $(".yourLog")
            .children(":last")
            .remove();
        }
        outputUI();
      } else {
        alert("Non hai abbastanza chips");
      }
    });
  });

  //Vincita
  function whichWin(winNumber) {
    var winId = [];
    winId.push(winNumber);
    if (winNumber != 0) {
      
      switch (winNumber % 3) {
        case 0:
          winId.push(39);
          break;
        case 1:
          winId.push(37);
          break;
        case 2:
          winId.push(38);
          break;
      }
      
      switch ((winNumber > 18 ? 1 : 0) +
        (winNumber > 12 ? 1 : 0) +
        (winNumber > 24 ? 1 : 0)) {
        case 0:
          winId.push(40, 43);
          break;
        case 1:
          winId.push(41, 43);
          break;
        case 2:
          winId.push(41, 48);
          break;
        case 3:
          winId.push(42, 48);
          break;
      }
      
      switch (winNumber % 2) {
        case 0:
          winId.push(47);
          break;
        case 1:
          winId.push(44);
          break;
      }
      
      switch ($('[betid="' + winNumber + '"]').hasClass("bgBlack") ? 1 : 0) {
        case 0:
          winId.push(45);
          break;
        case 1:
          winId.push(46);
          break;
      }
    }
    winLine(winId);
    console.log("zona vincente: " + winId);
  }

  //Mostra aree vincenti e pagamenti
  var allWin;

  function winLine(winId) {
    allWin = 0;
    var wL = winId.length;
    $(".winInfo").remove();
    $(".select").removeClass("win");
    for (i = 0; i < wL; i++) {
      $('[betid="' + winId[i] + '"]').addClass("win");
      if (allBetVal[winId[i]] > 0) {
        if (winId[i] < 37) {
          allWin += allBetVal[winId[i]] * 36;
          $('[betid="' + winId[i] + '"]').append(
            '<div class="winInfo" val="">' +
              allBetVal[winId[i]] +
              " x " +
              36 +
              " = " +
              allBetVal[winId[i]] * 36 +
              "</div>"
          );
        } else if (winId[i] < 43) {
          allWin += allBetVal[winId[i]] * 3;
          $('[betid="' + winId[i] + '"]').append(
            '<div class="winInfo" val="">' +
              allBetVal[winId[i]] +
              " x " +
              3 +
              " = " +
              allBetVal[winId[i]] * 3 +
              "</div>"
          );
        } else if (winId[i] < 50) {
          allWin += allBetVal[winId[i]] * 2;
          $('[betid="' + winId[i] + '"]').append(
            '<div class="winInfo" val="">' +
              allBetVal[winId[i]] +
              " x " +
              2 +
              " = " +
              allBetVal[winId[i]] * 2 +
              "</div>"
          );
        }
      }
    }
    yourChips += parseInt(allWin) - allBet;
    outputUI();
    console.log("ottenere bonus: " + allWin);
  }

  //schermata di output
  function outputUI() {
    $("#yourChips").html(yourChips);
    $("#allBet").html(allBet);
    $("#winNumber").html(winNumber);
  }

  //Roulette
  function wheelSet() {
    var ang = 360 / 37;
    for (i = 0; i < 38; i++) {
      $(".wheel li:nth-child(" + i + ")").css({
        transform: "rotate(" + i * ang + "deg)"
      });
    }
  }
  wheelSet();
});
