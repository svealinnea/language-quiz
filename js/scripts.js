$(document).ready(function() {
  $("form#Quiz").submit(function(event){
    event.preventDefault();
  const work = parseInt($("#work").val());
  const beverage = parseInt($("#beverage").val());
  const burning = parseInt($("#burning").val());
  const learning = parseInt($("#learning").val());
  const vacation = parseInt($("#vacation").val());
  const value = work + beverage + burning +learning + vacation;

  if (value <= 300 && value >= 10) {
    $("#js").show();
    $("#p,#c").hide(); 
  }
  else if (value >= 300 ) {
    $("#c").show();
    $("#js,#p").hide();
  }
  else if (value <= 10 || value <=0 ) {
      $("#p").show();
      $("#js,#c").hide();
  }
  });

  $(".btn").click(function() {
    alert("Hey friend, thanks for stopping by! I hope that you enjoy your results. Cheers!")
  });
  $(".detailed").click(function(){
    alert("Javascript allows you to implement complex features on webpages. Python is an interpreted, object-oriented and high-level programming language. C# is a general purpose programming language")
  });
});
