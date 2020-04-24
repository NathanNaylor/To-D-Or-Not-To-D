$(document).ready(function() {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(function(data) {
    $(".member-name").text(data.email);
    getCharacters(data.id);
  });
  function getCharacters(userID) {
    $.get("/api/user_data/" + userID, function(data) {
      // $(".character-name").text(data[0].Characters[0].name);
      for (var i = 0; i < data[0].Characters.length; i++) {
        // create a parent div for the oncoming element
        var wellSection = $("<h3>");
        // add a class to this div: 'well'
        wellSection.addClass("new-character-style");
        // add an id to the well to mark which well it is
        wellSection.attr("id", "new-character-" + i);
        // append the well to the well section
        $("#new-character").append(wellSection);
        // Now add all of our character data to the well we just placed on the page
        // make the name an h2,
        $("#new-character-" + i).text(data[0].Characters[i].name);



        var viewButton = $("<button>");
        viewButton.addClass("button-xlarge1");
        viewButton.addClass("pure-button");
        viewButton.attr("id", "new-view-button-" + i);
        $("#new-view-button").append(viewButton);
        $("#new-view-button-" + i).text("View Stats");

        var viewButton = $("<button>");
        viewButton.addClass("button-xlarge2");
        viewButton.addClass("pure-button");
        viewButton.attr("id", "new-delete-button-" + i);
        $("#new-delete-button").append(viewButton);
        $("#new-delete-button-" + i).text("Delete");
      }
    });
  }
});
