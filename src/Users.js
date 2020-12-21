const { Router } = require('express')
const { FetchDeparment } = require('./Tools/Deparment')
const { FetchProgrambyId } = require('./Tools/Program')
const { searchUserBy, deleteById } = require('./Tools/Users')
const user = Router()
user.post('/api/1/users/search', (req, res) => {
    var query = req.query
    
    var parameters = {
        name       : query.name        === null? '': query.name, 
        programid  : query.programid   === null? '': query.programid, 
        deparmentid: query.deparmentid === null? '': query.deparmentid
    }

    searchUserBy(parameters)
    .then((result) => {
        res.status(200).send({
            code   : 200, 
            message: "search result", 
            result: result
        })
    })
    .catch((error) => {
        res.status(500).send({
            code   : 500, 
            message: "search result error "+error.toString(), 
            result: null
        })
    })
})
user.post('/api/1/users/delete', (req, res) => {
    var query = req.query
    var paramenters = {
        session: query.session, 
        userid : query.userid, 
        uidd   : query.uidd
    }
    deleteById(paramenters)
    .then((deleted) => {
        res.status(200).send({
            code   : 200, 
            message: "search result", 
            deleted: deleted
        })
    })
    .catch((error) => {
        res.status(500).send({
            code   : 500, 
            message: "search result error "+error.toString(), 
            deleted: null
        })
    })
})
module.exports = user