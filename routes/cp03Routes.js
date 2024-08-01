const express = require('express');
const router = express.Router();
const cp03Controller = require('../controllers/cp03Controller');

// Obtener todos los registros
router.get('/', cp03Controller.getAllCp03);

// Obtener un registro por ID
router.get('/:id', cp03Controller.getCp03ById);

// Crear un nuevo registro
router.post('/', cp03Controller.createCp03);

// Actualizar un registro existente
router.put('/:id', cp03Controller.updateCp03);

// Eliminar un registro existente
router.delete('/:id', cp03Controller.deleteCp03);

module.exports = router;
