const express = require('express');
const router = express.Router();
const extractorCsui13Routes = require('../controllers/extractorCsui13Controller');

// Ruta para visualizar todos los registros
router.get('/', extractorCsui13Routes.getAllRegister);

// Ruta para visualizar un registro mediante su identificador
router.get('/:id', extractorCsui13Routes.getByIdRegister);

// Ruta para crear un nuevo registro
router.post('/', extractorCsui13Routes.createNewRegister),

// Ruta para actaulizar un registro existente
router.put('/:id', extractorCsui13Routes.updateRegister);

// Ruta para eliminar un registro
router.delete('/:id', extractorCsui13Routes.deleteRegister);

module.exports = router;