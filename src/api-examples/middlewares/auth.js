/*

* MIDDLEWARE SECURITY

'use strict';
require('dotenv').config('');
const services = require('../services');
const { response } = require('express');

/**
 * Se deberá enviar un campo de autorización en el header del json que se esta enviando
 * Si la cabecera existe, se extrae el toke de la cabezera
 * Al inicio se debe incluir el "Bearer" y luego un espacio
 
function isAuth(req, res, next) {
	if (!req.headers.authorization) {
		return res.status(403).send({ message: 'No tiene autorización' });
	}
	 

	const token = req.headers.authorization.split(' ')[1];
	services
		.decodeToken(token)
		.then((response) => {
			req.user = response;
			next();
		})
		.catch((response) => {
			res.status(response.status);
		});
}

module.exports = isAuth;


*/