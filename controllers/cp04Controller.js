const Cp04 = require('../models/cp04');

exports.getAllCp04 = async (req, res) => {
    try {
        const cp04Records = await Cp04.findAll();
        res.json(cp04Records);
    } catch (error) {
        console.error('Error al obtener los registros:', error);
        res.status(500).json({ message: 'Error al obtener los registros', error });
    }
};

// Obtener un registro por su ID
exports.getCp04ById = async (req, res) => {
    const { id } = req.params;
    try {
        const cp04Record = await Cp04.findByPk(id);
        if (!cp04Record) {
            return res.status(404).json({ message: 'Registro no encontrado' });
        }
        res.json(cp04Record);
    } catch (error) {
        console.error('Error al obtener el registro:', error);
        res.status(500).json({ message: 'Error al obtener el registro', error });
    }
};

exports.createCp04 = async (req, res) => {
    const {
        cvePresupuestal, date, diabetes_det_pob_20, diabetes_det_pob_20_mes, diabetes_sos_pob_20_mes,
        diabetes_con_pob_20, diabetes_ind_pob_20, hiperten_sos_pob_20_mes, hiperten_ind_pob_20, hiperten_det_pob_20,
        hiperten_det_pob_20_mes, hiperten_con_pob_20
    } = req.body;

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

    // Verificar que se hayan proporcionado todos los campos necesarios
    if (!cvePresupuestal || !date) {
        return res.status(400).json({ message: 'Faltan campos requeridos' });
    }

    try {
        const newCp04 = await Cp04.create({
            cvePresupuestal,
            date: parsedDate, // Usar la fecha convertida
            diabetes_det_pob_20,
            diabetes_det_pob_20_mes,
            diabetes_sos_pob_20_mes,
            diabetes_con_pob_20,
            diabetes_ind_pob_20,
            hiperten_sos_pob_20_mes,
            hiperten_ind_pob_20,
            hiperten_det_pob_20,
            hiperten_det_pob_20_mes,
            hiperten_con_pob_20
        });
        res.status(201).json(newCp04);
    } catch (error) {
        console.error('Error al crear el registro:', error);
        res.status(500).json({ message: 'Error al crear el registro', error });
    }
};

exports.updateCp04 = async (req, res) => {
    const { id } = req.params;
    const {
        cvePresupuestal, date, diabetes_det_pob_20, diabetes_det_pob_20_mes, diabetes_sos_pob_20_mes,
        diabetes_con_pob_20, diabetes_ind_pob_20, hiperten_sos_pob_20_mes, hiperten_ind_pob_20, hiperten_det_pob_20,
        hiperten_det_pob_20_mes, hiperten_con_pob_20
    } = req.body;

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

    // Verificar que se hayan proporcionado todos los campos necesarios
    if (!cvePresupuestal || !date) {
        return res.status(400).json({ message: 'Faltan campos requeridos' });
    }

    try {
        const tblCp04Record = await Cp04.findByPk(id);
        if (!tblCp04Record) {
            return res.status(404).json({ message: 'Registro no encontrado' });
        }

        // Actualizar el registro
        const updatedCp04 = await tblCp04Record.update({
            cvePresupuestal,
            date: parsedDate, // Usar la fecha convertida
            diabetes_det_pob_20,
            diabetes_det_pob_20_mes,
            diabetes_sos_pob_20_mes,
            diabetes_con_pob_20,
            diabetes_ind_pob_20,
            hiperten_sos_pob_20_mes,
            hiperten_ind_pob_20,
            hiperten_det_pob_20,
            hiperten_det_pob_20_mes,
            hiperten_con_pob_20
        });
        res.status(200).json(updatedCp04);
    } catch (error) {
        console.error('Error al actualizar el registro:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};


// Eliminar un registro existente
exports.deleteCp04 = async (req, res) => {
    const { id } = req.params;

    try {
        const cp04Record = await Cp04.findByPk(id);
        if (!cp04Record) {
            return res.status(404).json({ message: 'Registro no encontrado' });
        }

        await cp04Record.destroy();
        res.status(200).json({ message: 'Registro eliminado con éxito' });
    } catch (error) {
        console.error('Error al eliminar el registro:', error);
        res.status(500).json({ message: 'Error al eliminar el registro', error });
    }
};