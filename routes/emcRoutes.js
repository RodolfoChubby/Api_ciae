const express = require('express');
const router = express.Router();
const emcController = require('../controllers/emcController');

// Ruta para visualizar todos los registros
router.get('/', emcController.getAllEmc);

// Ruta para visualizar un registro mediante su identificador
router.get('/:id', emcController.getEmcById);

// Ruta para crear un nuevo registro
router.post('/', emcController.createEmc);

// Ruta para actualizar un registro ya existente
router.put('/:id', emcController.updateEmc);

// Ruta para eliminar un registro mediante su id
router.delete('/:id', emcController.deleteEmc);

module.exports = router;