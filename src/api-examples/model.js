/*

MODELO DE USUARIO

const mongoose = require('mongoose');

const { Schema } = mongoose;

/**
 * Tipos (campo 'tipo'):
 * - Admin (Administrador)
 *   Acceso universal
 * - AdminV (Administrador Vacante)
 *   Puede administrar vacantes, procesos y postulados
 * - UsuarioR (Usuario Recurso)
 *   Evaluaciones, perfil y tutoriales
 * - UsuarioP (Usuario postulado)
 *   Evaluaciones, perfil, proceso de selección y tutorial
 

const fields = {
	agreement: {
		type: Boolean,
		default: false,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	nombre: {
		type: String,
		required: true,
	},
	apellido: {
		type: String,
		required: true,
	},
	contra: {
		type: String,
		required: true,
	},
	grupo: {
		type: String,
		required: true,
	},
	tipo: {
		type: String,
		default: 'Admin',
		required: true,
	},
	evaluador: {
		type: String,
		default: '',
	},
	isVerified: {
		type: Boolean,
		default: false,
	},
	passwordResetToken: {
		type: String,
	},
	passwordResetExpires: {
		type: String,
	},
	telefono: {
		type: String,
		default: '',
	},
	identificacion: {
		type: String,
		default: '',
	},
	direccion: {
		type: String,
		default: '',
	},
	cargo: {
		type: String,
		default: '',
	},
	HojadeVidaLink: {
		type: String,
		default: '',
	},
	idiomas: {
		type: Array,
		default: [],
	},
	tecnologias: {
		type: Array,
		default: [],
	},
	herramientas: {
		type: Array,
		default: [],
	},
	certificaciones: {
		type: Array,
		default: [],
	},
	experiencia: {
		type: String,
		default: '',
	},
	aspsalarial: {
		type: Number,
		default: 0,
	},
};

const user = new Schema(fields, { timestamps: true });

module.exports = {
	Model: mongoose.model('user', user),
	fields,
};

*/