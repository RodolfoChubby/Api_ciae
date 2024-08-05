const { DataTypes } = require('sequelize');
const sequelize = require('../configs/database');

const ExtractorCegrnac = sequelize.define('ExtractorCegrnac', {
    id_extractor_cegrnac: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    period: {
        type: DataTypes.STRING(6),
        allowNull: false,
    },
    aniom: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    mesm: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    idDel: {
        type: DataTypes.STRING(10),
        allowNull: false,
    },
    cvePresupuestal: {
        type: DataTypes.STRING(12),
        allowNull: false,
    },
    tipoServicio: {
        type: DataTypes.STRING(10),
        allowNull: false,
    },
    AFILIACION: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    AGREGADO: {
        type: DataTypes.STRING(20),
        allowNull: false,
    },
    NOMBRE: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    EDAD_SEM: {
        type: DataTypes.STRING(10),
        allowNull: false,
    },
    NO_PROD: {
        type: DataTypes.STRING(10),
        allowNull: false,
    },
    FENAC: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    HRNAC: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    SEXO: {
        type: DataTypes.STRING(10),
        allowNull: false,
    },
    PESO: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    TALLA: {
        type: DataTypes.STRING(10),
        allowNull: false,
    },
    APGAR1: {
        type: DataTypes.STRING(10),
        allowNull: false,
    },
    APGAR2: {
        type: DataTypes.STRING(10),
        allowNull: false,
    },
    PERCEF: {
        type: DataTypes.STRING(10),
        allowNull: false,
    },
    SEMGES: {
        type: DataTypes.STRING(10),
        allowNull: false,
    },
    ESTADORN: {
        type: DataTypes.STRING(10),
        allowNull: false,
    },
    DESCRIPESTADORN: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    HRDEF: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    ESPING: {
        type: DataTypes.STRING(10),
        allowNull: false,
    },
    FEING: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    HRING: {
        type: DataTypes.STRING(10),
        allowNull: false,
    },
    ESP: {
        type: DataTypes.STRING(10),
        allowNull: false,
    },
    FEEGR: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    HREGR: {
        type: DataTypes.STRING(10),
        allowNull: false,
    },
    PESOEGR: {
        type: DataTypes.STRING(10),
        allowNull: false,
    },
    TPEGR: {
        type: DataTypes.STRING(10),
        allowNull: false,
    },
    DiagInicialIngreso: {
        type: DataTypes.STRING(10),
        allowNull: false,
    },
    DiagPrincipalEgreso: {
        type: DataTypes.STRING(10),
        allowNull: false,
    },
    PrimerDiagSecundarioEgreso: {
        type: DataTypes.STRING(10),
        allowNull: false,
    },
    SegundoDiagSecundarioEgr: {
        type: DataTypes.STRING(10),
        allowNull: false,
    },
    TercerDiagSecundario: {
        type: DataTypes.STRING(10),
        allowNull: false,
    },
    CuartoDiagSecundario: {
        type: DataTypes.STRING(10),
        allowNull: false,
    },
    QuintoDiagSecundario: {
        type: DataTypes.STRING(10),
        allowNull: false,
    },
    PrimeraComplicacionIntrahosp: {
        type: DataTypes.STRING(10),
        allowNull: false,
    },
    SegundaComplicacionIntrahosp: {
        type: DataTypes.STRING(10),
        allowNull: false,
    },
    TerceraComplicacionIntrahosp: {
        type: DataTypes.STRING(10),
        allowNull: false,
    },
    CausaDirectaDefuncion: {
        type: DataTypes.STRING(10),
        allowNull: false,
    },
    CausaBasicaDefuncion: {
        type: DataTypes.STRING(10),
        allowNull: false,
    },
    CausaSecundariaDefuncion: {
        type: DataTypes.STRING(10),
        allowNull: false,
    },
    MAC_DEP: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    origen: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    cvePresupuestal_adscripcion: {
        type: DataTypes.STRING(12),
        allowNull: false,
    },
    AFILIACION_texto: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    cve_tamiz: {
        type: DataTypes.STRING(10),
        allowNull: false,
    },
    des_tamiz: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    cve_alimentacion_rn: {
        type: DataTypes.STRING(10),
        allowNull: false,
    },
    des_alimentacion_rn: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    PinzamientoTardioCordon: {
        type: DataTypes.STRING(5),
        allowNull: false,
    },
    ApegoInmediato: {
        type: DataTypes.STRING(5),
        allowNull: false,
    },
    ReanimacionNeonatal: {
        type: DataTypes.STRING(5),
        allowNull: false,
    },
    Surfactante: {
        type: DataTypes.STRING(5),
        allowNull: false,
    },
    Fototerapia: {
        type: DataTypes.STRING(5),
        allowNull: false,
    },
    Exanguinotransfusion: {
        type: DataTypes.STRING(5),
        allowNull: false,
    },
    Salinoferesis: {
        type: DataTypes.STRING(5),
        allowNull: false,
    },
    UltrasonidoTransfontanelar: {
        type: DataTypes.STRING(5),
        allowNull: false,
    },
    SondaPleurostomia: {
        type: DataTypes.STRING(5),
        allowNull: false,
    },
    VentilacionOxigeno: {
        type: DataTypes.STRING(5),
        allowNull: false,
    },
    VentilacionCPAP: {
        type: DataTypes.STRING(5),
        allowNull: false,
    },
    VentilacionMecanicaAsistida: {
        type: DataTypes.STRING(5),
        allowNull: false,
    },
    cve_ingreso: {
        type: DataTypes.STRING(20),
        allowNull: false,
    },
}, {
    tableName: 'tbl_extractor_cegrnac',
    timestamps: false,
});

module.exports = ExtractorCegrnac;
