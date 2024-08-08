const In08 = require('../models/in08');

// Obtener todos los registros
exports.getAll = async (req, res) => {
    try {
        const in08s = await In08.findAll();
        res.json(in08s);
    } catch (error) {
        console.error('Error al obtener los registros:', error);
        res.status(500).json({ message: 'Error al obtener los registros', error });
    }
};

// Obtener un registro por ID
exports.getById = async (req, res) => {
    const { id } = req.params;
    try {
        const in08 = await In08.findByPk(id);
        if (in08) {
            res.json(in08);
        } else {
            res.status(404).json({ message: 'Registro no encontrado' });
        }
    } catch (error) {
        console.error('Error al obtener el registro:', error);
        res.status(500).json({ message: 'Error al obtener el registro', error });
    }
};

// Crear un nuevo registro
exports.create = async (req, res) => {
    try {
        const { cvePresupuestal, fecha, tot_cons_mf_num, tot_cons_mf_porc, pac_ref_segnvl_num, pac_ref_segnvl_porc, tot_pas_segnvl_num, tot_pas_segnvl_porc } = req.body;

        // Validar la fecha
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

        if (!cvePresupuestal) {
            return res.status(400).json({ message: 'cvePresupuestal es requerido' });
        }

        const ifu = await In08.create({
            cvePresupuestal,
            fecha: parsedDate,
            tot_cons_mf_num,
            tot_cons_mf_porc,
            pac_ref_segnvl_num,
            pac_ref_segnvl_porc,
            tot_pas_segnvl_num,
            tot_pas_segnvl_porc
        });
        res.status(201).json(ifu);
    } catch (error) {
        console.error('Error al crear el registro:', error);
        if (error.name === 'SequelizeUniqueConstraintError') {
            return res.status(409).json({ message: 'Entrada duplicada', error });
        }
        res.status(500).json({ message: 'Error al crear el registro', error });
    }
};

// Actualizar un registro existente
exports.update = async (req, res) => {
    const { id } = req.params;
    const { cvePresupuestal, fecha, tot_cons_mf_num, tot_cons_mf_porc, pac_ref_segnvl_num, pac_ref_segnvl_porc, tot_pas_segnvl_num, tot_pas_segnvl_porc } = req.body;

    try {
        // Validar la fecha
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

        const [updated] = await In08.update({
            cvePresupuestal,
            fecha: parsedDate,
            tot_cons_mf_num,
            tot_cons_mf_porc,
            pac_ref_segnvl_num,
            pac_ref_segnvl_porc,
            tot_pas_segnvl_num,
            tot_pas_segnvl_porc
        }, {
            where: { id_in08: id }
        });

        if (updated) {
            const updatedIn08 = await In08.findByPk(id);
            res.json(updatedIn08);
        } else {
            res.status(404).json({ message: 'Registro no encontrado' });
        }
    } catch (error) {
        console.error('Error al actualizar el registro:', error);
        res.status(500).json({ message: 'Error al actualizar el registro', error });
    }
};

// Eliminar un registro
exports.delete = async (req, res) => {
    const { id } = req.params;
    try {
        const deleted = await In08.destroy({
            where: { id_in08: id }
        });

        if (deleted) {
            res.status(204).json(); // No content
        } else {
            res.status(404).json({ message: 'Registro no encontrado' });
        }
    } catch (error) {
        console.error('Error al eliminar el registro:', error);
        res.status(500).json({ message: 'Error al eliminar el registro', error });
    }
};
