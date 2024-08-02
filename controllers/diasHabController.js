const DiasHab = require('../models/diasHab');

// Controlador para obtener todos los registros
exports.getAllDiasHab = async (req, res) => {
    try {
        const diasHabRecords = await DiasHab.findAll();
        res.status(200).json(diasHabRecords);
    } catch (error) {
        console.error('Error al obtener los registros:', error);
        res.status(500).json({ message: 'Error al obtener los registros', error });
    }
};

// Controlador para obtener un registro por su ID
exports.getDiasHabById = async (req, res) => {
    const { id } = req.params;

    try {
        const diasHabRecord = await DiasHab.findByPk(id);

        if (!diasHabRecord) {
            return res.status(404).json({ message: 'Registro no encontrado' });
        }

        res.status(200).json(diasHabRecord);
    } catch (error) {
        console.error('Error al obtener el registro:', error);
        res.status(500).json({ message: 'Error al obtener el registro', error });
    }
};

// Controlador para crear un nuevo registro
exports.createDiasHab = async (req, res) => {
    const { date, dias_hab_acum, dias_cal_acum, dias_hab, dias_cal, dias_fin } = req.body;

    // Validación de fecha
    let parsedDate;
    if (date) {
        parsedDate = new Date(date);
        if (isNaN(parsedDate.getTime())) {
            return res.status(400).json({ message: 'Fecha inválida' });
        }
    } else {
        return res.status(400).json({ message: 'Falta la fecha' });
    }

    // Verificar que se hayan proporcionado todos los campos necesarios
    if (!date) {
        return res.status(400).json({ message: 'Falta la fecha' });
    }

    try {
        const newDiasHab = await DiasHab.create({
            date: parsedDate,
            dias_hab_acum,
            dias_cal_acum,
            dias_hab,
            dias_cal,
            dias_fin
        });

        res.status(201).json(newDiasHab);
    } catch (error) {
        console.error('Error al crear el registro:', error);
        res.status(500).json({ message: 'Error al crear el registro', error });
    }
};

// Controlador para actualizar un registro
exports.updateDiasHab = async (req, res) => {
    const { id } = req.params;
    const { date, dias_hab_acum, dias_cal_acum, dias_hab, dias_cal, dias_fin } = req.body;

    // Validación de fecha
    let parsedDate;
    if (date) {
        parsedDate = new Date(date);
        if (isNaN(parsedDate.getTime())) {
            return res.status(400).json({ message: 'Fecha inválida' });
        }
    } else {
        return res.status(400).json({ message: 'Falta la fecha' });
    }

    // Verificar que se hayan proporcionado todos los campos necesarios
    if (!date) {
        return res.status(400).json({ message: 'Falta la fecha' });
    }

    try {
        const diasHabRecord = await DiasHab.findByPk(id);

        if (!diasHabRecord) {
            return res.status(404).json({ message: 'Registro no encontrado' });
        }

        const updatedDiasHab = await diasHabRecord.update({
            date: parsedDate,
            dias_hab_acum,
            dias_cal_acum,
            dias_hab,
            dias_cal,
            dias_fin
        });

        res.status(200).json(updatedDiasHab);
    } catch (error) {
        console.error('Error al actualizar el registro:', error);
        res.status(500).json({ message: 'Error al actualizar el registro', error });
    }
};

// Controlador para eliminar un registro
exports.deleteDiasHab = async (req, res) => {
    const { id } = req.params;

    try {
        const diasHabRecord = await DiasHab.findByPk(id);

        if (!diasHabRecord) {
            return res.status(404).json({ message: 'Registro no encontrado' });
        }

        await diasHabRecord.destroy();
        res.status(200).json({ message: 'Registro eliminado con éxito' });
    } catch (error) {
        console.error('Error al eliminar el registro:', error);
        res.status(500).json({ message: 'Error al eliminar el registro', error });
    }
};
