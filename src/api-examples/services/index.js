/*

* IMPLEMENTACIÓN TOKEN

'use strict'
require('dotenv').config('');
const jwt = require('jwt-simple')
const moment = require('moment')
const config = require('../config');
const { decode } = require('jsonwebtoken');

/**
 * Método para creación de token
 * Se pasa por parámetro el objeto usuario
 * El token durará disponible por 10 horas
 * @returns token codificado
 
 /*Salt contraseña, token en db y Asignar niveles a los token
function createToken(user){
    const payload = {
        sub: user,
        iat: moment().unix(),
        exp: moment().add(10, 'hours').unix(),
    }

    return jwt.encode(payload, config.SECRET_TOKEN)
}

function decodeToken(token){
    const decoded = new Promise((resolve, reject) => {
        try{
            const payload = jwt.decode(token, config.SECRET_TOKEN)
            if(payload.exp <= moment().unix()){
                resolve({
                    status: 401,
                    message: 'El token ha expirado'
                })
            }
            resolve(payload.sub)
        }catch(err){
            reject({
                status : 500,
                message : 'Invalid Token'
            })
        }
    })
    return decoded
}

module.exports = {
    createToken,
    decodeToken
}

*/