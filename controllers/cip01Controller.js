const Cip01 = require('../models/cip01');

// Controlador para obtener todos los registros
exports.getAllCip01 = async (req, res) => {
    try {
        const cip01Records = await Cip01.findAll();
        res.status(200).json(cip01Records);
    } catch (error) {
        console.error('Error al obtener los registros:', error);
        res.status(500).json({ message: 'Error al obtener los registros', error });
    }
};

// Controlador para obtener un registro por su ID
exports.getCip01ById = async (req, res) => {
    const { id } = req.params;

    try {
        const cip01Record = await Cip01.findByPk(id);

        if (!cip01Record) {
            return res.status(404).json({ message: 'Registro no encontrado' });
        }

        res.status(200).json(cip01Record);
    } catch (error) {
        console.error('Error al obtener el registro:', error);
        res.status(500).json({ message: 'Error al obtener el registro', error });
    }
};

// Controlador para crear un nuevo registro
exports.createCip01 = async (req, res) => {
    const { cvePresupuestal, date, pob_derhab, cob_derhab_aten_int_no, cob_derhab_aten_int_cip } = req.body;

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

    try {
        const newCip01 = await Cip01.create({
            cvePresupuestal,
            date: parsedDate,
            pob_derhab,
            cob_derhab_aten_int_no,
            cob_derhab_aten_int_cip
        });

        res.status(201).json(newCip01);
    } catch (error) {
        console.error('Error al crear el registro:', error);
        res.status(500).json({ message: 'Error al crear el registro', error });
    }
};

// Controlador para actualizar un registro
exports.updateCip01 = async (req, res) => {
    const { id } = req.params;
    const { cvePresupuestal, date, pob_derhab, cob_derhab_aten_int_no, cob_derhab_aten_int_cip } = req.body;

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

    try {
        const cip01Record = await Cip01.findByPk(id);

        if (!cip01Record) {
            return res.status(404).json({ message: 'Registro no encontrado' });
        }

        const updatedCip01 = await cip01Record.update({
            cvePresupuestal,
            date: parsedDate,
            pob_derhab,
            cob_derhab_aten_int_no,
            cob_derhab_aten_int_cip
        });

        res.status(200).json(updatedCip01);
    } catch (error) {
        console.error('Error al actualizar el registro:', error);
        res.status(500).json({ message: 'Error al actualizar el registro', error });
    }
};

// Controlador para eliminar un registro
exports.deleteCip01 = async (req, res) => {
    const { id } = req.params;

    try {
        const cip01Record = await Cip01.findByPk(id);

        if (!cip01Record) {
            return res.status(404).json({ message: 'Registro no encontrado' });
        }

        await cip01Record.destroy();
        res.status(200).json({ message: 'Registro eliminado con éxito' });
    } catch (error) {
        console.error('Error al eliminar el registro:', error);
        res.status(500).json({ message: 'Error al eliminar el registro', error });
    }
};
