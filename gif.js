$(document).ready(function() {
  var things = ["playing Pool", "photograpy", "scarlett johansson", "chimichanga", "rick and morty"];

  function makingButton() {
    $('#showButton').empty();

    for (var i = 0; i < things.length; i++) {
      var btn = $("<button>");
      btn.text(things[i]);
      $("#showButton").append(btn);
    }

    $("#submitButton").on('click', function(event) {
      event.preventDefault();
      
      // value from the input
      var favList = $("#thingsList").val();
      // add to fav list
      things.push(favList);
      makingButton();
      
    });
  };
  makingButton();
  








});