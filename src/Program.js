const { Router } = require('express')
const { CreateProgram, FetchPrograms } = require('./Tools/Program')
const program    = Router()

program.post('/api/1/program/create', (req, res) =>{
    var query = req.query
    var paramenters = {
        session: query.session, 
        userid: query.userid,
        program: query.program
    }
    CreateProgram(paramenters)
    .then((program) => {
        res.status(200).send({
            code   : 200, 
            message: "program created", 
            program: program
        })
    })
    .catch((error) => {
        res.status(500).send({
            code   : 500, 
            message: "program created "+error.toString(), 
            program: null
        })
    })
})

program.post('/api/1/program/fetch', (req, res) =>{
    var query = req.query
    var paramenters = {
        session: query.session, 
        userid: query.userid,
    }
    FetchPrograms(paramenters)
    .then((program) => {
        res.status(200).send({
            code   : 200, 
            message: "program fetch", 
            program: program
        })
    })
    .catch((error) => {
        res.status(500).send({
            code   : 500, 
            message: "program fetch error "+error.toString(), 
            program: null
        })
    })
})

module.exports = program