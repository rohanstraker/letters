$(document).ready(function(){
  $("#blanks form").submit(function(event){
    var nameInput = $("input#name").val();
    //console.log(nameInput + " #1 works");

    $(".name").text(nameInput);

    $("#letter").show();

    event.preventDefault();
  });
});
