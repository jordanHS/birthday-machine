$(document).ready(function() {
  $("#happy-birthday").submit(function(event) {
    var user = $("input#number").val();
    var name = $("input#name").val();

    var sentence = function() {

        return "Happy Birthday, " + name + "!" ;
      }


    var count = [];

    for (var i = 1; i <= user; i++) {

      if (i % 10 === 0) {
        count.push(sentence());
      }

      else if (i % 5 === 0) {
        count.push("Birthday!");
      }
      else if (i % 2 === 0) {
        count.push("Happy");
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
