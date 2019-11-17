 
 var sentence = function() {

        return "Happy Birthday, " + name + "!" ;
      }


  
  function BirthdayCount(number) {
    var count = [];
    console.log(count);
    for (var i = 1; i <= number; i++) {
      if (i % 10 === 0) {
        count.push(sentence());
      } 
      else if (i % 5 === 0) {
        count.push("Birthday!");
      } 
      else if (i % 2 !== 0) {
        count.push("Happy");
      } 
      else {
        count.push(" " + i);
      }
    }
    return count;
  }

$(document).ready(function() {
  $("#happy-birthday").submit(function(event) {
    event.preventDefault();
    var number = $("input#number").val();
     name = $("#name").val();
    var count = BirthdayCount(number);
    $(".output").show().text(count);
    
  });
});
