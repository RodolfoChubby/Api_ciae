const ConsultExt = require('../models/consultExt');

// Obtener todos los registros
exports.getAllConsultExt = async (req, res) => {
    try {
        const consultExtRecords = await ConsultExt.findAll();
        res.json(consultExtRecords);
    } catch (error) {
        console.error('Error al obtener los registros:', error);
        res.status(500).json({ message: 'Error al obtener los registros', error });
    }
};

// Obtener un registro por su ID
exports.getConsultExtById = async (req, res) => {
    const { id } = req.params;
    try {
        const consultExtRecord = await ConsultExt.findByPk(id);
        if (!consultExtRecord) {
            return res.status(404).json({ message: 'Registro no encontrado' });
        }
        res.json(consultExtRecord);
    } catch (error) {
        console.error('Error al obtener el registro:', error);
        res.status(500).json({ message: 'Error al obtener el registro', error });
    }
};

// Crear un nuevo registro
exports.createConsultExt = async (req, res) => {
    const { cvePresupuestal, date, especialidades, paramedicas, urgencias, totales } = req.body;

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
    if (!cvePresupuestal || !date || especialidades === undefined || paramedicas === undefined || urgencias === undefined || totales === undefined) {
        return res.status(400).json({ message: 'Faltan campos requeridos' });
    }

    try {
        const newConsultExt = await ConsultExt.create({
            cvePresupuestal,
            date: parsedDate,
            especialidades,
            paramedicas,
            urgencias,
            totales
        });
        res.status(201).json(newConsultExt);
    } catch (error) {
        console.error('Error al crear el registro:', error);
        res.status(500).json({ message: 'Error al crear el registro', error });
    }
};

// Actualizar un registro existente
exports.updateConsultExt = async (req, res) => {
    const { id } = req.params;
    const { cvePresupuestal, date, especialidades, paramedicas, urgencias, totales } = req.body;

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
    if (!cvePresupuestal || !date || especialidades === undefined || paramedicas === undefined || urgencias === undefined || totales === undefined) {
        return res.status(400).json({ message: 'Faltan campos requeridos' });
    }

    try {
        const consultExtRecord = await ConsultExt.findByPk(id);
        if (!consultExtRecord) {
            return res.status(404).json({ message: 'Registro no encontrado' });
        }

        const updatedConsultExt = await consultExtRecord.update({
            cvePresupuestal,
            date: parsedDate,
            especialidades,
            paramedicas,
            urgencias,
            totales
        });
        res.status(200).json(updatedConsultExt);
    } catch (error) {
        console.error('Error al actualizar el registro:', error);
        res.status(500).json({ message: 'Error al actualizar el registro', error });
    }
};

// Eliminar un registro
exports.deleteConsultExt = async (req, res) => {
    const { id } = req.params;

    try {
        const consultExtRecord = await ConsultExt.findByPk(id);
        if (!consultExtRecord) {
            return res.status(404).json({ message: 'Registro no encontrado' });
        }

        await consultExtRecord.destroy();
        res.status(200).json({ message: 'Registro eliminado con éxito' });
    } catch (error) {
        console.error('Error al eliminar el registro:', error);
        res.status(500).json({ message: 'Error al eliminar el registro', error });
    }
};
