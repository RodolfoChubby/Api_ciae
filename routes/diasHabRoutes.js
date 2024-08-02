const express = require('express');
const router = express.Router();
const diasHabController = require('../controllers/diasHabController');

// Ruta para visualizar todos los registros
router.get('/', diasHabController.getAllDiasHab);

// Ruta para visualizar un registro mediante su identificador
router.get('/:id', diasHabController.getDiasHabById);

// Ruta para crear un nuevo registro
router.post('/', diasHabController.createDiasHab);

// Ruta para actualizar un registro ya existente
router.put('/:id', diasHabController.updateDiasHab);

// Ruta para eliminar un registro mediante su id
router.delete('/:id', diasHabController.deleteDiasHab);

module.exports = router;