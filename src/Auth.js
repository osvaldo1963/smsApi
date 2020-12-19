const { Router } = require('express')
const auth       = Router()

const { 
    sendToNumbers 
} = require('./Tools/Messaging')

const { SignUp, LogIn } = require('./Tools/Auth')

auth.post('/api/1/sms', (req, res) => {
    var numbers = req.query.numbers //<<< parameter required
    var message = req.query.message //<<< parameter require

    var arrayOfNumbers = numbers.toString().split(",")
    sendToNumbers(arrayOfNumbers, message)
    res.status(200).send({
        code : 200, 
        messages: "all messages are sent"
    })
})

auth.post('/api/1/register', (req, res) => {
    var query = req.query
    var param = {
        name      : query.name,       //<<< parameter required
        lastname  : query.lastname,   //<<< parameter required
        email     : query.email,      //<<< parameter required
        pass      : query.pass,  //<<< parameter required
        program   : query.program,    //<<< parameter required
        department: query.department, //<<< parameter required
        type      : query.type        //<<< parameter required
    }
    SignUp(param)
    .then((user) => {
        res.status(200).send({
            code: 200, 
            message: "user created", 
            user: user
        })
    })
    .catch((error) => {
        res.status(500).send({
            code: 500, 
            message: "user create error " + error.toString(), 
            user: null
        })
    })
})

auth.post('/api/1/login', (req, res) => {
    var query = req.query
    var parm = {
        email: query.email, 
        pass : query.pass
    }
    LogIn(parm)
    .then((success) => {
        res.status(200).send({
            code: 200, 
            message: "session initialted", 
            user: success
        })
    })
    .catch((error) => {
        res.status(500).send({
            code: 500, 
            message: "session error " + error.toString(), 
            user: null
        })
    })
    
        
})
module.exports = auth