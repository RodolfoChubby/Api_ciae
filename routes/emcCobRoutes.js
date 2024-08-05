const express = require('express');
const router = express.Router();
const emcCobController = require('../controllers/emcCobController');

// Ruta para visualizar todos los registros
router.get('/', emcCobController.getAllEmcCobs);

//Ruta para visualizar un solo registro mediante su identificador
router.get('/:id', emcCobController.getEmcCobById);

// Ruta para crear un nuevo registro
router.post('/', emcCobController.createEmcCob);

// Ruta para actualizar un registro ya existente
router.put('/:id', emcCobController.updateEmcCob);

//Ruta para eliminar un registro ya existente
router.delete('/:id', emcCobController.deleteEmcCob);

module.exports = router;