$(document).ready(function() {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $(document).on("click", ".button-xlarge2", handlePostDelete);
  $(document).on("click", ".button-xlarge1", handleView);

  function handleView() {
    var clickedId = $(this).data("id");
    window.location.href = "/members/character/" + clickedId;
  }

  function handlePostDelete() {
    var currentCharacter = $(this).data("id");
    console.log(currentCharacter);
    alert("I was clicked");
  }

  $.get("/api/user_data").then(function(data) {
    $(".member-name").text(data.email);
    getCharacters(data.id);
  });

  function getCharacters(userID) {
    $.get("/api/user_data/" + userID, function(data) {
      for (var i = 0; i < data[0].Characters.length; i++) {
        var nameSection = $("<h3>");
        nameSection.addClass("new-character-style");
        nameSection.attr("id", "new-character-" + i);
        $("#new-character").append(nameSection);
        $("#new-character-" + i).text(data[0].Characters[i].name);

        var viewButton = $("<button>");
        viewButton.addClass("button-xlarge1");
        viewButton.addClass("pure-button");
        viewButton.attr("id", "new-view-button-" + i);
        viewButton.attr("data-id", i);
        $("#new-view-button").append(viewButton);
        $("#new-view-button-" + i).text("View Stats");

        var deleteButton = $("<button>");
        deleteButton.addClass("button-xlarge2");
        deleteButton.addClass("pure-button");
        deleteButton.attr("id", "new-delete-button-" + i);
        deleteButton.attr("data-id", i);
        $("#new-delete-button").append(deleteButton);
        $("#new-delete-button-" + i).text("Delete");
      }
    });
  }
});
