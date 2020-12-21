const Conection = require('../Tools/Connection')
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
    phone: {
        type: DataTypes.STRING, 
        allowNull: false
    },
    password: {
        type: DataTypes.STRING, 
        allowNull: true, 
        defaultValue: "none"
    }, 
    program_id: {
        type: DataTypes.INTEGER, 
    }, 
    department_id: {
        type: DataTypes.INTEGER,
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