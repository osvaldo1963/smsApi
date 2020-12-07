const { Sequelize } = require('sequelize')
const sqlite3 = require('sqlite3')
var Location = './src/database.sqlite3'
/*
const db = new sqlite3.Database(Location, (err) => { 
    if (err) { 
        console.log('Error when creating the database', err) 
    } else { 
        console.log('Database created!') 
        /* Put code to create table(s) here 
    } 
})
*/
const Conection = new Sequelize({
    dialect: 'sqlite',
    storage: Location
})

module.exports = Conection