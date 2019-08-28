$(document).ready(function() {
  $("#beep-boop").submit(function(event) {

    var user = parseInt($("#userInput").val());

    var sentence = function() {

        return " I'm sorry, Dave. I'm afraid I can't do that."; {
      }


    var list = [];

    for (var i = 0; i <= user; i++) {

      if (i.toString().includes("3")) {
        list.push(sentence());
      }

      else if (i.toString().includes("2")) {
        list.push(" Boop!");
      }
      else if (i.toString().includes("1")) {
        list.push(" Beep!");

      }
    }


  };

  $("#result").show().text(list);
  event.preventDefault();
});
  });
