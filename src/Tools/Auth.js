const md5 = require('md5')
const { v4 } = require('uuid')
const Login = require('../Models/Login')
const Session = require('../Models/Session')

const CheckSession = () => {
    return new Promise((resolve, reject) => {
        
    })
}

const CreateSession = (parm) => {
    return new Promise((resolve, reject) => {
        Session.sync()
        Session.create({
            session: v4(), 
            user_id: parm.uid
        })
        .then((sid) => {
            resolve(sid)
        })
        .catch((e) => {
            reject(e)
        })
    })
}

const LogIn = (param) => {
    return new Promise(async(resolve, reject) => {
        try {
            Login.sync()
            var login = await Login.findAll({
                where: {
                    email: param.email, 
                    password: md5(param.pass).toString()
                }
            })
            var parm = {uid : login[0].id}
            var session = await CreateSession(parm)
            resolve(session)
        } catch(e) { reject(e) }
    })
}

const SignUp = (param) => {
    return new Promise(async(resolve, reject) => {
        try {
            var newUser = await Login.create({
                firstname : param.name,       //<<< parameter required
                lastname  : param.lastname,   //<<< parameter required
                email     : param.email,      //<<< parameter required
                password  : md5(param.pass),  //<<< parameter required
                program   : param.program,    //<<< parameter required
                department: param.department, //<<< parameter required
                type      : param.type    
            }) 
            var parm = {uid : newUser.id}
            var session = await CreateSession(parm)
            resolve({newUser, session})
        } catch( e ) {
            reject(e)
        }
        
    })
}

module.exports = {
    SignUp, 
    LogIn
}

