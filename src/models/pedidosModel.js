const { Model, DataTypes } = require ("sequelize");
const sequelize = require("../database/index");

class Pedidos extends Model{}

Pedidos.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey:true
    },
    book_id:{
        type: DataTypes.INTEGER,
    },
    client_id:{
        type: DataTypes.INTEGER,
    },
    date:{
        type: DataTypes.DATEONLY,
    },
    payments:{
        type: DataTypes.DECIMAL,
    },
    shipping_method:{
        type: DataTypes.STRING,
    },
},{
    sequelize,
    modelName: "pedidos",
    timestamps: false
});

module.exports = Pedidos;