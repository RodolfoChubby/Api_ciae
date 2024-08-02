const express = require('express');
const router = express.Router();
const defuncionesController = require('../controllers/defuncionesController');

// Ruta para visualizar todos los registros
router.get('/', defuncionesController.getAllDefunciones);

// Ruta para visualizar un registro mediante su identificador
router.get('/:id', defuncionesController.getDefuncionesById);

// Ruta para crear un nuevo registro
router.post('/', defuncionesController.createDefuncion);

// Ruta para actualizar un registro ya existente
router.put('/:id', defuncionesController.updateDefuncion);

// Ruta para eliminar un registro ya existente
router.delete('/:id', defuncionesController.deleteDefuncion);

module.exports = router;