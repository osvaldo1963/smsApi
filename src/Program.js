const { Router } = require('express')
const program    = Router()
const Program    = require('./Models/Program')

program.post('/api/1/program/create', (req, res) =>{
    var {program} = req.query
    Program.sync()
    Program.create({
        program: program
    })
    .then(() => {

    })
    .catch((e) => {
        res.status(500).send({
            code: 500, 
            message: "error while creating "+program
        })
    })
})

module.exports = program