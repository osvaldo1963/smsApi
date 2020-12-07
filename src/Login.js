const Conection = require('./Connection')
const { DataTypes } = require('sequelize');

const Login = Conection.define("Login", {
    firstname: {
        type: DataTypes.STRING, 
        allowNull: false
    }, 
    lastname : {
        type: DataTypes.STRING, 
        allowNull: false
    }, 
    email: {
        type: DataTypes.STRING, 
        allowNull: false
    }, 
    password: {
        type: DataTypes.STRING, 
        allowNull: false
    }, 
    program: {
        type: DataTypes.STRING, 
    }, 
    department: {
        type: DataTypes.STRING,
    }, 
    type: {
        type: DataTypes.STRING
    }
}, {
    underscored: true,
    timestamps: false,
    freezeTableName: true,
})

module.exports = Login