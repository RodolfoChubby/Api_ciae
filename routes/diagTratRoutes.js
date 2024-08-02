const express = require('express');
const router = express.Router();
const diagTratController = require('../controllers/diagTratController');

// Ruta para visualizar todos los registros
router.get('/', diagTratController.getAllDiagTrat);

// Ruta para visualizar un registro mediante su identificador
router.get('/:id', diagTratController.getDiagTratById);

// Ruta para crear un nuevo registro
router.post('/', diagTratController.createDiagTrat);

// Ruta para actualizar un registro ya existente
router.put('/:id', diagTratController.updateDiagTrat);

// Ruta para eliminar un registro mediante su id
router.delete('/:id', diagTratController.deleteDiagTrat);

module.exports = router;