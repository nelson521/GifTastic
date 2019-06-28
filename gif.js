$(document).ready(function () {
  var things = ["playing pool", "photograpy", "scarlett johansson", "chimichanga", "rick and morty"];
  var key = "https://api.giphy.com/v1/gifs/search?api_key=74onGORbRcVBdg55CFw1tMcsKREsHiwv&q=playing pool&limit=10&offset=0&rating=PG-13&lang=en;";
  
  function makingButton() {
    $('#showButtons').empty();

    for (var i = 0; i < things.length; i++) {
      var btn = $("<button>");
      btn.addClass("gifButton");
      btn.text(things[i]);
      btn.attr('data-search', things[i]);
      $("#showButtons").append(btn);
    }


    
  };
  makingButton();

  $("#submitButton").on('click', function (event) {
    event.preventDefault();

    // value from the input
    var favList = $("#thingsList").val().trim();
    // add to fav list
    things.push(favList);

    makingButton();

  });







});