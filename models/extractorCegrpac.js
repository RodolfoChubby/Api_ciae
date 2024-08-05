const { DataTypes } = require('sequelize');
const sequelize = require('../configs/database');

const ExtractorCegrpac = sequelize.define('tbl_extractor_cegrpac', {
  id_extractorcegrpac: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  period: {
    type: DataTypes.STRING(6),
    allowNull: true
  },
  aniom: {
    type: DataTypes.INTEGER(11),
    allowNull: true
  },
  mesm: {
    type: DataTypes.INTEGER(11),
    allowNull: true
  },
  idDel: {
    type: DataTypes.STRING(10),
    allowNull: true
  },
  cvePresupuestal: {
    type: DataTypes.STRING(12),
    allowNull: true
  },
  tipoServicio: {
    type: DataTypes.STRING(10),
    allowNull: true
  },
  AFILIACION: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  AGREGADO: {
    type: DataTypes.STRING(50),
    allowNull: true
  },
  NOMBRE: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  EDAD_SEM: {
    type: DataTypes.INTEGER(11),
    allowNull: true
  },
  ADSCRIP: {
    type: DataTypes.STRING(50),
    allowNull: true
  },
  NO_ADS: {
    type: DataTypes.STRING(50),
    allowNull: true
  },
  PAQ: {
    type: DataTypes.STRING(50),
    allowNull: true
  },
  HOJA: {
    type: DataTypes.STRING(10),
    allowNull: true
  },
  ESPING: {
    type: DataTypes.STRING(10),
    allowNull: true
  },
  DIVING: {
    type: DataTypes.STRING(10),
    allowNull: true
  },
  FEING: {
    type: DataTypes.DATE,
    allowNull: true
  },
  HRING: {
    type: DataTypes.STRING(10),
    allowNull: true
  },
  TPING: {
    type: DataTypes.STRING(5),
    allowNull: true
  },
  PROGRAMA: {
    type: DataTypes.STRING(10),
    allowNull: true
  },
  CAMA: {
    type: DataTypes.STRING(10),
    allowNull: true
  },
  ESP: {
    type: DataTypes.STRING(10),
    allowNull: true
  },
  DIVs: {
    type: DataTypes.STRING(10),
    allowNull: true
  },
  FEEGR: {
    type: DataTypes.DATE,
    allowNull: true
  },
  HREGR: {
    type: DataTypes.STRING(10),
    allowNull: true
  },
  DIASEST: {
    type: DataTypes.STRING(10),
    allowNull: true
  },
  TPEGR: {
    type: DataTypes.STRING(10),
    allowNull: true
  },
  DiagInicialIngreso: {
    type: DataTypes.STRING(10),
    allowNull: true
  },
  DiagPrincipalEgreso: {
    type: DataTypes.STRING(10),
    allowNull: true
  },
  PrimerDiagSecundarioEgreso: {
    type: DataTypes.STRING(10),
    allowNull: true
  },
  SegundoDiagSecundarioEgr: {
    type: DataTypes.STRING(10),
    allowNull: true
  },
  TercerDiagSecundario: {
    type: DataTypes.STRING(10),
    allowNull: true
  },
  CuartoDiagSecundario: {
    type: DataTypes.STRING(10),
    allowNull: true
  },
  QuintoDiagSecundario: {
    type: DataTypes.STRING(10),
    allowNull: true
  },
  PrimeraComplicacionIntrahosp: {
    type: DataTypes.STRING(10),
    allowNull: true
  },
  SegundaComplicacionIntrahosp: {
    type: DataTypes.STRING(10),
    allowNull: true
  },
  TerceraComplicacionIntrahosp: {
    type: DataTypes.STRING(10),
    allowNull: true
  },
  CausaDirectaDefuncion: {
    type: DataTypes.STRING(10),
    allowNull: true
  },
  CausaBasicaDefuncion: {
    type: DataTypes.STRING(10),
    allowNull: true
  },
  CausaSecundariaDefuncion: {
    type: DataTypes.STRING(10),
    allowNull: true
  },
  METPPF: {
    type: DataTypes.STRING(10),
    allowNull: true
  },
  MOTALTA: {
    type: DataTypes.STRING(20),
    allowNull: true
  },
  TPINCAP: {
    type: DataTypes.STRING(20),
    allowNull: true
  },
  REGTOCO: {
    type: DataTypes.STRING(20),
    allowNull: true
  },
  REGINTQ: {
    type: DataTypes.STRING(20),
    allowNull: true
  },
  REGUCI: {
    type: DataTypes.STRING(20),
    allowNull: true
  },
  NO_PPF: {
    type: DataTypes.STRING(10),
    allowNull: true
  },
  GESTA: {
    type: DataTypes.STRING(10),
    allowNull: true
  },
  PARA: {
    type: DataTypes.STRING(10),
    allowNull: true
  },
  EST_VIH: {
    type: DataTypes.STRING(10),
    allowNull: true
  },
  ORIGEN: {
    type: DataTypes.STRING(10),
    allowNull: true
  },
  cve_egreso: {
    type: DataTypes.STRING(50),
    allowNull: true
  },
  cve_tipo_egreso: {
    type: DataTypes.STRING(50),
    allowNull: true
  },
  des_tipo_egreso: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  cve_tamiz: {
    type: DataTypes.STRING(10),
    allowNull: true
  },
  des_tamiz: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  cve_metodo_anticonceptivo: {
    type: DataTypes.STRING(10),
    allowNull: true
  },
  des_metodo_anticonceptivo: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  can_metodo_anticonceptivo: {
    type: DataTypes.STRING(10),
    allowNull: true
  },
  num_peso_rn: {
    type: DataTypes.STRING(10),
    allowNull: true
  },
  cve_alimentacion_rn: {
    type: DataTypes.STRING(10),
    allowNull: true
  },
  des_alimentacion_rn: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  cve_motivo_egreso: {
    type: DataTypes.STRING(10),
    allowNull: true
  },
  des_motivo_egreso: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  cve_envio: {
    type: DataTypes.STRING(10),
    allowNull: true
  },
  des_envio: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  DefuncionConAutopsia: {
    type: DataTypes.STRING(10),
    allowNull: true
  },
  ProcCamaCensable1: {
    type: DataTypes.STRING(10),
    allowNull: true
  },
  ProcCamaCensable2: {
    type: DataTypes.STRING(10),
    allowNull: true
  },
  ProcCamaCensable3: {
    type: DataTypes.STRING(10),
    allowNull: true
  },
  ProcCamaCensable4: {
    type: DataTypes.STRING(10),
    allowNull: true
  },
  ProcCamaCensable5: {
    type: DataTypes.STRING(10),
    allowNull: true
  },
  ProcCamaCensable6: {
    type: DataTypes.STRING(10),
    allowNull: true
  },
  ProcCamaCensable7: {
    type: DataTypes.STRING(10),
    allowNull: true
  },
  ProcCamaCensable8: {
    type: DataTypes.STRING(10),
    allowNull: true
  },
  ProcCamaCensable9: {
    type: DataTypes.STRING(10),
    allowNull: true
  },
  PinzamientoTardioCordon: {
    type: DataTypes.STRING(10),
    allowNull: true
  },
  ApegoInmediato: {
    type: DataTypes.STRING(10),
    allowNull: true
  },
  ReanimacionNeonatal: {
    type: DataTypes.STRING(10),
    allowNull: true
  },
  Surfactante: {
    type: DataTypes.STRING(10),
    allowNull: true
  },
  Fototerapia: {
    type: DataTypes.STRING(10),
    allowNull: true
  },
  Exanguinotransfusion: {
    type: DataTypes.STRING(10),
    allowNull: true
  },
  Salinoferesis: {
    type: DataTypes.STRING(10),
    allowNull: true
  },
  UltrasonidoTransfontanelar: {
    type: DataTypes.STRING(10),
    allowNull: true
  },
  SondaPleurostomia: {
    type: DataTypes.STRING(10),
    allowNull: true
  },
  VentilacionOxigeno: {
    type: DataTypes.STRING(10),
    allowNull: true
  },
  VentilacionCPAP: {
    type: DataTypes.STRING(10),
    allowNull: true
  },
  VentilacionMecanicaAsistida: {
    type: DataTypes.STRING(10),
    allowNull: true
  },
  ESTADORN1: {
    type: DataTypes.STRING(10),
    allowNull: true
  },
  ESTADORN2: {
    type: DataTypes.STRING(10),
    allowNull: true
  },
  ESTADORN3: {
    type: DataTypes.STRING(10),
    allowNull: true
  },
  ESTADORN4: {
    type: DataTypes.STRING(10),
    allowNull: true
  },
  ESTADORN5: {
    type: DataTypes.STRING(10),
    allowNull: true
  },
}, {
  timestamps: false,
  tableName: 'tbl_extractor_cegrpac'
});

module.exports = ExtractorCegrpac;
