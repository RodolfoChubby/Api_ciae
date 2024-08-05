const express = require('express');
const router = express.Router();
const egresosController = require('../controllers/egresosController');

// Ruta para visualizar todos los registros
router.get('/', egresosController.getAllEgresos);

// Ruta para visualizar un registro mediante su identificador
router.get('/:id', egresosController.getEgresosById);

// Ruta para crear un nuevo registro
router.post('/', egresosController.createEgresos);

// Ruta para actualizar un registro ya existente
router.put('/:id', egresosController.updateEgresos);

// Ruta para eliminar un registro mediante su id
router.delete('/:id', egresosController.deleteEgresos);

module.exports = router;