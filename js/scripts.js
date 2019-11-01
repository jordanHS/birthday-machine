$(document).ready(function() {
  $("#beep-boop").submit(function(event) {
    var name = $("input#name").val();
    var user = $("#userInput").val();

    var sentence = function() {

        return ` I'm sorry, ${"input#name"}. I'm afraid I can't do that.``;
      }


    var count = [];

    for (var i = 0; i <= user; i++) {

      if (i.toString().includes('3')) {
        list.push(sentence());
      }

      else if (i.toString().includes('2')) {
        list.push(" Boop!");
      }
      else if (i.toString().includes('1')) {
        list.push(" Beep!");
      }
      else {
        list.push(" " + i);
      }
    }


    $("#result").show().text(list);
    event.preventDefault();

  });


});
