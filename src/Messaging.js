const accountid = 'ACb2affec622b5c309576aa02b7eaa7edd'
const authtoken = 'ae6ec594146859c7b72ff01ce2148364'
const client    = require('twilio')(accountid, authtoken)

const sendtext = (cell, text) => {
    client.messages.create({
        body: text,
        from: '+15032136363',
        to  : cell
    })
    .then((mess) => {
        console.log(mess)
    })
    .catch((error) => {
        console.log(error)
    })
}
const sendToNumbers = (numbers, text) => {
    numbers.forEach((number, index) => {
        sendtext(number, text)
    });
}
module.exports = {
    sendToNumbers
}


