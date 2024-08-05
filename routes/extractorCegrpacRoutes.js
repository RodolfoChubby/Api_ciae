const express = require('express');
const router = express.Router();
const extractorCegrpacController = require('../controllers/extractorCegrpacController');

// Ruta para visualizar todos los registros
router.get('/', extractorCegrpacController.getAllRecords);

// Ruta para visualizar un registro mediante su identificador
router.get('/:id', extractorCegrpacController.getRecordById);

// Ruta para crear un nuevo registro
router.post('/', extractorCegrpacController.createRecord),

// Ruta para actaulizar un registro existente
router.put('/:id', extractorCegrpacController.updateRecord);

// Ruta para eliminar un registro
router.delete('/:id', extractorCegrpacController.deleteExtractorCegrpac);

module.exports = router;