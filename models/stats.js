module.exports = function(sequelize, DataTypes) {
  const Stats = sequelize.define("Stats", {
    skills: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isInt: true,
        min: 3,
        max: 20
      }
    },
    savingThrows: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isInt: true
      }
    },
    health: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isInt: true,
        min: 1
      }
    },
    ac: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isInt: true,
        min: 5
      }
    },
    hitDie: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isInt: true
      }
    },
    initiative: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isInt: true
      }
    }
  });

  // Add a belongsTo association to Character here
  // Example: https://github.com/sequelize/express-example/blob/master/models/task.js
  Stats.associate = function(models) {
    models.Stats.belongsTo(models.Character, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Stats;
};
