const express = require('express');
const router = express.Router();
const unidadesController = require('../controllers/unidadesController'); 

// Ruta para visualizar todas las unidades
router.get('/', unidadesController.getUnidad);

// Ruta para visualizar una unidad por su clave presupuestal
router.get('/:id', unidadesController.getUnidadById);

// Ruta para crear una nueva unidad
router.post('/', unidadesController.createUnidades);

// Ruta para marcar una unidad como eliminada (ocultar)
router.patch('/:id/disguise', unidadesController.disguiseUnidad);

// Ruta para eliminar físicamente una unidad
router.delete('/:id', unidadesController.deleteUnidad);

// Ruta para actualizar una unidad
router.put('/:id', unidadesController.updateUnidad);

module.exports = router;
