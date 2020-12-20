const express = require('express')
const program = require('./src/Program')
const app     = express()
const auth    = require('./src/Auth')
const prog    = require('./src/Program')
const deparm  = require('./src/Deparment')
const users   = require('./src/Users')
const helnet  = require('helmet')
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
})
app.use(helnet())
app.use(auth)
app.use(program)
app.use(prog)
app.use(deparm)
app.use(users)
app.use(function (req, res, next) {
    res.status(404).send("Sorry can't find that!")
  })
const PORT = process.env.PORT || 4001 
const HOSTNAME = '0.0.0.0'
app.listen(PORT, HOSTNAME, () => {
    console.log('connection on port '+PORT)
})