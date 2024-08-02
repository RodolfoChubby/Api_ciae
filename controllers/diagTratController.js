const DiagTrat = require('../models/diagTrat');

// Controlador para obtener todos los registros
exports.getAllDiagTrat = async (req, res) => {
    try {
        const diagTratRecords = await DiagTrat.findAll();
        res.status(200).json(diagTratRecords);
    } catch (error) {
        console.error('Error al obtener los registros:', error);
        res.status(500).json({ message: 'Error al obtener los registros', error });
    }
};

// Controlador para obtener un registro por su ID
exports.getDiagTratById = async (req, res) => {
    const { id } = req.params;

    try {
        const diagTratRecord = await DiagTrat.findByPk(id);

        if (!diagTratRecord) {
            return res.status(404).json({ message: 'Registro no encontrado' });
        }

        res.status(200).json(diagTratRecord);
    } catch (error) {
        console.error('Error al obtener el registro:', error);
        res.status(500).json({ message: 'Error al obtener el registro', error });
    }
};

exports.createDiagTrat = async (req, res) => {
    const { cvePresupuestal, date, aux_diag_trat, total, tipo } = req.body;

    // Verificar que se hayan proporcionado todos los campos necesarios
    if (!cvePresupuestal || !date || !total || !tipo) {
        return res.status(400).json({ message: 'Faltan campos requeridos' });
    }

    // Validación y conversión de fecha
    let parsedDate;
    if (date) {
        if (date.length === 6) {
            // Formato YYYYMM
            const year = parseInt(date.substring(0, 4), 10);
            const month = parseInt(date.substring(4, 6), 10);
            // Asegúrate de que el mes sea válido (1-12)
            if (month < 1 || month > 12) {
                return res.status(400).json({ message: 'Mes inválido en la fecha' });
            }
            parsedDate = new Date(year, month - 1, 1);
        } else {
            // Formato YYYY-MM-DD
            parsedDate = new Date(date);
            // Verificar si la fecha es válida
            if (isNaN(parsedDate.getTime())) {
                return res.status(400).json({ message: 'Fecha inválida' });
            }
        }
    }

    try {
        const newDiagTrat = await DiagTrat.create({
            cvePresupuestal,
            date: parsedDate, // Usar parsedDate aquí
            aux_diag_trat,
            total,
            tipo
        });

        res.status(201).json(newDiagTrat);
    } catch (error) {
        console.error('Error al crear el registro:', error);
        res.status(500).json({ message: 'Error al crear el registro', error });
    }
};

// Controlador para actualizar un registro
exports.updateDiagTrat = async (req, res) => {
    const { id } = req.params;
    const { cvePresupuestal, date, aux_diag_trat, total, tipo } = req.body;

    // Verificar que se hayan proporcionado todos los campos necesarios
    if (!cvePresupuestal || !date || !total || !tipo) {
        return res.status(400).json({ message: 'Faltan campos requeridos' });
    }

    // Validación y conversión de fecha
    let parsedDate;
    if (date) {
        if (date.length === 6) {
            // Formato YYYYMM
            const year = parseInt(date.substring(0, 4), 10);
            const month = parseInt(date.substring(4, 6), 10);
            // Asegúrate de que el mes sea válido (1-12)
            if (month < 1 || month > 12) {
                return res.status(400).json({ message: 'Mes inválido en la fecha' });
            }
            parsedDate = new Date(year, month - 1, 1);
        } else {
            // Formato YYYY-MM-DD
            parsedDate = new Date(date);
            // Verificar si la fecha es válida
            if (isNaN(parsedDate.getTime())) {
                return res.status(400).json({ message: 'Fecha inválida' });
            }
        }
    }

    try {
        const diagTratRecord = await DiagTrat.findByPk(id);

        if (!diagTratRecord) {
            return res.status(404).json({ message: 'Registro no encontrado' });
        }

        const updatedDiagTrat = await diagTratRecord.update({
            cvePresupuestal,
            date: parsedDate, // Usar parsedDate aquí
            aux_diag_trat,
            total,
            tipo
        });

        res.status(200).json(updatedDiagTrat);
    } catch (error) {
        console.error('Error al actualizar el registro:', error);
        res.status(500).json({ message: 'Error al actualizar el registro', error });
    }
};

// Controlador para eliminar un registro
exports.deleteDiagTrat = async (req, res) => {
    const { id } = req.params;

    try {
        const diagTratRecord = await DiagTrat.findByPk(id);

        if (!diagTratRecord) {
            return res.status(404).json({ message: 'Registro no encontrado' });
        }

        await diagTratRecord.destroy();
        res.status(200).json({ message: 'Registro eliminado con éxito' });
    } catch (error) {
        console.error('Error al eliminar el registro:', error);
        res.status(500).json({ message: 'Error al eliminar el registro', error });
    }
};
