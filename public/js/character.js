/* eslint-disable prettier/prettier */
$(document).ready(function() {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  let skills;
  let stats;
  let spells;
  let savingThrows;

  $.get("/api/user_data").then(function(data) {
    // console.log(data);

    getCharacters(data.id);
  });

  // getCharacters();

  function getCharacters(userID) {
    $.get("/api/user_data/" + userID, function(data) {
      console.log(data);
      classStats(data[0].Characters[0].characterClass);
      $(".character-name").text(data[0].Characters[0].name);
      $(".character-class").text(data[0].Characters[0].characterClass);
      $(".character-race").text(data[0].Characters[0].race);
      $(".character-alignment").text(data[0].Characters[0].alignment);
      console.log(skills);
      console.log(stats);
      console.log(spells);
      console.log(savingThrows);
    });
  }
  function classStats(charClass) {
    switch (charClass) {
    case "Barbarian":
      stats = {
        STR: 15,
        DEX: 13,
        CON: 14,
        INT: 8,
        WIS: 10,
        CHA: 12
      };
      skills = {
        acrobatics: "+1",
        animalHandling: "0",
        arcana: "-1",
        athletics: "+4",
        deception: "+1",
        history: "-1",
        insight: "0",
        intimidation: "+1",
        investigation: "-1",
        medicine: "0",
        nature: "-1",
        perception: "+2",
        performance: "+1",
        persuasion: "+1",
        religion: "-1",
        sleightOfHand: "+1",
        stealth: "+1",
        survival: "0"
      };
      savingThrows = {
        strength: "+4",
        dexterity: "+1",
        constitution: "+4",
        inteligence: "-1",
        wisdom: "0",
        charisma: "+1"
      };
      spells = {};
      console.log(data);
      break;

    case "Bard":
      stats = {
        STR: 8,
        DEX: 14,
        CON: 13,
        INT: 10,
        WIS: 12,
        CHA: 15
      };
      skills = {
        acrobatics: "+2",
        animalHandling: "+1",
        arcana: "0",
        athletics: "-1",
        deception: "+4",
        history: "0",
        insight: "+1",
        intimidation: "+2",
        investigation: "0",
        medicine: "+1",
        nature: "0",
        perception: "+1",
        performance: "+4",
        persuasion: "+4",
        religion: "0",
        sleightOfHand: "+2",
        stealth: "+2",
        survival: "+1"
      };
      savingThrows = {
        strength: "-1",
        dexterity: "+4",
        constitution: "+1",
        inteligence: "0",
        wisdom: "+1",
        charisma: "+4"
      };
      spells = {
        cantrips: [
          "Prestidigitation",
          "Vicious Mockery"
        ],
        levelOne: [
          "Healing Word",
          "Charm Person",
          "Feather Fall"
        ]};
      break;

    case "Cleric":
      stats = {
        STR: 14,
        DEX: 8,
        CON: 12,
        INT: 10,
        WIS: 15,
        CHA: 13
      };
      skills = {
        acrobatics: "-1",
        animalHandling: "+2",
        arcana: "0",
        athletics: "+2",
        deception: "+1",
        history: "0",
        insight: "+2",
        intimidation: "+1",
        investigation: "0",
        medicine: "+2",
        nature: "0",
        perception: "+2",
        performance: "+1",
        persuasion: "+3",
        religion: "+2",
        sleightOfHand: "-1",
        stealth: "-1",
        survival: "+2"
      };
      savingThrows = {
        strength: "+2",
        dexterity: "-1",
        constitution: "+1",
        inteligence: "0",
        wisdom: "+4",
        charisma: "+3"
      };
      spells = {
        cantrips: [
          "Sacred Flame",
          "Spare The Dying",
          "Thaumaturgy"
        ],
        levelOne: [
          "Cure Wounds",
          "Shield Of Faith",
          "Sanctuary"
        ]};
      break;

    case "Druid":
      stats = {
        STR: 12,
        DEX: 8,
        CON: 14,
        INT: 10,
        WIS: 15,
        CHA: 13
      };
      skills = {
        acrobatics: "-1",
        animalHandling: "+4",
        arcana: "0",
        athletics: "+1",
        deception: "+1",
        history: "0",
        insight: "+2",
        intimidation: "+1",
        investigation: "0",
        medicine: "+2",
        nature: "+2",
        perception: "+2",
        performance: "+1",
        persuasion: "+1",
        religion: "0",
        sleightOfHand: "-1",
        stealth: "-1",
        survival: "+2"
      };
      savingThrows = {
        strength: "+2",
        dexterity: "-1",
        constitution: "+1",
        inteligence: "+2",
        wisdom: "+4",
        charisma: "+1"
      };
      spells = {
        cantrips: [
          "Shillelagh",
          "Poison Spray"
        ],
        levelOne: [
          "Faerie Fire",
          "Longstrider",
          "Thunderwave"
        ]};
      break;

    case "Fighter":
      stats = {
        STR: 15,
        DEX: 8,
        CON: 14,
        INT: 12,
        WIS: 10,
        CHA: 13
      },
      skills = {
        acrobatics: "-1",
        animalHandling: "0",
        arcana: "+1",
        athletics: "+2",
        deception: "+1",
        history: "+1",
        insight: "0",
        intimidation: "+1",
        investigation: "+1",
        medicine: "0",
        nature: "+1",
        perception: "0",
        performance: "+1",
        persuasion: "+1",
        religion: "+1",
        sleightOfHand: "-1",
        stealth: "-1",
        survival: "0"
      };
      savingThrows = {
        strength: "+4",
        dexterity: "-1",
        constitution: "+4",
        inteligence: "+1",
        wisdom: "+0",
        charisma: "+1"
      };
      spells = {
        cantrips: [],
        levelOne: []};
      break;

    case "Monk":
      stats = {
        STR: 8,
        DEX: 15,
        CON: 13,
        INT: 12,
        WIS: 14,
        CHA: 10
      },
      skills = {
        acrobatics: "+4",
        animalHandling: "2",
        arcana: "+1",
        athletics: "-1",
        deception: "0",
        history: "+1",
        insight: "+4",
        intimidation: "0",
        investigation: "+1",
        medicine: "+2",
        nature: "+1",
        perception: "+2",
        performance: "0",
        persuasion: "0",
        religion: "+1",
        sleightOfHand: "+2",
        stealth: "+2",
        survival: "2"
      };
      savingThrows = {
        strength: "+1",
        dexterity: "+4",
        constitution: "+1",
        inteligence: "+1",
        wisdom: "+2",
        charisma: "+1"
      };
      spells = {
        cantrips: [],
        levelOne: []};
      break;

    case "Paladin":
      stats = {
        STR: 15,
        DEX: 8,
        CON: 13,
        INT: 12,
        WIS: 10,
        CHA: 14
      };
      skills = {
        acrobatics: "-1",
        animalHandling: "0",
        arcana: "+1",
        athletics: "+4",
        deception: "+2",
        history: "+1",
        insight: "0",
        intimidation: "+2",
        investigation: "+1",
        medicine: "0",
        nature: "+1",
        perception: "0",
        performance: "+2",
        persuasion: "+2",
        religion: "+3",
        sleightOfHand: "-1",
        stealth: "-1",
        survival: "0"
      };
      savingThrows = {
        strength: "+2",
        dexterity: "-1",
        constitution: "+1",
        inteligence: "+1",
        wisdom: "+2",
        charisma: "+4"
      };
      spells = {};
      break;

    case "Ranger":
      stats = {
        STR: 8,
        DEX: 15,
        CON: 13,
        INT: 12,
        WIS: 14,
        CHA: 10
      },
      skills = {
        acrobatics: "+2",
        animalHandling: "+2",
        arcana: "+1",
        athletics: "-1",
        deception: "0",
        history: "+1",
        insight: "+2",
        intimidation: "0",
        investigation: "+3",
        medicine: "+2",
        nature: "+1",
        perception: "+4",
        performance: "0",
        persuasion: "0",
        religion: "+1",
        sleightOfHand: "-1",
        stealth: "-1",
        survival: "+2"
      };
      savingThrows = {
        strength: "+1",
        dexterity: "+4",
        constitution: "+1",
        inteligence: "+1",
        wisdom: "+2",
        charisma: "0"
      };
      spells = {};
      break;

    case "Rogue":
      stats = {
        STR: 8,
        DEX: 15,
        CON: 10,
        INT: 12,
        WIS: 13,
        CHA: 14
      },
      skills = {
        acrobatics: "+6",
        animalHandling: "+1",
        arcana: "+1",
        athletics: "-1",
        deception: "+4",
        history: "+1",
        insight: "+1",
        intimidation: "+2",
        investigation: "+5",
        medicine: "+1",
        nature: "+1",
        perception: "+3",
        performance: "+2",
        persuasion: "+2",
        religion: "+1",
        sleightOfHand: "+4",
        stealth: "+2",
        survival: "+1"
      };
      savingThrows = {
        strength: "-1",
        dexterity: "+4",
        constitution: "0",
        inteligence: "+3",
        wisdom: "+1",
        charisma: "+2"
      };
      spells = {};
      break;

    case "Sorcerer":
      stats = {
        STR: 8,
        DEX: 13,
        CON: 14,
        INT: 12,
        WIS: 10,
        CHA: 15
      },
      skills = {
        acrobatics: "+1",
        animalHandling: "0",
        arcana: "+3",
        athletics: "-1",
        deception: "+2",
        history: "+1",
        insight: "+2",
        intimidation: "+2",
        investigation: "+1",
        medicine: "0",
        nature: "+1",
        perception: "0",
        performance: "+2",
        persuasion: "+2",
        religion: "+1",
        sleightOfHand: "+1",
        stealth: "+1",
        survival: "0"
      };
      savingThrows = {
        strength: "-1",
        dexterity: "+1",
        constitution: "+4",
        inteligence: "+1",
        wisdom: "0",
        charisma: "+4"
      };
      spells = {
        cantrips: ["Mage Hand", "Prestidigitation", "Fire Bolt", "Light"],
        levelOne: ["Shield", "Thunderwave"]};
      break;

    case "Warlock":
      stats = {
        STR: 8,
        DEX: 13,
        CON: 14,
        INT: 12,
        WIS: 10,
        CHA: 15
      },
      skills = {
        acrobatics: "+1",
        animalHandling: "0",
        arcana: "+3",
        athletics: "-1",
        deception: "+2",
        history: "+3",
        insight: "0",
        intimidation: "+2",
        investigation: "+1",
        medicine: "0",
        nature: "+1",
        perception: "0",
        performance: "+2",
        persuasion: "+2",
        religion: "+1",
        sleightOfHand: "+1",
        stealth: "+1",
        survival: "0"
      };
      savingThrows = {
        strength: "-1",
        dexterity: "+1",
        constitution: "+2",
        inteligence: "+1",
        wisdom: "+2",
        charisma: "+4"
      };
      spells = {
        cantrips: ["Eldritch Blast", "Prestidigitation"],
        levelOne: ["Charm Person", "Hellish Rebuke"]};
      break;

    case "Wizard":
      stats = {
        STR: 8,
        DEX: 13,
        CON: 14,
        INT: 15,
        WIS: 10,
        CHA: 12
      },
      skills = {
        acrobatics: "+1",
        animalHandling: "0",
        arcana: "+4",
        athletics: "-1",
        deception: "+1",
        history: "+2",
        insight: "0",
        intimidation: "+1",
        investigation: "+4",
        medicine: "0",
        nature: "+2",
        perception: "0",
        performance: "+1",
        persuasion: "+1",
        religion: "+2",
        sleightOfHand: "+1",
        stealth: "+1",
        survival: "0"
      };
      savingThrows = {
        strength: "-1",
        dexterity: "+1",
        constitution: "+2",
        inteligence: "+4",
        wisdom: "+2",
        charisma: "+1"
      };
      spells = {
        cantrips: ["Mage Hand", "Fire Bolt", "Predstidigitation"],
        levelOne: ["Charm Person", "Fog Cloud", "Color Spray", "Detect Magic", "Magic Missile", "Feather Fall"]};
      break;
    }
  }
});
