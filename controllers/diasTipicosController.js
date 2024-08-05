const DiasTipicos = require('../models/diasTipicos');

// Obtener todos los registros
exports.getAllDiasTipicos = async (req, res) => {
    try {
        const diasTipicos = await DiasTipicos.findAll();
        res.status(200).json(diasTipicos);
    } catch (error) {
        console.error('Error al obtener los registros:', error);
        res.status(500).json({ message: 'Error al obtener los registros', error });
    }
};

// Obtener un registro por ID
exports.getDiasTipicosById = async (req, res) => {
    const { id } = req.params;
    try {
        const diasTipico = await DiasTipicos.findByPk(id);
        if (!diasTipico) {
            return res.status(404).json({ message: 'Registro no encontrado' });
        }
        res.status(200).json(diasTipico);
    } catch (error) {
        console.error('Error al obtener el registro:', error);
        res.status(500).json({ message: 'Error al obtener el registro', error });
    }
};

// Crear un nuevo registro
exports.createDiasTipicos = async (req, res) => {
    const { cvePresupuestal, date, cons_otorg, cons_mf, cons_esp, cons_den, aten_urg, egr_hosp, dias_pac, int_quir, part_aten, nac_vivos, anal_clin, est_radio, est_ecos, est_tomo_axial, est_fisio_cardio, est_res_magn, ses_radio, ses_inhalo, ses_hemod, est_hemod, est_electmiog, est_endos, ses_med_fis, est_electrocard, est_electroencefalo, ses_med_nuc, ses_lito } = req.body;

    if (!cvePresupuestal || !date) {
        return res.status(400).json({ message: 'Faltan campos requeridos' });
    }

    // Validación de fecha
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
        const newDiasTipico = await DiasTipicos.create({
            cvePresupuestal,
        date: parsedDate,
            cons_otorg,
            cons_mf,
            cons_esp,
            cons_den,
            aten_urg,
            egr_hosp,
            dias_pac,
            int_quir,
            part_aten,
            nac_vivos,
            anal_clin,
            est_radio,
            est_ecos,
            est_tomo_axial,
            est_fisio_cardio,
            est_res_magn,
            ses_radio,
            ses_inhalo,
            ses_hemod,
            est_hemod,
            est_electmiog,
            est_endos,
            ses_med_fis,
            est_electrocard,
            est_electroencefalo,
            ses_med_nuc,
            ses_lito
        });

        res.status(201).json(newDiasTipico);
    } catch (error) {
        console.error('Error al crear el registro:', error);
        res.status(500).json({ message: 'Error al crear el registro', error });
    }
};

// Actualizar un registro
exports.updateDiasTipicos = async (req, res) => {
    const { id } = req.params;
    const { cvePresupuestal, date, cons_otorg, cons_mf, cons_esp, cons_den, aten_urg, egr_hosp, dias_pac, int_quir, part_aten, nac_vivos, anal_clin, est_radio, est_ecos, est_tomo_axial, est_fisio_cardio, est_res_magn, ses_radio, ses_inhalo, ses_hemod, est_hemod, est_electmiog, est_endos, ses_med_fis, est_electrocard, est_electroencefalo, ses_med_nuc, ses_lito } = req.body;

    // Validación de fecha
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
    } else {
        return res.status(400).json({ message: 'Falta la fecha' });
    }

    try {
        const diasTipico = await DiasTipicos.findByPk(id);

        if (!diasTipico) {
            return res.status(404).json({ message: 'Registro no encontrado' });
        }

        const updatedDiasTipico = await diasTipico.update({
            cvePresupuestal,
            date: parsedDate,
            cons_otorg,
            cons_mf,
            cons_esp,
            cons_den,
            aten_urg,
            egr_hosp,
            dias_pac,
            int_quir,
            part_aten,
            nac_vivos,
            anal_clin,
            est_radio,
            est_ecos,
            est_tomo_axial,
            est_fisio_cardio,
            est_res_magn,
            ses_radio,
            ses_inhalo,
            ses_hemod,
            est_hemod,
            est_electmiog,
            est_endos,
            ses_med_fis,
            est_electrocard,
            est_electroencefalo,
            ses_med_nuc,
            ses_lito
        });

        res.status(200).json(updatedDiasTipico);
    } catch (error) {
        console.error('Error al actualizar el registro:', error);
        res.status(500).json({ message: 'Error al actualizar el registro', error });
    }
};

// Eliminar un registro
exports.deleteDiasTipicos = async (req, res) => {
    const { id } = req.params;
    try {
        const diasTipico = await DiasTipicos.findByPk(id);
        if (!diasTipico) {
            return res.status(404).json({ message: 'Registro no encontrado' });
        }

        await diasTipico.destroy();
        res.status(200).json({ message: 'Registro eliminado correctamente' });
    } catch (error) {
        console.error('Error al eliminar el registro:', error);
        res.status(500).json({ message: 'Error al eliminar el registro', error });
    }
};
