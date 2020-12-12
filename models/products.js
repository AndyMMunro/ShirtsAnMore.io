
module.export=function(sequelize, Datatypes) {
  const products = sequelize.define("books", {
    id: {
      type: Datatypes.INTEGER,
      autoIncrement: true,
    },
    title: {
      type: Datatypes.STRING,
      allowNull: false,
      len:[64],
    },
    price:{
      type: Datatypes.INTEGER,
      allowNull: false,
      len: [10],
    },
    category:{
      type:Datatypes.STRING,
      allowNull: false,
      len:[64],
    },
    description:{
      type:Datatypes.STRING,
      allowNull: false,
      len:[1000],
    },
    image:{
      type:Datatypes.STRING,
      allowNull: false,
    },

  });

  products.associate = function (models){
    products.belongsTo(models.users, {
      foreignKey: {
        allowNull: true,
      },
    });
  };
  return products;
}
