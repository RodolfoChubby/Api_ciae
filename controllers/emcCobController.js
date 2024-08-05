const EmcCob  = require('../models/emcCob');

// Método para obtener todos los registros
exports.getAllEmcCobs = async (req, res) => {
    try {
        const emcCobs = await EmcCob.findAll();

        res.status(200).json(emcCobs);
    } catch (error) {
        console.error('Error al obtener los registros:', error);
        res.status(500).json({ message: 'Error al obtener los registros.' });
    }
};

// Método para obtener un registro por ID
exports.getEmcCobById = async (req, res) => {
    const { id } = req.params;

    try {
        const emcCob = await EmcCob.findByPk(id);

        if (!emcCob) {
            return res.status(404).json({ message: 'Registro no encontrado.' });
        }

        res.status(200).json(emcCob);
    } catch (error) {
        console.error('Error al obtener el registro por ID:', error);
        res.status(500).json({ message: 'Error al obtener el registro por ID.' });
    }
};

// Método para crear un nuevo registro
exports.createEmcCob = async (req, res) => {
    try {
        const newEmcCob = await EmcCob.create(req.body);
        res.status(201).json(newEmcCob);
    } catch (error) {
        console.error('Error al crear el registro:', error);
        res.status(500).json({ message: 'Error al crear el registro.' });
    }
};

// Controlador para actualizar un registro existente
exports.updateEmcCob = async (req, res) => {
    const { id } = req.params;
    try {
        const [updated] = await EmcCob.update(req.body, {
            where: { id_emc_cob: id }
        });
        if (!updated) {
            return res.status(404).json({ message: 'Registro no encontrado' });
        }
        const updatedEmcCob = await EmcCob.findByPk(id);
        res.status(200).json(updatedEmcCob);
    } catch (error) {
        console.error('Error al actualizar el registro:', error);
        res.status(500).json({ message: 'Error al actualizar el registro' });
    }
};

// Método para eliminar un registro por ID
exports.deleteEmcCob = async (req, res) => {
    const { id } = req.params;

    try {
        const deleted = await EmcCob.destroy({
            where: { id_emc_cob: id },
        });

        if (deleted) {
            res.status(200).json({ message: 'Registro eliminado correctamente' });
        } else {
            res.status(404).json({ message: 'Registro no encontrado.' });
        }
    } catch (error) {
        console.error('Error al eliminar el registro:', error);
        res.status(500).json({ message: 'Error al eliminar el registro.' });
    }
};
