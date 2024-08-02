const express = require('express');
const router = express.Router();
const defuncionesAuxController = require('../controllers/defuncionesAuxControllers');

// Ruta para visualizar todos los registros
router.get('/', defuncionesAuxController.getAllDefuncionesAux);

// Ruta para visualizar un registro mediante su identificador
router.get('/:id', defuncionesAuxController.getDefuncionesAuxById);

// Ruta para crear un nuevo registro
router.post('/', defuncionesAuxController.createDefuncionAux);

// Ruta para modificar un registro ya existente mediante su identificador
router.put('/:id', defuncionesAuxController.updateDefuncionAux);

// Ruta para eliminar un registro ya existente
router.delete('/:id', defuncionesAuxController.deleteDefuncionAux);

module.exports = router;