$(document).ready(function() {
  var things = ["playing Pool", "photograpy", "scarlett johansson", "chimichanga", "rick and morty"];

  function makingButton() {
    $('.showButton').empty();

    for (var i = 0; i < things.length; i++) {
      var btn = $("<button>");
      btn.text(things[i]);
      $(".showButton").append(btn);
    }
  }
  makingButton();
  








});