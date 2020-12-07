const express = require('express')
const app     = express()
const Send    = require('./src/Send')
app.use(Send)
const PORT = process.env.PORT || 4001 
const HOSTNAME = '0.0.0.0'
app.listen(PORT, HOSTNAME, () => {
    console.log('connection on port '+PORT)
})