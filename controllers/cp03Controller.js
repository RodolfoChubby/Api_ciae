const Cp03 = require('../models/cp03');

// Obtener todos los registros
exports.getAllCp03 = async (req, res) => {
    try {
        const cp03Records = await Cp03.findAll();
        res.json(cp03Records);
    } catch (error) {
        console.error('Error al obtener los registros:', error);
        res.status(500).json({ message: 'Error al obtener los registros', error });
    }
};

// Obtener un registro por su ID
exports.getCp03ById = async (req, res) => {
    const { id } = req.params;
    try {
        const cp03Record = await Cp03.findByPk(id);
        if (!cp03Record) {
            return res.status(404).json({ message: 'Registro no encontrado' });
        }
        res.json(cp03Record);
    } catch (error) {
        console.error('Error al obtener el registro:', error);
        res.status(500).json({ message: 'Error al obtener el registro', error });
    }
};

// Crear un nuevo registro
exports.createCp03 = async (req, res) => {
    const {
        cvePresupuestal, date, h1_cdpv_dm_muj20a44_pob, h1_cdpv_dm_muj20a44_no,
        h1_cdpv_dm_muj20a44_cob, h1_cdpv_dm_muj20a44_ind, h1_cdpv_dm_hom20a44_pob,
        h1_cdpv_dm_hom20a44_no, h1_cdpv_dm_hom20a44_cob, h1_cdpv_dm_hom20a44_ind,
        h1_cdpv_dm_20mas_pob, h1_cdpv_dm_20mas_no, h1_cdpv_dm_20mas_cob,
        h1_cd_ha_hom20a29_pob, h1_cd_ha_hom20a29_no, h1_cd_ha_hom20a29_cob,
        h1_cd_ha_hom20a29_ind, h1_cd_ha_20mas_no, h1_cd_ha_20mas_pob,
        h1_cd_ha_20mas_cob, h1_cd_ha_muj20a29_pob, h1_cd_ha_muj20a29_no,
        h1_cd_ha_muj20a29_cob, h1_cd_ha_muj20a29_ind, h1_cd_col_muj20a44_pob,
        h1_cd_col_muj20a44_no, h1_cd_col_muj20a44_cob, h1_cd_col_muj20a44_ind,
        h1_cd_col_hom20a44_pob, h1_cd_col_hom20a44_no, h1_cd_col_hom20a44_cob,
        h1_cd_col_hom20a44_ind, h1_cd_col_20mas_pob, h1_cd_col_20mas_no,
        h1_cd_col_20mas_cob, h1_cd_col_20mas_ind, cvePresupuestal_h2, h2_tnle_menores1,
        h2_tnle_no, h2_tnle_cob, h2_tnle_menores1_mes, h2_n1mle_no, h2_n1mle_cob,
        h2_n2mle_no, h2_n2mle_cob, h2_n3mle_no, h2_n3mle_cob, h2_n4mle_no,
        h2_n4mle_cob, h2_n5mle_no, h2_n5mle_cob, h2_n6mle_no, h2_n6mle_cob,
        h2_aband_lac_materna, cvePresupuestal_h3, h3_tamiz_pob_recnac, h3_tamiz_no,
        h3_tamiz_cobertura, h3_tamiz_inds_hipodotirismo_congenito, h3_tamiz_inds_hiperplasia_adenal_congenita,
        h3_tamiz_inds_deficiencia_de_biotinidasa, h3_tamiz_inds_fenilcetonuria, h3_tamiz_inds_galactosemia,
        h3_masto_pob_40_49, h3_masto_no, h3_masto_cobertura, h3_masto_inds, h3_geria_pob,
        h3_geria_cobertura, h3_geria_inds_sindrome_caidas, h3_geria_inds_sindrome_inmovilidad,
        h3_geria_inds_sindrome_deterioro_cognitivo, h3_geria_inds_sindrome_incontigencia_urinaria
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
    if (!cvePresupuestal || !date || h1_cdpv_dm_muj20a44_pob === undefined || h1_cdpv_dm_muj20a44_no === undefined ||
        h1_cdpv_dm_muj20a44_cob === undefined || h1_cdpv_dm_muj20a44_ind === undefined || h1_cdpv_dm_hom20a44_pob === undefined ||
        h1_cdpv_dm_hom20a44_no === undefined || h1_cdpv_dm_hom20a44_cob === undefined || h1_cdpv_dm_hom20a44_ind === undefined ||
        h1_cdpv_dm_20mas_pob === undefined || h1_cdpv_dm_20mas_no === undefined || h1_cdpv_dm_20mas_cob === undefined ||
        h1_cd_ha_hom20a29_pob === undefined || h1_cd_ha_hom20a29_no === undefined || h1_cd_ha_hom20a29_cob === undefined ||
        h1_cd_ha_hom20a29_ind === undefined || h1_cd_ha_20mas_no === undefined || h1_cd_ha_20mas_pob === undefined ||
        h1_cd_ha_20mas_cob === undefined || h1_cd_ha_muj20a29_pob === undefined || h1_cd_ha_muj20a29_no === undefined ||
        h1_cd_ha_muj20a29_cob === undefined || h1_cd_ha_muj20a29_ind === undefined || h1_cd_col_muj20a44_pob === undefined ||
        h1_cd_col_muj20a44_no === undefined || h1_cd_col_muj20a44_cob === undefined || h1_cd_col_muj20a44_ind === undefined ||
        h1_cd_col_hom20a44_pob === undefined || h1_cd_col_hom20a44_no === undefined || h1_cd_col_hom20a44_cob === undefined ||
        h1_cd_col_hom20a44_ind === undefined || h1_cd_col_20mas_pob === undefined || h1_cd_col_20mas_no === undefined ||
        h1_cd_col_20mas_cob === undefined || h1_cd_col_20mas_ind === undefined || !cvePresupuestal_h2 || h2_tnle_menores1 === undefined ||
        h2_tnle_no === undefined || h2_tnle_cob === undefined || h2_tnle_menores1_mes === undefined || h2_n1mle_no === undefined ||
        h2_n1mle_cob === undefined || h2_n2mle_no === undefined || h2_n2mle_cob === undefined || h2_n3mle_no === undefined ||
        h2_n3mle_cob === undefined || h2_n4mle_no === undefined || h2_n4mle_cob === undefined || h2_n5mle_no === undefined ||
        h2_n5mle_cob === undefined || h2_n6mle_no === undefined || h2_n6mle_cob === undefined || h2_aband_lac_materna === undefined ||
        !cvePresupuestal_h3 || h3_tamiz_pob_recnac === undefined || h3_tamiz_no === undefined || h3_tamiz_cobertura === undefined ||
        h3_tamiz_inds_hipodotirismo_congenito === undefined || h3_tamiz_inds_hiperplasia_adenal_congenita === undefined ||
        h3_tamiz_inds_deficiencia_de_biotinidasa === undefined || h3_tamiz_inds_fenilcetonuria === undefined ||
        h3_tamiz_inds_galactosemia === undefined || h3_masto_pob_40_49 === undefined || h3_masto_no === undefined ||
        h3_masto_cobertura === undefined || h3_masto_inds === undefined || h3_geria_pob === undefined ||
        h3_geria_cobertura === undefined || h3_geria_inds_sindrome_caidas === undefined || h3_geria_inds_sindrome_inmovilidad === undefined ||
        h3_geria_inds_sindrome_deterioro_cognitivo === undefined || h3_geria_inds_sindrome_incontigencia_urinaria === undefined) {
        return res.status(400).json({ message: 'Faltan campos requeridos' });
    }

    try {
        const newCp03 = await Cp03.create({
            cvePresupuestal,
            date: parsedDate, // Usar la fecha analizada
            h1_cdpv_dm_muj20a44_pob,
            h1_cdpv_dm_muj20a44_no,
            h1_cdpv_dm_muj20a44_cob,
            h1_cdpv_dm_muj20a44_ind,
            h1_cdpv_dm_hom20a44_pob,
            h1_cdpv_dm_hom20a44_no,
            h1_cdpv_dm_hom20a44_cob,
            h1_cdpv_dm_hom20a44_ind,
            h1_cdpv_dm_20mas_pob,
            h1_cdpv_dm_20mas_no,
            h1_cdpv_dm_20mas_cob,
            h1_cd_ha_hom20a29_pob,
            h1_cd_ha_hom20a29_no,
            h1_cd_ha_hom20a29_cob,
            h1_cd_ha_hom20a29_ind,
            h1_cd_ha_20mas_no,
            h1_cd_ha_20mas_pob,
            h1_cd_ha_20mas_cob,
            h1_cd_ha_muj20a29_pob,
            h1_cd_ha_muj20a29_no,
            h1_cd_ha_muj20a29_cob,
            h1_cd_ha_muj20a29_ind,
            h1_cd_col_muj20a44_pob,
            h1_cd_col_muj20a44_no,
            h1_cd_col_muj20a44_cob,
            h1_cd_col_muj20a44_ind,
            h1_cd_col_hom20a44_pob,
            h1_cd_col_hom20a44_no,
            h1_cd_col_hom20a44_cob,
            h1_cd_col_hom20a44_ind,
            h1_cd_col_20mas_pob,
            h1_cd_col_20mas_no,
            h1_cd_col_20mas_cob,
            h1_cd_col_20mas_ind,
            cvePresupuestal_h2,
            h2_tnle_menores1,
            h2_tnle_no,
            h2_tnle_cob,
            h2_tnle_menores1_mes,
            h2_n1mle_no,
            h2_n1mle_cob,
            h2_n2mle_no,
            h2_n2mle_cob,
            h2_n3mle_no,
            h2_n3mle_cob,
            h2_n4mle_no,
            h2_n4mle_cob,
            h2_n5mle_no,
            h2_n5mle_cob,
            h2_n6mle_no,
            h2_n6mle_cob,
            h2_aband_lac_materna,
            cvePresupuestal_h3,
            h3_tamiz_pob_recnac,
            h3_tamiz_no,
            h3_tamiz_cobertura,
            h3_tamiz_inds_hipodotirismo_congenito,
            h3_tamiz_inds_hiperplasia_adenal_congenita,
            h3_tamiz_inds_deficiencia_de_biotinidasa,
            h3_tamiz_inds_fenilcetonuria,
            h3_tamiz_inds_galactosemia,
            h3_masto_pob_40_49,
            h3_masto_no,
            h3_masto_cobertura,
            h3_masto_inds,
            h3_geria_pob,
            h3_geria_cobertura,
            h3_geria_inds_sindrome_caidas,
            h3_geria_inds_sindrome_inmovilidad,
            h3_geria_inds_sindrome_deterioro_cognitivo,
            h3_geria_inds_sindrome_incontigencia_urinaria
        });

        res.status(201).json(newCp03);
    } catch (error) {
        console.error('Error al crear el registro CP03:', error);
        res.status(500).json({ message: 'Error al crear el registro CP03' });
    }
};


// Actualizar un registro existente
exports.updateCp03 = async (req, res) => {
    const { id } = req.params; // Asegúrate de que este parámetro es el id correcto, probablemente id_cp03
    const { 
        cvePresupuestal, date, h1_cdpv_dm_muj20a44_pob, h1_cdpv_dm_muj20a44_no, h1_cdpv_dm_muj20a44_cob, h1_cdpv_dm_muj20a44_ind, 
        h1_cdpv_dm_hom20a44_pob, h1_cdpv_dm_hom20a44_no, h1_cdpv_dm_hom20a44_cob, h1_cdpv_dm_hom20a44_ind, h1_cdpv_dm_20mas_pob, 
        h1_cdpv_dm_20mas_no, h1_cdpv_dm_20mas_cob, h1_cd_ha_hom20a29_pob, h1_cd_ha_hom20a29_no, h1_cd_ha_hom20a29_cob, h1_cd_ha_hom20a29_ind, 
        h1_cd_ha_20mas_no, h1_cd_ha_20mas_pob, h1_cd_ha_20mas_cob, h1_cd_ha_muj20a29_pob, h1_cd_ha_muj20a29_no, h1_cd_ha_muj20a29_cob, 
        h1_cd_ha_muj20a29_ind, h1_cd_col_muj20a44_pob, h1_cd_col_muj20a44_no, h1_cd_col_muj20a44_cob, h1_cd_col_muj20a44_ind, h1_cd_col_hom20a44_pob, 
        h1_cd_col_hom20a44_no, h1_cd_col_hom20a44_cob, h1_cd_col_hom20a44_ind, h1_cd_col_20mas_pob, h1_cd_col_20mas_no, h1_cd_col_20mas_cob, 
        h1_cd_col_20mas_ind, cvePresupuestal_h2, h2_tnle_menores1, h2_tnle_no, h2_tnle_cob, h2_tnle_menores1_mes, h2_n1mle_no, h2_n1mle_cob, 
        h2_n2mle_no, h2_n2mle_cob, h2_n3mle_no, h2_n3mle_cob, h2_n4mle_no, h2_n4mle_cob, h2_n5mle_no, h2_n5mle_cob, h2_n6mle_no, h2_n6mle_cob, 
        h2_aband_lac_materna, cvePresupuestal_h3, h3_tamiz_pob_recnac, h3_tamiz_no, h3_tamiz_cobertura, h3_tamiz_inds_hipodotirismo_congenito, 
        h3_tamiz_inds_hiperplasia_adenal_congenita, h3_tamiz_inds_deficiencia_de_biotinidasa, h3_tamiz_inds_fenilcetonuria, h3_tamiz_inds_galactosemia, 
        h3_masto_pob_40_49, h3_masto_no, h3_masto_cobertura, h3_masto_inds, h3_geria_pob, h3_geria_cobertura, h3_geria_inds_sindrome_caidas, 
        h3_geria_inds_sindrome_inmovilidad, h3_geria_inds_sindrome_deterioro_cognitivo, h3_geria_inds_sindrome_incontigencia_urinaria
    } = req.body;

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
    if (!cvePresupuestal || !date) {
        return res.status(400).json({ message: 'Faltan campos requeridos' });
    }

    try {
        const tblCp03Record = await Cp03.findByPk(id);
        if (!tblCp03Record) {
            return res.status(404).json({ message: 'Registro no encontrado' });
        }

        const updatedCp03 = await tblCp03Record.update({
            cvePresupuestal, date: parsedDate, h1_cdpv_dm_muj20a44_pob, h1_cdpv_dm_muj20a44_no, h1_cdpv_dm_muj20a44_cob, h1_cdpv_dm_muj20a44_ind, 
            h1_cdpv_dm_hom20a44_pob, h1_cdpv_dm_hom20a44_no, h1_cdpv_dm_hom20a44_cob, h1_cdpv_dm_hom20a44_ind, h1_cdpv_dm_20mas_pob, 
            h1_cdpv_dm_20mas_no, h1_cdpv_dm_20mas_cob, h1_cd_ha_hom20a29_pob, h1_cd_ha_hom20a29_no, h1_cd_ha_hom20a29_cob, h1_cd_ha_hom20a29_ind, 
            h1_cd_ha_20mas_no, h1_cd_ha_20mas_pob, h1_cd_ha_20mas_cob, h1_cd_ha_muj20a29_pob, h1_cd_ha_muj20a29_no, h1_cd_ha_muj20a29_cob, 
            h1_cd_ha_muj20a29_ind, h1_cd_col_muj20a44_pob, h1_cd_col_muj20a44_no, h1_cd_col_muj20a44_cob, h1_cd_col_muj20a44_ind, h1_cd_col_hom20a44_pob, 
            h1_cd_col_hom20a44_no, h1_cd_col_hom20a44_cob, h1_cd_col_hom20a44_ind, h1_cd_col_20mas_pob, h1_cd_col_20mas_no, h1_cd_col_20mas_cob, 
            h1_cd_col_20mas_ind, cvePresupuestal_h2, h2_tnle_menores1, h2_tnle_no, h2_tnle_cob, h2_tnle_menores1_mes, h2_n1mle_no, h2_n1mle_cob, 
            h2_n2mle_no, h2_n2mle_cob, h2_n3mle_no, h2_n3mle_cob, h2_n4mle_no, h2_n4mle_cob, h2_n5mle_no, h2_n5mle_cob, h2_n6mle_no, h2_n6mle_cob, 
            h2_aband_lac_materna, cvePresupuestal_h3, h3_tamiz_pob_recnac, h3_tamiz_no, h3_tamiz_cobertura, h3_tamiz_inds_hipodotirismo_congenito, 
            h3_tamiz_inds_hiperplasia_adenal_congenita, h3_tamiz_inds_deficiencia_de_biotinidasa, h3_tamiz_inds_fenilcetonuria, h3_tamiz_inds_galactosemia, 
            h3_masto_pob_40_49, h3_masto_no, h3_masto_cobertura, h3_masto_inds, h3_geria_pob, h3_geria_cobertura, h3_geria_inds_sindrome_caidas, 
            h3_geria_inds_sindrome_inmovilidad, h3_geria_inds_sindrome_deterioro_cognitivo, h3_geria_inds_sindrome_incontigencia_urinaria
        });
        res.status(200).json(updatedCp03);
    } catch (error) {
        console.error('Error al actualizar el registro:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};


// Eliminar un registro existente
exports.deleteCp03 = async (req, res) => {
    const { id } = req.params;

    try {
        const cp03Record = await Cp03.findByPk(id);
        if (!cp03Record) {
            return res.status(404).json({ message: 'Registro no encontrado' });
        }

        await cp03Record.destroy();
        res.status(200).json({ message: 'Registro eliminado con éxito' });
    } catch (error) {
        console.error('Error al eliminar el registro:', error);
        res.status(500).json({ message: 'Error al eliminar el registro', error });
    }
};
