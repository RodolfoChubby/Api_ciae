// routes/baseCusn11Routes.js
const express = require('express');
const router = express.Router();
const baseCusn11Controller = require('../controllers/baseCusn11Controller');

// Ruta para visualizar la basecusn11
router.get('/', baseCusn11Controller.getBaseCusn11Data);

//Ruta para visualizar una basecusn11 mediante su id
router.get('/:id', baseCusn11Controller.getBaseCusn11ById)

// Ruta para crear una nueva basecusn11
router.post('/', baseCusn11Controller.createBaseCusn11);

// Ruta para eliminar una basecusn11
router.delete('/:id', baseCusn11Controller.deleteBaseCusn11)

module.exports = router;
