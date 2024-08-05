const { DataTypes } = require('sequelize');
const sequelize = require('../configs/database');

const Emc = sequelize.define('Emc', {
    id_emc: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    status_cierre_mensual: {
        type: DataTypes.STRING(100),
        allowNull: true
    },
    delegacion: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    period: {
        type: DataTypes.DATE,
        allowNull: true
    },
    type: {
        type: DataTypes.STRING(20),
        allowNull: true
    },
    nombre_madre_tutor: {
        type: DataTypes.STRING(100),
        allowNull: true
    },
    nss: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    umf_adscripcion: {
        type: DataTypes.STRING(100),
        allowNull: true
    },
    nombre_paciente: {
        type: DataTypes.STRING(100),
        allowNull: true
    },
    fecha_nacimiento: {
        type: DataTypes.DATE,
        allowNull: true
    },
    sexo: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    peso: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    fecha_recepcion: {
        type: DataTypes.DATE,
        allowNull: true
    },
    fecha_recepcion_1a_muestra: {
        type: DataTypes.DATE,
        allowNull: true
    },
    fecha_recepcion_2a_muestra: {
        type: DataTypes.DATE,
        allowNull: true
    },
    fecha_notificacion_unidad_medica: {
        type: DataTypes.DATE,
        allowNull: true
    },
    fecha_localizacion_caso_probable: {
        type: DataTypes.DATE,
        allowNull: true
    },
    fecha_atencion_umf_envio_2nivel: {
        type: DataTypes.DATE,
        allowNull: true
    },
    hospital_atencion: {
        type: DataTypes.STRING(100),
        allowNull: true
    },
    fecha_primera_atencion_pediatra: {
        type: DataTypes.DATE,
        allowNull: true
    },
    datos_clinicos_sugestivos_emc: {
        type: DataTypes.STRING(100),
        allowNull: true
    },
    fecha_toma_muestra_confirmatorio: {
        type: DataTypes.DATE,
        allowNull: true
    },
    fecha_dx_definitivo: {
        type: DataTypes.DATE,
        allowNull: true
    },
    clasificacion_final: {
        type: DataTypes.STRING(100),
        allowNull: true
    },
    fecha_inicio_tratamiento: {
        type: DataTypes.DATE,
        allowNull: true
    },
    fecha_defuncion: {
        type: DataTypes.DATE,
        allowNull: true
    },
    sospecha_defuncion_relacionada_emc: {
        type: DataTypes.STRING(100),
        allowNull: true
    },
    observaciones: {
        type: DataTypes.STRING(500),
        allowNull: true
    },
    semanas: {
        type: DataTypes.STRING(100),
        allowNull: true
    },
    fecha_toma_tamiz_neonatal: {
        type: DataTypes.DATE,
        allowNull: true
    },
    fecha_toma_tamiz_neonatal_1a_muestra: {
        type: DataTypes.DATE,
        allowNull: true
    },
    fecha_toma_tamiz_neonatal_2a_muestra: {
        type: DataTypes.DATE,
        allowNull: true
    },
    fecha_resultado_tamiz_neonatal: {
        type: DataTypes.DATE,
        allowNull: true
    },
    fecha_resultado_tamiz_neonatal_1a_muestra: {
        type: DataTypes.DATE,
        allowNull: true
    },
    fecha_resultado_tamiz_neonatal_2a_muestra: {
        type: DataTypes.DATE,
        allowNull: true
    },
    resultado: {
        type: DataTypes.STRING(100),
        allowNull: true
    },
    resultado1: {
        type: DataTypes.STRING(100),
        allowNull: true
    },
    resultado2: {
        type: DataTypes.STRING(100),
        allowNull: true
    },
    fecha_toma_muestra_talon: {
        type: DataTypes.DATE,
        allowNull: true
    },
    resultado_muestra_tsh: {
        type: DataTypes.STRING(100),
        allowNull: true
    },
    resultado_muestra_t4: {
        type: DataTypes.STRING(100),
        allowNull: true
    },
    fecha_resultado_perfil_tiroideo: {
        type: DataTypes.DATE,
        allowNull: true
    },
    resultado_tsh: {
        type: DataTypes.STRING(100),
        allowNull: true
    },
    resultado_t4_libre: {
        type: DataTypes.STRING(100),
        allowNull: true
    },
    resultado_t4_total: {
        type: DataTypes.STRING(100),
        allowNull: true
    },
    solo_confirmados: {
        type: DataTypes.STRING(100),
        allowNull: true
    },
    fecha_resultado_confirmatorio: {
        type: DataTypes.DATE,
        allowNull: true
    },
    resultado_17_ohp: {
        type: DataTypes.STRING(100),
        allowNull: true
    },
    resultado_cortisol: {
        type: DataTypes.STRING(100),
        allowNull: true
    },
    resultado_testosterona: {
        type: DataTypes.STRING(100),
        allowNull: true
    },
    resultado_fenilalanina: {
        type: DataTypes.STRING(100),
        allowNull: true
    },
    resultado_tirosina: {
        type: DataTypes.STRING(100),
        allowNull: true
    },
    relacion_phe_tyr: {
        type: DataTypes.STRING(100),
        allowNull: true
    },
    resultado_cuantificacion_biotinidasa: {
        type: DataTypes.STRING(100),
        allowNull: true
    },
    actividad_enzimatica: {
        type: DataTypes.STRING(100),
        allowNull: true
    },
    otros: {
        type: DataTypes.STRING(100),
        allowNull: true
    },
    resultado_medicion_galt: {
        type: DataTypes.STRING(100),
        allowNull: true
    },
    resultado_medicion_gt: {
        type: DataTypes.STRING(100),
        allowNull: true
    },
    resultado_medicion_gal_1p: {
        type: DataTypes.STRING(100),
        allowNull: true
    },
    resultado_electrolitos_sudor_1a_muestra: {
        type: DataTypes.STRING(100),
        allowNull: true
    },
    fecha_toma_muestra_electrolitos_sudor_1a: {
        type: DataTypes.DATE,
        allowNull: true
    },
    resultado_electrolitos_sudor_2a_muestra: {
        type: DataTypes.STRING(100),
        allowNull: true
    },
    fecha_toma_muestra_electrolitos_sudor_2a: {
        type: DataTypes.DATE,
        allowNull: true
    },
    clasificacion_resultado_prueba_sudor: {
        type: DataTypes.STRING(100),
        allowNull: true
    },
    estudio_biologia_molecular: {
        type: DataTypes.STRING(100),
        allowNull: true
    },
    fecha_toma_biologia_molecular: {
        type: DataTypes.DATE,
        allowNull: true
    },
    fecha_resultado_biologia_molecular: {
        type: DataTypes.DATE,
        allowNull: true
    }
}, {
    tableName: 'tbl_emc',
    timestamps: false
});

module.exports = Emc;
