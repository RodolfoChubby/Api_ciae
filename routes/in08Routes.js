const express = require('express');
const router = express.Router();
const in08Routes = require('../controllers/in08Controller');

// Ruta para visualizar todos los registros
router.get('/', in08Routes.getAll);

// Ruta para visualizar un registro mediante su identificador
router.get('/:id', in08Routes.getById);

// Ruta para crear un nuevo registro
router.post('/', in08Routes.create);

// Ruta para actaulizar un registro existente
router.put('/:id', in08Routes.update);

// Ruta para eliminar un registro
router.delete('/:id', in08Routes.delete);

module.exports = router;