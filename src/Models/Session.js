const Conection = require('../Tools/Connection')
const { DataTypes } = require('sequelize');

const Session = Conection.define("Session", {
    session: {
        type: DataTypes.STRING, 
        allowNull: false
    }, 
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }, 
    active: {
        type: DataTypes.BOOLEAN, 
        allowNull: false
    }, 
    divice: {}
}, {
    underscored: true,
    timestamps: false,
    freezeTableName: true,
})

module.exports = Session