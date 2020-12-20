const Program = require('../Models/Program')
const { CheckSession } = require('./Auth')

const FetchProgrambyId = (param) => {
    return new Promise(async(resolve, reject) => {
        try {
            var programs = await Program.findOne({
                where: {
                    id: param.id
                }
            })
            resolve(programs)
        } catch(error) { reject(error) }
    })
}
const FetchPrograms = (param) => {
    return new Promise(async(resolve, reject) => {
        try {
            Program.sync()
            var paramenters = {
                session: param.session, 
                userid: param.userid
            }
            await CheckSession(paramenters)
            var programs = await Program.findAll()
            resolve(programs)
        } catch(error) {reject(error)}
        
    })
}

const CreateProgram = (param) => {
    return new Promise(async(resolve, reject) =>{
        try {   
            var paramenters = {
                session: param.session, 
                userid: param.userid
            }
            await CheckSession(paramenters)
            Program.sync()
            var program = await Program.create({
                program: param.program
            })
            resolve(program)

        } catch(error) {reject(error)}
    
    })
}

module.exports = {
    FetchPrograms, 
    CreateProgram, 
    FetchProgrambyId
}