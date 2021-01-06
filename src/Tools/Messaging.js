const { CheckSession } = require('./Auth')

const accountid = '**********************************'
const authtoken = '**********************************'
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
const sendToNumbers = async (numbers, text, param) => {
    try {
        var param = {session: "", userid: ""}
        await CheckSession(param)
        numbers.forEach((number, index) => {
            sendtext(number, text)
        });
    } catch(error) { console.log(error) }
}
module.exports = {
    sendToNumbers
}


