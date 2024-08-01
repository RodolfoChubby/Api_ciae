const express = require('express');
const router = express.Router();
const consultExtController = require('../controllers/consultExtController');

// Ruta para visualizar todos los registros
router.get('/', consultExtController.getAllConsultExt);

// Ruta para visualizar un solo registro con su identificador
router.get('/:id', consultExtController.getConsultExtById);

// Ruta para crear un nuevo registro
router.post('/', consultExtController.createConsultExt);

// Ruta para actualizar un registro ya existente
router.put('/:id', consultExtController.updateConsultExt);

// Ruta para eliminar un registro ya existente
router.delete('/:id', consultExtController.deleteConsultExt);

module.exports = router;
