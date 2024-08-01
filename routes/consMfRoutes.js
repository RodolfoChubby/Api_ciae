const express = require('express');
const router = express.Router();
const consMfController = require('../controllers/consMfControllers');

// Ruta para visualizar todos los registros
router.get('/', consMfController.getAllConsMf);

// Ruta para visualizar un solo registro con su identificador
router.get('/:id', consMfController.getConsMfById);

// Ruta para crear un nuevo registro
router.post('/', consMfController.createConsMf);

// Ruta para actualizar un registro ya existente
router.put('/:id', consMfController.updateConsMf);

// Ruta para eliminar un registro ya existente
router.delete('/:id', consMfController.deleteConsMf);

module.exports = router;
