const express = require('express');
const router = express.Router();
const extractorCegrnacController = require('../controllers/extractorCegrnacController');

// Ruta para visualizar todos los registros
router.get('/', extractorCegrnacController.getAllExtractorCegrnac);

// Ruta para visualizar un registro mediante su identificador
router.get('/:id', extractorCegrnacController.getExtractorCegrnacById);

// Ruta para crear un nuevo registro
router.post('/', extractorCegrnacController.createExtractorCegrnac);

// Ruta para actualizar un registro ya existente
router.put('/:id', extractorCegrnacController.updateExtractorCegrnac);

// Ruta para eliminar un registro mediante su id
router.delete('/:id', extractorCegrnacController.deleteExtractorCegrnac);

module.exports = router;