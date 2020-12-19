const express = require('express')
const program = require('./src/Program')
const app     = express()
const auth    = require('./src/Auth')

app.use(auth)
app.use(program)

const PORT = process.env.PORT || 4001 
const HOSTNAME = '0.0.0.0'
app.listen(PORT, HOSTNAME, () => {
    console.log('connection on port '+PORT)
})