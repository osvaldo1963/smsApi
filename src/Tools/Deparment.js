const Department = require('../Models/Deparments')
const Deparments = require('../Models/Deparments')
const { CheckSession } = require('./Auth')

const FetchDeparment = (param) => {
    return new Promise(async(resolve, reject) => {
        try {
            Department.sync()
            var paramenters = {
                session: param.session, 
                userid: param.userid
            }
            await CheckSession(paramenters)
            var deparmnts = await Department.findAll({
                where: {
                    program_id: param.programid
                }
            })
            resolve(deparmnts)
        } catch(error) { reject(error) }
    })
}

const CreateDeparment = (param) => {
    return new Promise(async(resolve, reject) =>{
        try {   
            var paramenters = {
                session: param.session, 
                userid: param.userid
            }
            await CheckSession(paramenters)
            Department.sync()
            var program = await Department.create({
                department: param.department,
                program_id: param.programid, 
            })
            resolve(program)

        } catch(error) {reject(error)}
    
    })
}

module.exports = {
    FetchDeparment, 
    CreateDeparment
}