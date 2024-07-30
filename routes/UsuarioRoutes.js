const express = require('express');
const router = express.Router();
const UsuarioController = require('../controllers/UsuarioController');

// Ruta para visualizar todos los usuarios
router.get('/', UsuarioController.getUsuario);

// Ruta para visualizar un usuario con su ID
router.get('/:id', UsuarioController.getUsuarioById);

// Ruta para crear un nuevo usuario
router.post('/', UsuarioController.createUsuario);

// Ruta para eliminar un usuario
router.delete('/:id', UsuarioController.deleteUsuario);

module.exports = router;
