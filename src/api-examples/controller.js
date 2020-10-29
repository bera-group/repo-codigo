/*

CONTROLADOR DE USUARIO

const bcrypt = require('bcrypt');
const { Model } = require('./model');
const chalk = require('chalk');
const log = console.log;
const service = require('../../../services');

exports.all = (req, res, next) => {
	Model.find()
		.then((users) => {
			res.send(users);
		})
		.catch((err) => {
			res.status(500).send({
				message: err.message || 'Some error occurred while retrieving notes.',
			});
		});
};

exports.getUsersBy = (req, res, next) => {
	const { filters } = req.query;
	var filtersJSON = JSON.parse(filters);
	const query = {};

	if (Object.keys(filtersJSON).length !== 0) {
		const validatedFilters = {};

		for (prop in filtersJSON) {
			if (Array.isArray(filtersJSON[prop]) && filtersJSON[prop].length > 0) {
				validatedFilters[prop] = filtersJSON[prop];
			} else if (!Array.isArray(filtersJSON[prop]) && !!filtersJSON[prop]) {
				validatedFilters[prop] = filtersJSON[prop];
			}
		}

		for (prop in validatedFilters) {
			switch (prop) {
				case 'tipo': {
					query['tipo'] = validatedFilters[prop];
					break;
				}
				case 'herramientas': {
					query['herramientas'] = { $in: validatedFilters[prop] };
					break;
				}
				case 'tecnologias': {
					query['tecnologias'] = { $in: validatedFilters[prop] };
					break;
				}
				case 'experiencia': {
					query['experiencia'] = validatedFilters[prop];
					break;
				}
				case 'certificaciones': {
					query['certificaciones'] = { $in: validatedFilters[prop] };
					break;
				}
				case 'aspsalarial': {
					var res;
					if (validatedFilters[prop].includes('1')) {
						var rangominimo = 900000;
						var rangomaximo = 1600000;
						query['aspsalarial'] = { $gte: rangominimo, $lte: rangomaximo };
					}
					if (validatedFilters[prop].includes('2')) {
						var rangomaximo = 340000;
						query['aspsalarial'] = { $lte: rangomaximo };
					}
					if (validatedFilters[prop].includes('3')) {
						var rangomaximo = 440000;
						query['aspsalarial'] = { $lte: rangomaximo };
					}

					//query['aspsalarial'] = validatedFilters[prop]; //AQUI CAMBIAS LA REQUESTA A > O < SALARIO
					break;
				}
				case 'idiomas': {
					query['idiomas'] = { $in: validatedFilters[prop] };
					break;
				}
				default: {
					console.log('Case switch?');
					break;
				}
			}
		}
	}

	//console.log('query', query);
	Model.find(query)
		.then((filteredusers) => {
			res.status(201).send(filteredusers);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).send({ msg: 'Error while obtaining filtered users', error: err });
		});
};

// Login
exports.verify = (req, res, next) => {
	const { email, contraseña } = req.body;
	console.log('body', req.body);
	Model.find({ email: email })
		.then((users) => {
			console.log('llego correo', users);
			if (!!users.length) {
				const user = users[0];

				const passwordChecked = bcrypt.compareSync(contraseña, user.contra);

				user.contra = null;
				res.json({
					verified: passwordChecked,
					status: 200,
					token: service.createToken(passwordChecked ? user : null),
				});
			} else {
				log(chalk.red.bold('Ingreso fallido porque el usuario no existe.'));
				res.json({
					verified: false,
					status: 401,
				});
			}
		})
		.catch((err) => {
			next(new Error(err));
		});
};
exports.verifyemail = async (req, res, next) => {
	const { email } = req.body;
	Model.find({ email: email })
		.then((users) => {
			if (!!users.length) {
				res.json({
					exist: true,
					status: 200,
				});
			} else {
				res.json({
					exist: false,
					status: 200,
				});
			}
		})
		.catch((err) => {
			next(new Error(err));
		});
};
exports.signUp = async (req, res, next) => {
	const user = req.body;
	const userWithEncryptPass = Object.assign(user, {
		contra: bcrypt.hashSync(user.contra, 10),
	});

	var document = new Model(userWithEncryptPass);

	try {
		var doc = await document.save();
		res.status(201);
		res.json({
			success: true,
			data: doc,
		});
	} catch (err) {
		console.log('err', err);
		next(new Error(err));
	}
};

exports.updateUserById = (req, res, next) => {
	const updatedInfo = req.body;

	const updatedUserInfo = {};

	for (prop in updatedInfo) {
		if (updatedInfo[prop] && prop !== 'id') {
			updatedUserInfo[prop] = updatedInfo[prop];
		}
	}

	Model.findById({ _id: updatedInfo.id })
		.then((user) => {
			return Object.assign(user, updatedUserInfo);
		})
		.then((user) => {
			return user.save();
		})
		.then((updatedUser) => {
			res.status(200).send({
				msg: 'User information successfully updated',
				updatedUser,
			});
		})
		.catch((err) => {
			res.status(500).send({
				message: err.message || 'Some error occurred while updating user information.',
			});
			console.log(err);
		});
};

exports.changePassword = (req, res, next) => {
	const { body } = req;
	const { id, newPassword } = body;

	const encryptedPassword = bcrypt.hashSync(newPassword, 10);

	Model.findById(id)
		.then((user) => {
			return Object.assign(user, { contra: encryptedPassword });
		})
		.then((user) => {
			return user.save();
		})
		.then((updatedUser) => {
			res.status(200).send({
				msg: 'User information successfully updated',
				updatedUser,
			});
		})
		.catch((err) => {
			res.status(500).send({
				message: err.message || 'Some error occurred while deleting questions.',
			});
			console.log(err);
		});
};

exports.Uploadcv = (req, res, next) => {
	//revisamos si el archivo es nulo
	if (req.files === null) {
		return res.status(400).json({ msg: 'No file uploaded' });
	}
	//obtenemos el archivo, el id del usuario y la url del archivo
	const file = req.files.file;
	const id = req.body.id;
	const url = req.body.url;

	console.log('file ' + file);
	//movemos el archivo a el servidor con la url

	Model.findById(id)
		.then((user) => {
			//rectificamos si el usuario tiene un pdf existente , de ser así borramos el anterior y añadimos el nuevo
			if (user.HojadeVidaLink && user.HojadeVidaLink != url) {
				console.log('cambiar por un actualizado');
			}
			return Object.assign(user, { HojadeVidaLink: url });
		})
		.then((user) => {
			//guardamos en la db el link del archivo en el servidor
			return user.save();
		})
		.catch((err) => {
			res.status(500).send({
				message: err.message || 'Some error occurred.',
			});
			console.log(err);
		});
	res.json({ fileName: file.name, filePath: url });
};

exports.downloadcvById = (req, res, next) => {
	const params = req.query;

	Model.find({ _id: params.id })
		.then((userDetails) => {
			var url = userDetails[0].HojadeVidaLink;
			console.log(url);
			if (url) {
				res.status(201).send(url);
			}
		})
		.catch((err) => {
			res.status(500).send({
				message: err.message || 'Some error occurred while looking for cv...',
			});
		});
};

exports.deleteUserById = (req, res, next) => {
	const params = req.query;
	Model.findByIdAndDelete({ _id: params.id })
		.then((deletedUser) => {
			res.status(201).send({ 'Successfully deleted. Details: ': deletedUser });
		})
		.catch((err) => {
			res.status(500).send({
				message: err.message || 'Some error occurred while deleting user.',
			});
		});
};

// 	Method to get an user info using the _id
exports.getUser = (req, res, next) => {
	const params = req.query;

	Model.findById({ _id: params.id })
		.select('-contra -passwordResetToken -passwordResetExpires')
		.then((user) => {
			res.status(201).json(user);
		})
		.catch((err) => {
			res.status(500).send({
				message: err.message || 'Some error occurred while deleting user.',
			});
		});
};

*/