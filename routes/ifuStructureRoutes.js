const express = require('express');
const router = express.Router();
const ifuStructureController = require('../controllers/ifuStructureController');

// Ruta para visualizar todos los registros
router.get('/', ifuStructureController.getAll);

// Ruta para visualizar solo un registro mediante su id
router.get('/:id', ifuStructureController.getById);

// Ruta para crear un nuevo registro
router.post('/', ifuStructureController.create);

// Ruta para actualizar un registro ya existente
router.put('/:id', ifuStructureController.update);

// Ruta para eliminar un registro mediante du id
router.delete('/:id', ifuStructureController.deleteRecord);

module.exports = router;