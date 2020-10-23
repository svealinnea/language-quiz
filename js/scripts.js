$(document).ready(function() {
  $("form#Quiz").submit(function(){
    event.preventDefault();
  const work = parseInt($("#work").val());
  const beverage = parseInt($("#beverage").val());
  const burning = parseInt($("#burning").val());
  const learning = parseInt($("#learning").val());
  const vacation = parseInt($("#vacation").val());
  const value = work + beverage + burning +learning + vacation;

  if (value <= 5) {
    $("#js").show();
    $("#p,#c").hide(); 
  }
  else if (value <= 10) {
    $("#c").show();
    $("#js,#p").hide();
  }
  else if (value <=15) {
      $("#p").show();
      $("#js,#c").hide();
    }
  });
});
