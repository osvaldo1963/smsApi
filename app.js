const express = require('express')
const program = require('./src/Program')
const app     = express()
const auth    = require('./src/Auth')
const prog    = require('./src/Program')
const deparm  = require('./src/Deparment')
const users   = require('./src/Users')

app.use(auth)
app.use(program)
app.use(prog)
app.use(deparm)
app.use(users)

const PORT = process.env.PORT || 4001 
const HOSTNAME = '0.0.0.0'
app.listen(PORT, HOSTNAME, () => {
    console.log('connection on port '+PORT)
})