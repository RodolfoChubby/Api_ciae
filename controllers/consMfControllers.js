const ConsMf = require('../models/consMf');

// Obtener todos los registros
exports.getAllConsMf = async (req, res) => {
    try {
        const consMfRecords = await ConsMf.findAll();
        res.status(200).json(consMfRecords);
    } catch (error) {
        console.error('Error al obtener los registros:', error);
        res.status(500).json({ message: 'Error al obtener los registros', error });
    }
};

// Obtener un registro por ID
exports.getConsMfById = async (req, res) => {
    const { id } = req.params;

    try {
        const consMfRecord = await ConsMf.findByPk(id);
        if (!consMfRecord) {
            return res.status(404).json({ message: 'Registro no encontrado' });
        }
        res.status(200).json(consMfRecord);
    } catch (error) {
        console.error('Error al obtener el registro:', error);
        res.status(500).json({ message: 'Error al obtener el registro', error });
    }
};

// Crear un nuevo registro
exports.createConsMf = async (req, res) => {
    const { cvePresupuestal, date, cons_mf } = req.body;

    // Validación de fecha
    let parsedDate;
    if (date) {
        if (date.length === 6) {
            // Formato YYYYMM
            const year = parseInt(date.substring(0, 4), 10);
            const month = parseInt(date.substring(4, 6), 10);
            parsedDate = new Date(year, month - 1, 1);
        } else {
            // Formato YYYY-MM-DD
            parsedDate = new Date(date);
        }
    }

    // Verificar que se hayan proporcionado todos los campos necesarios
    if (!cvePresupuestal || !date || cons_mf === undefined) {
        return res.status(400).json({
            message: 'Faltan campos requeridos'
        });
    }

    try {
        const newConsMf = await ConsMf.create({
            cvePresupuestal,
            date: parsedDate,
            cons_mf
        });
        res.status(201).json(newConsMf);
    } catch (error) {
        console.error('Error al crear el registro:', error);
        res.status(500).json({ message: 'Error al crear el registro', error });
    }
};


// Actualizar un registro existente
exports.updateConsMf = async (req, res) => {
    const { id } = req.params;
    const { cvePresupuestal, date, cons_mf } = req.body;

    // Validación de fecha
    let parsedDate;
    if (date) {
        if (date.length === 6) {
            // Formato YYYYMM
            const year = parseInt(date.substring(0, 4), 10);
            const month = parseInt(date.substring(4, 6), 10);
            parsedDate = new Date(year, month - 1, 1);
        } else {
            // Formato YYYY-MM-DD
            parsedDate = new Date(date);
        }
    }

    // Verificar que se hayan proporcionado todos los campos necesarios
    if (!cvePresupuestal || !date || cons_mf === undefined) {
        return res.status(400).json({
            message: 'Faltan campos requeridos'
        });
    }

    try {
        const consMfRecord = await ConsMf.findByPk(id);
        if (!consMfRecord) {
            return res.status(404).json({ message: 'Registro no encontrado' });
        }

        const updatedConsMf = await consMfRecord.update({
            cvePresupuestal,
            date: parsedDate,
            cons_mf
        });
        res.status(200).json(updatedConsMf);
    } catch (error) {
        console.error('Error al actualizar el registro:', error);
        res.status(500).json({ message: 'Error al actualizar el registro', error });
    }
};


// Eliminar un registro
exports.deleteConsMf = async (req, res) => {
    const { id } = req.params;

    try {
        const consMfRecord = await ConsMf.findByPk(id);
        if (!consMfRecord) {
            return res.status(404).json({ message: 'Registro no encontrado' });
        }

        await consMfRecord.destroy();
        res.status(200).json({ message: 'Registro eliminado con éxito' });
    } catch (error) {
        console.error('Error al eliminar el registro:', error);
        res.status(500).json({ message: 'Error al eliminar el registro', error });
    }
};
