$(document).ready(function() {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page

  init();

  function init() {
    $.get("/api/user_data").then(function(data) {
      $(".member-name").text(data.email);
      getCharacters(data.id);
    });
  }

  $(document).on("click", ".button-xlarge2", handlePostDelete);
  $(document).on("click", ".button-xlarge1", handleView);

  function handleView() {
    var clickedId = $(this).data("id");
    console.log(clickedId);
    redirectToCharacter();
  }

  function redirectToCharacter() {
    var clickedId = $(this);
    console.log(clickedId);
    // window.location.href = "/members/character/id:";
  }

  function handlePostDelete() {
    let currentCharacter = $(this).data("id");
    console.log(currentCharacter);
    $.get("/api/user_data/1")
      .then(function(data) {
        return data[0].Characters[currentCharacter].id;
      })
      .then(data => {
        console.log(data);
        deletePost(data);
      });
  }

  function deletePost(id) {
    $.ajax({
      method: "DELETE",
      url: "/api/members/character/" + id
    }).then(location.reload(true));
  }

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
        viewButton.attr("data-id", i);
        $("#new-view-button").append(viewButton);
        $("#new-view-button-" + i).text("View Stats");

        var viewButton = $("<button>");
        viewButton.addClass("button-xlarge2");
        viewButton.addClass("pure-button");
        viewButton.attr("id", "new-delete-button-" + i);
        viewButton.attr("data-id", i);
        $("#new-delete-button").append(viewButton);
        $("#new-delete-button-" + i).text("Delete");
      }
    });
  }
});
