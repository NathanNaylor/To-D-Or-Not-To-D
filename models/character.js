module.exports = function(sequelize, DataTypes) {
  const Character = sequelize.define("Character", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    race: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    characterClass: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    alignment: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  });

  // Add a belongsTo association to User here
  // Example: https://github.com/sequelize/express-example/blob/master/models/task.js
  Character.associate = function(models) {
    models.Character.belongsTo(models.User, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Character;
};
