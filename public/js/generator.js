$(document).ready(function() {
  // Getting references to our form and inputs
  var loginForm = $("form.login");
  var nameInput = $("input#name-input");
  var raceInput = $("input#race-input");
  var characterClassInput = $("input#class-input");
  var alignmentInput = $("input#alignment-input");

  // When the form is submitted, we validate there's an name and race entered
  loginForm.on("submit", function(event) {
    event.preventDefault();
    var userData = {
      name: nameInput.val().trim(),
      race: raceInput.val().trim(),
      characterClass: characterClassInput.val().trim(),
      alignment: alignmentInput.val().trim()
    };
    console.log(userData);

    if (
      !userData.name ||
      !userData.race ||
      !userData.characterClass ||
      !userData.alignment
    ) {
      return;
    }

    // If we have an name and race we run the loginUser function and clear the form
    loginUser(
      userData.name,
      userData.race,
      userData.characterClass,
      userData.alignment
    );
    nameInput.val("");
    raceInput.val("");
    characterClassInput.val("");
    alignmentInput.val("");
  });

  // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
  function loginUser(name, race, characterClass, alignment) {
    $.post("/api/member/generator", {
      name: name,
      race: race,
      characterClass: characterClass,
      alignment: alignment
    })
      .then(function() {
        window.location.replace("/members/character");
        // If there's an error, log the error
      })
      .catch(function(err) {
        console.log(err);
      });
  }
  $.get("http://www.dnd5eapi.co/api/classes").then(function(data) {
    $("#test").append(data.results[0].name);
    console.log(data.results);
  });
  $.get("http://www.dnd5eapi.co/api/races").then(function(data) {
    $("#test").append(data.results[0].name);
    console.log(data.results);
  });
  $.get("http://www.dnd5eapi.co/api/spells").then(function(data) {
    $("#test").append(data.results[0].name);
    console.log(data.results);
  });
});
