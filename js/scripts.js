$(document).ready(function() {
  $("#happy-birthday").submit(function(event) {
    var number = $("input#number").val();
    var name = $("input#name").val();

    var sentence = function() {

        return "Happy Birthday, " + name + "!" ;
      }


    var count = [];

    for (var i = 1; i <= number; i++) {

      if (i % 10 === 0) {
        count.push(sentence());
      }

      else if (i % 5 === 0) {
        count.push("Birthday!");
      }
      else if (i % 2 === 0) {
        count.push("Happy");
      }
      else if (i.toString().includes( /^[A-Za-z]+$/)) {
        alert("Please enter a number");
      }
      else {
        count.push(" " + i);
      }

    }



      $(".output").show().text(count);
    event.preventDefault();

  });


});
