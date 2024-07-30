const express = require('express');
const router = express.Router();
const CensoDmehController = require('../controllers/CensoDmehController');

// Ruta para visualizar registros
router.get('/', CensoDmehController.getCensoDmeh);

// Ruta para visualizar un censo por su id
router.get('/:id', CensoDmehController.getCensoDmehById);

// Ruta para crear un nuevo censo
router.post('/', CensoDmehController.createCensoDmeh);

// Ruta para eliminar un censo
router.delete('/:id', CensoDmehController.deleteCensoDmeh);

module.exports = router;
