const express = require('express');
const router = express.Router();
const censoDmehUnidadesController = require('../controllers/censoDmehUnidadesController');

// Ruta para visualizar los Censos
router.get('/', censoDmehUnidadesController.getCensoDmehUnidades);

//Ruta para visualizar un censo en base a su identificador
router.get('/:id', censoDmehUnidadesController.getCensoDmehUnidadById);

// Ruta para crear un nuevo censo
router.post('/', censoDmehUnidadesController.createCensoDmehUnidad);

// Ruta para actualizar un censo ya existente
router.put('/:id', censoDmehUnidadesController.updateCensoDmehUnidades);

// Ruta para eliminar un censo ya existente
router.delete('/:id', censoDmehUnidadesController.deleteCensoDmehUnidades);

module.exports = router;
