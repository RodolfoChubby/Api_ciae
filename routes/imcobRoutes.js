const express = require('express');
const router = express.Router();
const imcobController = require('../controllers/imcobController');

// Ruta para visualizar todos los registros
router.get('/', imcobController.getAll);

// Ruta para visualizar solo un registro mediante su id
router.get('/:id', imcobController.getById);

// Ruta para crear un nuevo registro
router.post('/', imcobController.create);

// Ruta para actualizar un registro ya existente
router.put('/:id', imcobController.update);

// Ruta para eliminar un registro mediante du id
router.delete('/:id', imcobController.deleteRecord);

module.exports = router;