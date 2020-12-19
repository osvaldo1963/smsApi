const Conection = require('../Tools/Connection')
const { DataTypes } = require('sequelize');

const Program = Conection.define("Program", {
    program: {
        type: DataTypes.STRING, 
        allowNull: false
    }, 
}, {
    underscored: true,
    timestamps: false,
    freezeTableName: true,
})

module.exports = Program