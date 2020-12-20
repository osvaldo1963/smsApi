const { Router } = require('express')
const { CreateDeparment, FetchDeparment } = require('./Tools/Deparment')
const department    = Router()

department.post('/api/1/deparment/create', (req, res) =>{
    var query = req.query
    var paramenters = {
        session: query.session, 
        userid: query.userid,
        department: query.department, 
        programid: query.programid
        
    }
    CreateDeparment(paramenters)
    .then((deparment) => {
        res.status(200).send({
            code   : 200, 
            message: "deparment created", 
            deparment: deparment
        })
    })
    .catch((error) => {
        res.status(500).send({
            code   : 500, 
            message: "deparment created  error"+error.toString(), 
            deparment: null
        })
    })
})

department.post('/api/1/deparment/byid', (req, res) =>{
    var query = req.query
    var paramenters = {
        session: query.session, 
        userid: query.userid,
    }
    FetchDeparment(paramenters)
    .then((deparment) => {
        res.status(200).send({
            code   : 200, 
            message: "deparment fetch", 
            deparment: deparment
        })
    })
    .catch((error) => {
        res.status(500).send({
            code   : 500, 
            message: "deparment fetch error "+error.toString(), 
            deparment: null
        })
    })
})

module.exports = department