
module.export=function(sequelize, Datatypes) {
  const user = sequelize.define("user", {
    
    name: {
      type: Datatypes.STRING,
      allowNull: false,
      len:[64],
    },
    email:{
      type:Datatypes.STRING,
      allowNull: false,
      len: [64],
    },

  });
  
  user.associate = function (models){
    user.hasMany(models.books, {
      onDelete: "cascade"
    });
  };

  return user;
}
