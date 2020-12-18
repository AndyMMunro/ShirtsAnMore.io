
module.export=function(sequelize, DataTypes) {
  const Cart = sequelize.define("books", {
    id: {
      type: DataTypes.INTEGER,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      len:[64],
    },
    price:{
      type: DataTypes.INTEGER,
      allowNull: false,
      len: [10],
    },
    category:{
      type:DataTypes.STRING,
      allowNull: false,
      len:[64],
    },
    description:{
      type:DataTypes.STRING,
      allowNull: false,
      len:[1000],
    },
    image:{
      type:DataTypes.STRING,
      allowNull: false,
    },

  });

  Cart.associate = function (models){
    Cart.belongsTo(models.users, {
      foreignKey: {
        allowNull: true,
      },
    });
  };
  return Cart;
}