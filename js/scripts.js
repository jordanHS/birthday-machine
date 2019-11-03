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
      else {
        count.push(" " + i);
      }

    }

    function isNumber(number)
    {
      var numbers = /^[1-9]+$/;
      {
        if(number.value.match(numbers))
        return true;
      }
      else
      {
        alert("That is not a number, please enter a number.");
        return false;
      }
      }

      $(".output").show().text(count);
    event.preventDefault();

  });


});
