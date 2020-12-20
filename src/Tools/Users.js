const Login = require('../Models/Login')
const { Op } = require('sequelize')
const { FetchDepartmentyId } = require('./Deparment')
const  { FetchProgrambyId } = require('./Program')

const searchUserBy = (param) => {
    return new Promise(async(resolve, reject) => {
        try {
            
            Login.sync()
            var searchResult = await Login.findAll({
                where: {
                    firstname: {
                        [Op.like]: "%"+param.name+"%"
                    }, 
                    program_id: {
                        [Op.like]: "%"+param.programid+"%", 
                    },
                    department_id: {
                        [Op.like]:  "%"+param.deparmentid+"%"
                    }
                }
            })
            var cleanData= []
            var allData = searchResult.map(async(each) => {
                var program = await FetchProgrambyId({id: each.program_id})
                var department = await FetchDepartmentyId({id: each.department_id})
                each["department_id"] = department
                each["program_id"] = program
                cleanData.push(each)
            })
            await Promise.all(allData)
            resolve(cleanData)
        } catch(error) { reject(error) }
    })
}

module.exports = {
    searchUserBy
}