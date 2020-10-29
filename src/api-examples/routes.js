/*

RUTAS DE USUARIO

const router = require('express').Router();
const auth = require('../../../middlewares/auth');
const controller = require('./controller');

router.use(function (res, req, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	next();
});

/*
 *  /api/users/ POST - Creacion de usuario
 *  /api/users/:email/:password POST - Autenticación de usuario
 

router.route('/').get(auth, controller.all);

router.route('/ingreso').post(controller.verify);
router.route('/verifyemail').post(auth, controller.verifyemail);
router.route('/registro').post(auth, controller.signUp);
router.route('/getUsers').get(auth, controller.getUsersBy);
router.route('/deleteUserById').delete(auth, controller.deleteUserById);
router.route('/updateUserInfoById').put(auth, controller.updateUserById);
router.route('/changePassword').post(auth, controller.changePassword);
router.route('/hojasdevida').post(auth, controller.Uploadcv);
router.route('/obtenercv').get(auth, controller.downloadcvById);
router.route('/getUser').get(auth, controller.getUser);

router.route('/private').get(auth, function (req, res) {
	res.status(200).send({ message: 'Tienes acceso' });
});
module.exports = router;

*/