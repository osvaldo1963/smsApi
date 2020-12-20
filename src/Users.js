const { Router } = require('express')
const { FetchDeparment } = require('./Tools/Deparment')
const { FetchProgrambyId } = require('./Tools/Program')
const { searchUserBy } = require('./Tools/Users')
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
module.exports = user