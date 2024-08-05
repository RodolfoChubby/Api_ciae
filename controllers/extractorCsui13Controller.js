const ExtractorCsui13 = require('../models/extractorCsui13');

// Obtener todos los registros
exports.getAllRegister = async (req, res) => {
    try {
        const records = await ExtractorCsui13.findAll();
        res.status(200).json(records);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Obtener un registro por ID
exports.getByIdRegister = async (req, res) => {
    try {
        const record = await ExtractorCsui13.findByPk(req.params.id);
        if (record) {
            res.status(200).json(record);
        } else {
            res.status(404).json({ message: 'Record not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Crear un nuevo registro
exports.createNewRegister = async (req, res) => {
    try {
        const newRecord = await ExtractorCsui13.create(req.body);
        res.status(201).json(newRecord);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Actualizar un registro por ID
exports.updateRegister = async (req, res) => {
    try {
        const [updated] = await ExtractorCsui13.update(req.body, {
            where: { id_extractorcsui13: req.params.id }
        });
        if (updated) {
            const updatedRecord = await ExtractorCsui13.findByPk(req.params.id);
            res.status(200).json(updatedRecord);
        } else {
            res.status(404).json({ message: 'Record not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Eliminar un registro por ID
exports.deleteRegister = async (req, res) => {
    try {
        const deleted = await ExtractorCsui13.destroy({
            where: { id_extractorcsui13: req.params.id }
        });
        if (deleted) {
            res.status(200).json({ message: 'Registro eliminado correctamente' });
        } else {
            res.status(404).json({ message: 'Record not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};