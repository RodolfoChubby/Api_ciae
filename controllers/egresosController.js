const Egresos = require('../models/egresos');

// Obtener todos los registros
exports.getAllEgresos = async (req, res) => {
    try {
        const egresos = await Egresos.findAll();
        res.status(200).json(egresos);
    } catch (error) {
        console.error('Error al obtener los registros:', error);
        res.status(500).json({ message: 'Error al obtener los registros', error });
    }
};

// Obtener un registro por su ID
exports.getEgresosById = async (req, res) => {
    const { id } = req.params;
    try {
        const egreso = await Egresos.findByPk(id);
        if (!egreso) {
            return res.status(404).json({ message: 'Registro no encontrado' });
        }
        res.status(200).json(egreso);
    } catch (error) {
        console.error('Error al obtener el registro:', error);
        res.status(500).json({ message: 'Error al obtener el registro', error });
    }
};

// Crear un nuevo registro
exports.createEgresos = async (req, res) => {
    const { cvePresupuestal, fecha, egresos, division } = req.body;

    let parsedDate;
    if (fecha) {
        if (fecha.length === 6) {
            // Formato YYYYMM
            const year = parseInt(fecha.substring(0, 4), 10);
            const month = parseInt(fecha.substring(4, 6), 10);
            // Asegúrate de que el mes sea válido (1-12)
            if (month < 1 || month > 12) {
                return res.status(400).json({ message: 'Mes inválido en la fecha' });
            }
            parsedDate = new Date(year, month - 1, 1);
        } else {
            // Formato YYYY-MM-DD
            parsedDate = new Date(fecha);
            // Verificar si la fecha es válida
            if (isNaN(parsedDate.getTime())) {
                return res.status(400).json({ message: 'Fecha inválida' });
            }
        }
    } else {
        return res.status(400).json({ message: 'Falta la fecha' });
    }

    try {
        const newEgreso = await Egresos.create({
            cvePresupuestal,
            fecha: parsedDate,
            egresos,
            division
        });
        res.status(201).json(newEgreso);
    } catch (error) {
        console.error('Error al crear el registro:', error);
        res.status(500).json({ message: 'Error al crear el registro', error });
    }
};

// Actualizar un registro existente
exports.updateEgresos = async (req, res) => {
    const { id } = req.params;
    const { cvePresupuestal, fecha, egresos, division } = req.body;

    let parsedDate;
    if (fecha) {
        if (fecha.length === 6) {
            // Formato YYYYMM
            const year = parseInt(fecha.substring(0, 4), 10);
            const month = parseInt(fecha.substring(4, 6), 10);
            // Asegúrate de que el mes sea válido (1-12)
            if (month < 1 || month > 12) {
                return res.status(400).json({ message: 'Mes inválido en la fecha' });
            }
            parsedDate = new Date(year, month - 1, 1);
        } else {
            // Formato YYYY-MM-DD
            parsedDate = new Date(fecha);
            // Verificar si la fecha es válida
            if (isNaN(parsedDate.getTime())) {
                return res.status(400).json({ message: 'Fecha inválida' });
            }
        }
    } else {
        return res.status(400).json({ message: 'Falta la fecha' });
    }

    try {
        const egreso = await Egresos.findByPk(id);
        if (!egreso) {
            return res.status(404).json({ message: 'Registro no encontrado' });
        }

        await egreso.update({
            cvePresupuestal,
            fecha: parsedDate,
            egresos,
            division
        });

        res.status(200).json(egreso);
    } catch (error) {
        console.error('Error al actualizar el registro:', error);
        res.status(500).json({ message: 'Error al actualizar el registro', error });
    }
};

// Eliminar un registro
exports.deleteEgresos = async (req, res) => {
    const { id } = req.params;
    try {
        const egreso = await Egresos.findByPk(id);
        if (!egreso) {
            return res.status(404).json({ message: 'Registro no encontrado' });
        }

        await egreso.destroy();
        res.status(200).json({ message: 'Registro eliminado correctamente' });
    } catch (error) {
        console.error('Error al eliminar el registro:', error);
        res.status(500).json({ message: 'Error al eliminar el registro', error });
    }
};
