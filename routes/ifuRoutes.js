const express = require('express');
const router = express.Router();
const ifuController = require('../controllers/ifuController');

// Ruta para visualizar todos los registros
router.get('/', ifuController.getAll);

// Ruta para visualizar un solo registro mediante su id
router.get('/:id', ifuController.getById);

//Ruta para crear un nuevo registro
router.post('/', ifuController.create);

// Ruta para actualizar un registro existente
router.put('/:id', ifuController.update);

// Ruta para eliminar un metodo ya existente
router.delete('/:id', ifuController.delete);

module.exports = router;