const express = require('express');
const router = express.Router();
const DefuncionesAux = require('../models/defuncionesAux');

exports.getAllDefuncionesAux = async (req, res) => {
    try {
        const defuncionesAux = await DefuncionesAux.findAll();
        res.json(defuncionesAux);
    } catch (error) {
        console.error('Error al obtener los registros:', error);
        res.status(500).json({ message: 'Error al obtener los registros', error });
    }
};

exports.getDefuncionesAuxById = async (req, res) => {
    const { id } = req.params;
    try {
        const defuncionesAuxRecord = await DefuncionesAux.findByPk(id);
        if (!defuncionesAuxRecord) {
            return res.status(404).json({ message: 'Registro no encontrado' });
        }
        res.json(defuncionesAuxRecord);
    } catch (error) {
        console.error('Error al obtener el registro:', error);
        res.status(500).json({ message: 'Error al obtener el registro', error });
    }
};

const camposDefuncionAux = [  `id_defuncionesaux`, `tipohoja`, `tipohojad`, `folio`, `foliocontrol`, `nombre`,
    `primerapellido`, `segundoapellido`, `fechanacimiento`, `sexo`, `sexod`, `entidadnacimiento`, 
    `entidadnacimientod`, `curp`, `se_reconocia_afromexicano`, `se_reconocia_afromexicanod`,
    `se_considera_indigena`, `se_considera_indigenad`, `hablalenguaindigena`, `hablalenguaindigenad`,
    `especifique_lengua_hablada`, `especifique_lengua_habladad`, `nacionalidad`, `nacionalidadd`,
    `otranacionalidad`, `edad`, `claveedad`, `claveedadd`, `foliocertificadonacimiento`,
    `edadgestacional`, `peso`, `estadoconyugal`, `estadoconyugald`, `resideextranjero`, `paisresidencia`,
    `paisresidenciad`, `entidadresidencia`, `entidadresidenciad`, `municipioresidencia`, `municipioresidenciad`,
    `localidadresidencia`, `localidadresidenciad`, `codigopostalresidencia`, `tipovialidadresidencia`,
    `tipovialidadresidenciad`, `nombrevialidadresidencia`, `numeroexteriorresidencia`, `numerointeriorresidencia`,
    `tipoasentamientoresidencia`, `tipoasentamientoresidenciad`, `nombreasentamientoresidencia`, `escolaridad`,
    `escolaridadd`, `claveocupacionhabitual`, `claveocupacionhabituald`, `trabajaactualmente`,
    `trabajaactualmented`, `afiliacion`, `afiliaciond`, `especifique_afiliacion`, `numeroafiliacion`, 
    `nombreinformante`, `primerapellidoinformante`, `segundoapellidoinformante`, `parentescoinformante`,
    `parentescoinformanted`, `firma_informante`, `firma_informanted`, `sitiodefuncion`, `sitiodefunciond`,
    `clues`, `nombreunidadmedica`, `entidaddefuncion`, `entidaddefunciond`, `municipiodefuncion`, 
    `municipiodefunciond`, `localidaddefuncion`, `localidaddefunciond`, `codigopostaldefuncion`,
    `tipovialidaddefuncion`, `tipovialidaddefunciond`, `nombrevialidaddefuncion`, `numeroexteriordefuncion`,
    `numerointeriordefuncion`, `tipoasentamientodefuncion`, `tipoasentamientodefunciond`, `nombreasentamientodefuncion`,
    `jurisdicciondefuncion`, `jurisdicciondefunciond`, `fechadefuncion`, `horadefuncion`, `atencionmedica`, 
    `atencionmedicad`, `realizo_cirugia`, `realizo_cirugiad`, `fecha_cirugia`, `motivo_cirugia`, 
    `muerteaccidentalviolenta`, `muerteaccidentalviolentad`, `intencionevento`, `intencioneventod`, 
    `descripcioncausa_a`, `clavetiempo`, `clavetiempodes`, `tiempo`, `codigociecausa_a_1`, `codigociecausa_a_2`, 
    `codigociecausa_a_3`, `descripcioncausa_b`, `clavetiempob`, `clavetiempobd`, `tiempob`,
    `codigociecausa_b_1`, `codigociecausa_b_2`, `codigociecausa_b_3`, `descripcioncausa_c`, `clavetiempoc`, 
    `clavetiempocd`, `tiempoc`,  `codigociecausa_c_1`, `codigociecausa_c_2`, `codigociecausa_c_3`, 
    `descripcioncausa_d`, `clavetiempod`, `clavetiempodd`, `tiempod`, `codigociecausa_d_1`, `codigociecausa_d_2`, 
    `codigociecausa_d_3`, `descripcioncausa_1`, `clavetiempo1`, `clavetiempo1d`, `tiempo1`, `codigociecausa_1_1`,
    `codigociecausa_1_2`, `codigociecausa_1_3`, `descripcioncausa_2`, `clavetiempo2`, `clavetiempo2d`, `tiempo_2`,
    `codigociecausa_2_1`, `codigociecausa_2_2`, `codigociecausa_2_3`, `ciecausabasica`, `ciecausabasicad`,
    `cie_codigo_adicional`, `cie_codigo_adicionald`, `cie_causa_externa`, `cie_causa_externad`, `practiconecropsia`,
    `practiconecropsiad`, `hallazgos`, `hallazgosd`, `ocurrioduranteembarazo`, `ocurrioduranteembarazod`,
    `causapropiaembarazo`, `causapropiaembarazod`, `causacomplicoembarazo`, `causacomplicoembarazod`, `posiblemuertematerna`,
    `posiblemuertematernad`, `muerte_encefalica`, `muerte_encefalicad`, `donador`, `donadord`, `vigilanciaepidemiologica`, 
    `vigilanciaepidemiologicad`, `ocurrioentrabajo`, `ocurrioentrabajod`, `sitioocurrencialesion`, `sitioocurrencialesiond`,
    `actamp`, `parentescoagresor`, `parentescoagresord`, `conoce_motivo_lesion`, `conoce_motivo_lesiond`, 
    `descripcionsituacion`, `entidadocurrencia`, `entidadocurrenciad`, `municipioocurrencia`, `municipioocurrenciad`, 
    `localidadocurrencia`, `localidadocurrenciad`, `codigopostal`, `tipovialidad`, `tipovialidadd`, 
    `nombrevialidad`, `numeroexterior`, `numerointerior`, `tipoasentamiento`, `tipoasentamientod`, `nombreasentamiento`, 
    `certificadopor`, `certificadopord`, `expecifiqueotro`, `nombrecertificante`, `primerapellidocertificante`,
    `segundoapellidocertificante`, `cedulaprofesional`, `firmacertificante`, `firmacertificanted`, `entidadcertificante`,
    `entidadcertificanted`, `municipiocertificante`, `municipiocertificanted`, `localidadcertificante`, 
    `localidadcertificanted`, `codigopostalcertificante`, `tipovialidadcertificante`, `tipovialidadcertificanted`,
    `nombrevialidadcertificante`, `numeroexteriorcertificante`, `numerointeriorcertificante`, `tipoasentamientocertificante`,
    `tipoasentamientocertificanted`, `nombreasentamientocertificante`, `telefonocertificante`, `fechacertificacion`, 
    `numerojuzgado`, `numerolibro`, `numeroacta`, `entidadjuzgado`, `entidadjuzgadod`, `municipiojuzgado`, `municipiojuzgadod`,
    `localidadjuzgado`, `localidadjuzgadod`, `fecharegistro`, `fechainsercion`, `fecha_actualizacion`, `fecha_codificacion`, 
    `ent_residencia_key`, `ent_ocurrencia_key`, `anio`, `mes`, `login`, `user_nivel`, `user_nivel1`, `user_nivel2`,
    `user_nivel3`, `clues_nivel`, `estado_captura`, `agregadomedico`, `unidadadscripcion`, `unidadatencion`,
    `servicioespecialidad`
  ];

  exports.createDefuncionAux = async (req, res) => {
    // Extraer los datos del request body
    const defuncionAuxData = {};
    camposDefuncionAux.forEach((campo) => {
        defuncionAuxData[campo] = req.body[campo];
    });

    try {
        // Crear una nueva defunción en la base de datos
        const newDefuncionAux = await DefuncionesAux.create(defuncionAuxData);
        return res.status(201).json(newDefuncionAux);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Failed to create defuncion' });
    }
};

exports.updateDefuncionAux = async (req, res) => {
    const { id } = req.params;
    const updateData = req.body;

    try {
        const defuncionesAux = await DefuncionesAux.findByPk(id);

        if (!defuncionesAux) {
            return res.status(404).json({ error: 'Defuncion no encontrada' });
        }

        // Actualizar los campos de la defunción
        await defuncionesAux.update(updateData);

        res.status(200).json({ message: 'Defuncion actualizada correctamente', data: defuncionesAux });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteDefuncionAux = async (req, res) => {
    const { id } = req.params;

    try {
        const defuncionesAux = await DefuncionesAux.findByPk(id);

        if (!defuncionesAux) {
            return res.status(404).json({ error: 'Defuncion no enontrada' });
        }

        await defuncionesAux.destroy();

        res.status(200).json({ message: 'Defuncion eliminada correctamente' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};