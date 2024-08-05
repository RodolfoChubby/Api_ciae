const { DataTypes } = require('sequelize');
const sequelize = require('../configs/database');

const EmcCob = sequelize.define('EmcCob', {
    id_emc_cob: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    fe_registro: {
        type: DataTypes.DATE,
        allowNull: true
    },
    cvemes: {
        type: DataTypes.STRING(100),
        allowNull: true
    },
    anio: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    mes: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    period: {
        type: DataTypes.DATE,
        allowNull: true
    },
    desc_delegacion: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    desc_unidad: {
        type: DataTypes.STRING(100),
        allowNull: true
    },
    cve_presupuestal: {
        type: DataTypes.STRING(12),
        allowNull: true
    },
    unidad_origen: {
        type: DataTypes.STRING(100),
        allowNull: true
    },
    cve_presup_ori: {
        type: DataTypes.STRING(12),
        allowNull: true
    },
    desc_unidad_adscrip: {
        type: DataTypes.STRING(100),
        allowNull: true
    },
    nss: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    agregado_medico: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    ap_paterno: {
        type: DataTypes.STRING(100),
        allowNull: true
    },
    ap_materno: {
        type: DataTypes.STRING(100),
        allowNull: true
    },
    nombre: {
        type: DataTypes.STRING(100),
        allowNull: true
    },
    sexo: {
        type: DataTypes.STRING(5),
        allowNull: true
    },
    edad: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    edad_meses: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    edad_dias: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    peso: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    semanas_gestacion: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    fe_ingreso: {
        type: DataTypes.DATE,
        allowNull: true
    },
    no_hosp: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    fe_registro_hosp: {
        type: DataTypes.DATE,
        allowNull: true
    },
    cama: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    desc_dx_i1: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    desc_dx_i2: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    desc_dx1: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    desc_dx2: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    desc_dx3: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    fe_egreso: {
        type: DataTypes.DATE,
        allowNull: true
    },
    desc_motivo_egreso: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    fe_deteccion_infeccion: {
        type: DataTypes.DATE,
        allowNull: true
    },
    inf_importada_otro_hospital: {
        type: DataTypes.STRING(10),
        allowNull: true
    },
    desc_delegacion_exportadora: {
        type: DataTypes.STRING(100),
        allowNull: true
    },
    cve_presupuestal_exportadora: {
        type: DataTypes.STRING(12),
        allowNull: true
    },
    desc_unidad_exportadora: {
        type: DataTypes.STRING(100),
        allowNull: true
    },
    inf_notif_medico: {
        type: DataTypes.STRING(10),
        allowNull: true
    },
    inf_notif_enfermera: {
        type: DataTypes.STRING(10),
        allowNull: true
    },
    inf_notif_laboratorio: {
        type: DataTypes.STRING(10),
        allowNull: true
    },
    inf_notif_cer_defuncion: {
        type: DataTypes.STRING(10),
        allowNull: true
    },
    inf_notif_vigilancia_activa: {
        type: DataTypes.STRING(10),
        allowNull: true
    },
    cve_servicio: {
        type: DataTypes.STRING(20),
        allowNull: true
    },
    desc_servicio: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    tp_terapia: {
        type: DataTypes.STRING(10),
        allowNull: true
    },
    desc_terapia: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    fe_inicio_definicion_infeccion: {
        type: DataTypes.DATE,
        allowNull: true
    },
    fe_resolucion_infeccion: {
        type: DataTypes.DATE,
        allowNull: true
    },
    cve_clase_infeccion: {
        type: DataTypes.STRING(20),
        allowNull: true
    },
    desc_clase_infeccion: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    cve_infeccion: {
        type: DataTypes.STRING(20),
        allowNull: true
    },
    desc_infeccion: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    tp_factor_riesgo_asociado: {
        type: DataTypes.STRING(10),
        allowNull: true
    },
    desc_sitio_insercion_c: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    fe_instala_cateter: {
        type: DataTypes.DATE,
        allowNull: true
    },
    fe_retiro_cateter: {
        type: DataTypes.DATE,
        allowNull: true
    },
    dias_cateter: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    tiene_npt: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    sistema_infusion: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    utilizo_circuito_des_vent_vm: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    higiene_oral_vm: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    desc_higiene_oral_vm: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    fe_instala_ventilador: {
        type: DataTypes.DATE,
        allowNull: true
    },
    fe_retiro_ventilador: {
        type: DataTypes.DATE,
        allowNull: true
    },
    dias_ventilador: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    desc_sonda_v: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    fe_instala_sonda: {
        type: DataTypes.DATE,
        allowNull: true
    },
    fe_retiro_sonda: {
        type: DataTypes.DATE,
        allowNull: true
    },
    dias_sonda: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    fe_cirugia_o_instalacion: {
        type: DataTypes.DATE,
        allowNull: true
    },
    fe_cirugia: {
        type: DataTypes.DATE,
        allowNull: true
    },
    desc_factor_riesgo_asociado_cirugia: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    desc_gdo_contaminacion: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    desc_tratamiento_antimicrobiano: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    tiene_profilaxis: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    uso_cortadora: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    tp_cultivo: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    desc_cultivo: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    cve_tecnica: {
        type: DataTypes.STRING(20),
        allowNull: true
    },
    desc_tecnica: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    fe_toma_muestra: {
        type: DataTypes.STRING(100),
        allowNull: true
    },
    cve_microorganismos_aislados1: {
        type: DataTypes.STRING(20),
        allowNull: true
    },
    desc_microorganismos_aislados1: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    cve_microorganismos_aislados2: {
        type: DataTypes.STRING(20),
        allowNull: true
    },
    desc_microorganismos_aislados2: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    cve_microorganismos_aislados3: {
        type: DataTypes.STRING(20),
        allowNull: true
    },
    desc_microorganismos_aislados3: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    cve_microorganismos_aislados4: {
        type: DataTypes.STRING(20),
        allowNull: true
    },
    desc_microorganismos_aislados4: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    relacionada_brote: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    ambulatoria: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    desc_resis_microorganismo1: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    desc_resis_microorganismo2: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    desc_resis_microorganismo3: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    desc_resis_microorganismo4: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    desc_mecanismo_resis1: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    desc_mecanismo_resis2: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    desc_mecanismo_resis3: {
        type: DataTypes.STRING(255),
        allowNull:true
    },
    desc_mecanismo_resis4: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    ooadori: {
        type: DataTypes.STRING(50),
        allowNull: true
    }
}, {
    tableName: 'tbl_emc_cob',
    timestamps: false
});

module.exports = EmcCob;