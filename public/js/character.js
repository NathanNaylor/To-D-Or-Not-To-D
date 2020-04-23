$(document).ready(function() {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(function(data) {
    // console.log(data);

    getCharacters(data.id);
  });

  // getCharacters();

  function getCharacters(userID) {
    $.get("/api/user_data/" + userID, function(data) {
      console.log(data);
      $(".character-name").text(data[0].Characters[0].name);
      $(".character-class").text(data[0].Characters[0].characterClass);
      $(".character-race").text(data[0].Characters[0].race);
      $(".character-alignment").text(data[0].Characters[0].alignment);
    });
  }
});
