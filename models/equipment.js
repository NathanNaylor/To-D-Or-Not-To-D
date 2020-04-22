module.exports = function(sequelize, DataTypes) {
  const Equipment = sequelize.define("Equipment", {
    weapon: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    armor: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    miscEquipment: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  });

  // Add a belongsTo association to User here
  // Example: https://github.com/sequelize/express-example/blob/master/models/task.js
  // Equipment.associate = function(models) {
  //   models.Equipment.belongsTo(models.User, {
  //     onDelete: "CASCADE",
  //     foreignKey: {
  //       allowNull: false
  //     }
  //   });
  // };
  return Equipment;
};
