const express = require('express');
const router = express.Router();
const diasTipicosController = require('../controllers/diasTipicosController');

// Ruta para visualizar todos los registros
router.get('/', diasTipicosController.getAllDiasTipicos);

// Ruta para visualizar un registro mediante su identificador
router.get('/:id', diasTipicosController.getDiasTipicosById);

// Ruta para crear un nuevo registro
router.post('/', diasTipicosController.createDiasTipicos);

// Ruta para actualizar un registro ya existente
router.put('/:id', diasTipicosController.updateDiasTipicos);

// Ruta para eliminar un registro mediante su id
router.delete('/:id', diasTipicosController.deleteDiasTipicos);

module.exports = router;