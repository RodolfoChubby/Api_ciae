const { DataTypes } = require('sequelize');
const sequelize = require('../configs/database');

const ExtractorCsui13 = sequelize.define('ExtractorCsui13', {
    id_extractorcsui13: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    cvePresupuestal: {
        type: DataTypes.STRING(15),
        allowNull: false
    },
    fecha: {
        type: DataTypes.DATE,
        allowNull: false
    },
    hojasCodificadas: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    unidadAdscription: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    sexo: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    edadAnios: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    edadSemanas: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    tipoIngreso: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    diagnosticoPrincipal: {
        type: DataTypes.STRING(10),
        allowNull: true
    },
    intervencionQuirurgicaPrincipal: {
        type: DataTypes.STRING(10),
        allowNull: true
    },
    programaPlanificacionFamiliar: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    compilacionIntraHosp: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    motivoAlta: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    diasEstancia: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    especialidad: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    ramoSeguro: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    causaBasicaDefuncionHosp: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    numeroAfiliacion: {
        type: DataTypes.STRING(15),
        allowNull: true
    },
    fechaIngreso: {
        type: DataTypes.DATE,
        allowNull: true
    },
    divisionIngreso: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    fechaEgreso: {
        type: DataTypes.DATE,
        allowNull: true
    },
    divisionEgreso: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    numeroPaquete: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    compilacionSecundaria: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    diagnosticoSecundario1: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    diagnosticoSecundario2: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    procedimientoQuirurgico1: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    procedimientoQuirurgico2: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    procedimientoQuirurgico3: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    procedimientoQuirurgico4: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    procedimientoQuirurgico5: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    semanasGestacion: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    pesoRecienNacidoGramos1: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    pesoRecienNacidoGramos2: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    pesoRecienNacidoGramos3: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    sexoRecienNacido1: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    sexoRecienNacido2: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    sexoRecienNacido3: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    fechaIntervencionQuirurgica: {
        type: DataTypes.STRING(15),
        allowNull: true
    },
    agregadoMedico: {
        type: DataTypes.STRING(15),
        allowNull: true
    },
    diagnosticoIngreso: {
        type: DataTypes.STRING(10),
        allowNull: true
    },
    identificacionSistema: {
        type: DataTypes.STRING(10),
        allowNull: true
    },
    fechaIngresoD: {
        type: DataTypes.DATE,
        allowNull: true
    },
    fechaEgresoD: {
        type: DataTypes.DATE,
        allowNull: true
    },
    idDel: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
}, {
    timestamps: false,
    tableName: 'tbl_extractor_csui13'
});

module.exports = ExtractorCsui13;
