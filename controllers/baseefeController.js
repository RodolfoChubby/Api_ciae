const BaseEfe = require('../models/baseefe');

// Obtener todos los registros
exports.getAllBaseEfe = async (req, res) => {
    try {
        const baseEfe = await BaseEfe.findAll();
        res.status(200).json(baseEfe);
    } catch (error) {
        console.error('Error al obtener los registros:', error);
        res.status(500).json({ message: 'Error al obtener los registros', error });
    }
};

// Obtener un registro por ID
exports.getBaseEfeById = async (req, res) => {
    const id = req.params.id;
    try {
        const baseEfe = await BaseEfe.findByPk(id);
        if (!baseEfe) {
            return res.status(404).json({ message: 'Registro no encontrado' });
        }
        res.status(200).json(baseEfe);
    } catch (error) {
        console.error('Error al obtener el registro:', error);
        res.status(500).json({ message: 'Error al obtener el registro', error });
    }
};

// Crear un nuevo registro
exports.createBaseEfe = async (req, res) => {
    const { cvePresupuestal, ide_eda_ano, ide_sex, fec_notif_juris, fec_notif_edo, fec_notif_dge, fec_estudio_juris, fec_ini_exant, year, semana, des_diag_presun, fec_clasf, des_clasf_final, fec_clasif_final, des_diag_final, fec_toma_lesp, fec_envio_lesp, fec_resul_lesp, des_resultadoi, fec_resu_indrei } = req.body;
    try {
        const newBaseEfe = await BaseEfe.create({
            cvePresupuestal,
            ide_eda_ano,
            ide_sex,
            fec_notif_juris,
            fec_notif_edo,
            fec_notif_dge,
            fec_estudio_juris,
            fec_ini_exant,
            year,
            semana,
            des_diag_presun,
            fec_clasf,
            des_clasf_final,
            fec_clasif_final,
            des_diag_final,
            fec_toma_lesp,
            fec_envio_lesp,
            fec_resul_lesp,
            des_resultadoi,
            fec_resu_indrei
        });
        res.status(201).json(newBaseEfe);
    } catch (error) {
        console.error('Error al crear el registro:', error);
        res.status(500).json({ message: 'Error al crear el registro', error });
    }
};

// Eliminar un registro por ID
exports.deleteBaseEfe = async (req, res) => {
    const id = req.params.id;
    try {
        const baseEfe = await BaseEfe.findByPk(id);
        if (!baseEfe) {
            return res.status(404).json({ message: 'Registro no encontrado' });
        }
        await baseEfe.destroy();
        res.status(200).json({ message: 'Registro eliminado correctamente' });
    } catch (error) {
        console.error('Error al eliminar el registro:', error);
        res.status(500).json({ message: 'Error al eliminar el registro', error });
    }
};

exports.updateBaseEfe = async (req, res) => {
    const id = req.params.id;
    const { cvePresupuestal, ide_eda_ano, ide_sex, fec_notif_juris, fec_notif_edo, fec_notif_dge, fec_estudio_juris, fec_ini_exant, year, semana, des_diag_presun, fec_clasf, des_clasf_final, fec_clasif_final, des_diag_final, fec_toma_lesp, fec_envio_lesp, fec_resul_lesp, des_resultadoi, fec_resu_indrei } = req.body;
    try {
        const baseEfe = await BaseEfe.findByPk(id);
        if (!baseEfe) {
            return res.status(404).json({ message: 'Registro no encontrado' });
        }
        await baseEfe.update({
            cvePresupuestal,
            ide_eda_ano,
            ide_sex,
            fec_notif_juris,
            fec_notif_edo,
            fec_notif_dge,
            fec_estudio_juris,
            fec_ini_exant,
            year,
            semana,
            des_diag_presun,
            fec_clasf,
            des_clasf_final,
            fec_clasif_final,
            des_diag_final,
            fec_toma_lesp,
            fec_envio_lesp,
            fec_resul_lesp,
            des_resultadoi,
            fec_resu_indrei
        });
        res.status(200).json(baseEfe);
    } catch (error) {
        console.error('Error al actualizar el registro:', error);
        res.status(500).json({ message: 'Error al actualizar el registro', error });
    }
};