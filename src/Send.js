const { Router } = require('express')
const send       = Router()
const Login      = require('./Login')
const md5        = require('md5')

const { 
    sendToNumbers 
} = require('./Messaging')

send.post('/api/1/sms', (req, res) => {
    var numbers = req.query.numbers //<<< parameter required
    var message = req.query.message //<<< parameter require

    var arrayOfNumbers = numbers.toString().split(",")
    sendToNumbers(arrayOfNumbers, message)
    res.status(200).send({
        "code" : 200, 
        "messages": "all messages are sent"
    })
})

send.post('/api/1/register', (req, res) => {
    var query = req.query
    Login.sync()
    Login.create({
        firstname : query.name,       //<<< parameter required
        lastname  : query.lastname,   //<<< parameter required
        email     : query.email,      //<<< parameter required
        password  : md5(query.pass).toString(),  //<<< parameter required
        program   : query.program,    //<<< parameter required
        department: query.department, //<<< parameter required
        type      : query.type        //<<< parameter required
    }).
    then((table) => res.send(table))
    .catch((error)=> res.send(error))
})

send.post('/api/1/login', (req, res) => {
    var query = req.query
    Login.sync()
    Login.findAll({
        where: {
            email    : query.email,    //<<< parameter required
            password : md5(query.pass).toString() //<<< parameter required
        }
    })
    .then((login) => {
        console.log(login)
        res.send(login)
    })  
    .catch((error) => {
        console.log(error)
        res.send(error)
    })
})
module.exports = send