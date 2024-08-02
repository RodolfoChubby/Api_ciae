const express = require('express');
const router = express.Router();
const cp04Controller = require('../controllers/cp04Controller');

// Ruta para visualizar todos los registros
router.get('/', cp04Controller.getAllCp04);

//Ruta para visualizar un registro mediante su identificador
router.get('/:id', cp04Controller.getCp04ById);

//Ruta para crear un nuevo registro
router.post('/', cp04Controller.createCp04);

// Ruta para actualizar un registro existente
router.put('/:id', cp04Controller.updateCp04);

// Ruta para eliminar un registr mediante su identificador
router.delete('/:id', cp04Controller.deleteCp04);

module.exports = router;