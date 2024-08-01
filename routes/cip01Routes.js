const express = require('express');
const router = express.Router();
const cp01Controller = require('../controllers/cip01Controller');

// Ruta para visualizar todos los registros
router.get('/', cp01Controller.getAllCip01);

// Ruta para visualizar un solo registro con su identificador
router.get('/:id', cp01Controller.getCip01ById);

//ruta para crear un nuevo registro
router.post('/', cp01Controller.createCip01);

// Ruta para actualizar un registro ya existente
router.put('/:id', cp01Controller.updateCip01);

// Ruta para eliminar un registro ya existente
router.delete('/:id', cp01Controller.deleteCip01);

module.exports = router;