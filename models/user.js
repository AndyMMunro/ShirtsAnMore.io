const Sequelize = require('sequelize');



module.exports=function(sequelize, DataTypes) {
  
  const User = sequelize.define("User", {
    // id: {
    //   type: DataTypes.INTEGER,
    //   autoIncrement: true,
    //   primaryKey: true
    // },

     name: {
       type: DataTypes.STRING,
         allowNull: false,
       len:[64],
       min: 6,
       max: 255
     },
     userName: {
      type: DataTypes.STRING,
      allowNull: false,
      len:[64],
      min: 6,
      max: 255
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      len:[64],
      min: 6,
      max: 1024
    },
    email:{
      type:DataTypes.STRING,
      allowNull: false,
      len: [64],
      min: 6,
      max: 255
    }
  });
  
  // User.associate = function (models){
  //   User.hasMany(models.Products, {
  //     onDelete: "cascade"
  //   });
  // };
  
  return User;
  
}
