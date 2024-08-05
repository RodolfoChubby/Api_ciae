const express = require('express');
const router = express.Router();
const diasPaciente = require('../controllers/diasPacienteController');

// Ruta para visualizar todos los registros
router.get('/', diasPaciente.getAllDiasPaciente);

// Ruta para visualizar un registro mediante su identificador
router.get('/:id', diasPaciente.getDiasPacienteById);

// Ruta para crear un nuevo registro
router.post('/', diasPaciente.createDiasPaciente);

// Ruta para actualizar un registro ya existente
router.put('/:id', diasPaciente.updateDiasPaciente);

// Ruta para eliminar un registro mediante su id
router.delete('/:id', diasPaciente.deleteDiasPaciente);

module.exports = router;