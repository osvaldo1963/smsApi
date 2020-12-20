const { Router } = require('express')
const { Op } = require('sequelize')
const Login = require('./Models/Login')
const user = Router()
user.post('/api/1/users/search', (req, res) => {
    var query = req.query
    var parameters = {
        name: query.name, 
        programid: query.programid == null? '': query.programid, 
        deparmentid: query.deparmentid == null? '': query.deparmentid
    }
    console.log(parameters)
    Login.sync()
    Login.findAll({
        where: {
            firstname: {
                [Op.like]: "%"+parameters.name+"%"
            }, 
            program_id: {
                [Op.like]: "%"+parameters.programid+"%", 
            },
            department_id: {
                [Op.like]:  "%"+parameters.deparmentid+"%"
            }
        }
    })
    .then((data) => {
        res.send({data})
    })
    .catch((error) => {
        res.send({error})
    })
})
module.exports = user