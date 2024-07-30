const express = require('express');
const router = express.Router();
const baseEfeController = require('../controllers/baseefeController');

// Ruta para obtener todos los registros
router.get('/', baseEfeController.getAllBaseEfe);

// Ruta para obtener una base por su identificador
router.get('/:id', baseEfeController.getBaseEfeById);

// Ruta para crear una nueva bse
router.post('/', baseEfeController.createBaseEfe);

// Ruta para eliminar una base
router.delete('/:id', baseEfeController.deleteBaseEfe);

// Ruta para modificar una base
router.put('/:id', baseEfeController.updateBaseEfe);

module.exports = router;
