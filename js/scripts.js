$(document).ready(function() {
  $("#beep-boop").submit(function(event) {
    var user = $("#userInput").val();

    var sentence = function() {

        return " I'm sorry, Dave. I'm afraid I can't do that.";
      }


    var count = [];

    for (var i = 0; i <= user; i++) {

      if (i % 10 === 0 && 1 != 0) {
        count.push(sentence());
      }

      else if (i % 5 === 0) {
        count.push(" Boop!");
      }
      else if (i % 3 === 0) {
        count.push(" Beep!");
      }
      else {
        count.push(" " + i);
      console.log(count);
      }
    }


    $("#result").show().text(count);
    event.preventDefault();

  });


});
