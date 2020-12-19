const Conection = require('../Tools/Connection')
const { DataTypes } = require('sequelize');

const Department = Conection.define("Department", {
    department: {
        type: DataTypes.STRING, 
        allowNull: false
    }, 
    program_id: {
        type: DataTypes.INTEGER, 
        allowNull: false
    }, 
    
}, {
    underscored: true,
    timestamps: false,
    freezeTableName: true,
})

module.exports = Department