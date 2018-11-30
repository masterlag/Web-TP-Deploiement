module.exports = (sequelize, DataTypes) => {
    var Grimelins = sequelize.define('Grimelins', {
      Grname: DataTypes.STRING,
      Age: DataTypes.STRING
    });
  
    return Grimelins;
  };