const Emc = require('../models/emc');

// Controlador para obtener todos los registros
exports.getAllEmc = async (req, res) => {
    try {
        const emcs = await Emc.findAll();
        res.status(200).json(emcs);
    } catch (error) {
        console.error('Error al obtener los registros:', error);
        res.status(500).json({ message: 'Error al obtener los registros' });
    }
};

// Controlador para obtener un registro por ID
exports.getEmcById = async (req, res) => {
    const { id } = req.params;
    try {
        const emc = await Emc.findByPk(id);
        if (!emc) {
            return res.status(404).json({ message: 'Registro no encontrado' });
        }
        res.status(200).json(emc);
    } catch (error) {
        console.error('Error al obtener el registro:', error);
        res.status(500).json({ message: 'Error al obtener el registro' });
    }
};

// Controlador para crear un nuevo registro
exports.createEmc = async (req, res) => {
    try {
        const emc = await Emc.create(req.body);
        res.status(201).json(emc);
    } catch (error) {
        console.error('Error al crear el registro:', error);
        res.status(500).json({ message: 'Error al crear el registro' });
    }
};

// Controlador para actualizar un registro existente
exports.updateEmc = async (req, res) => {
    const { id } = req.params;
    try {
        const [updated] = await Emc.update(req.body, {
            where: { id_emc: id }
        });
        if (!updated) {
            return res.status(404).json({ message: 'Registro no encontrado' });
        }
        const updatedEmc = await Emc.findByPk(id);
        res.status(200).json(updatedEmc);
    } catch (error) {
        console.error('Error al actualizar el registro:', error);
        res.status(500).json({ message: 'Error al actualizar el registro' });
    }
};

// Controlador para eliminar un registro por ID
exports.deleteEmc = async (req, res) => {
    const { id } = req.params;
    try {
        const emc = await Emc.findByPk(id);
        if (!emc) {
            return res.status(404).json({ message: 'Registro no encontrado' });
        }
        await emc.destroy();
        res.status(200).json({ message: 'Registro eliminado correctamente' });
    } catch (error) {
        console.error('Error al eliminar el registro:', error);
        res.status(500).json({ message: 'Error al eliminar el registro' });
    }
};
