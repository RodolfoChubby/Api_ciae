const { DataTypes } = require('sequelize');
const sequelize = require('../configs/database');
const UnidadesModel = require('./unidades');

const BaseEfe = sequelize.define('BaseEfe', {
    id_baseefe: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    cvePresupuestal: {
        type: DataTypes.INTEGER(12),
        allowNull: false,
        references: {
            model: 'unidades',
            key: 'cvePresupuestal'
        }
    },
    ide_eda_ano: {
        type: DataTypes.INTEGER(3),
        allowNull: true
    },
    ide_sex: {
        type: DataTypes.STRING(10),
        allowNull: true
    },
    fec_notif_juris: {
        type: DataTypes.DATE,
        allowNull: true
    },
    fec_notif_edo: {
        type: DataTypes.DATE,
        allowNull: true
    },
    fec_notif_dge: {
        type: DataTypes.DATE,
        allowNull: true
    },
    fec_estudio_juris: {
        type: DataTypes.DATE,
        allowNull: true
    },
    fec_ini_exant: {
        type: DataTypes.DATE,
        allowNull: true
    },
    year: {
        type: DataTypes.INTEGER(4),
        allowNull: true
    },
    semana: {
        type: DataTypes.INTEGER(2),
        allowNull: true
    },
    des_diag_presun: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    fec_clasf: {
        type: DataTypes.DATE,
        allowNull: true
    },
    des_clasf_final: {
        type: DataTypes.STRING(15),
        allowNull: true
    },
    fec_clasif_final: {
        type: DataTypes.DATE,
        allowNull: true
    },
    des_diag_final: {
        type: DataTypes.STRING(15),
        allowNull: true
    },
    fec_toma_lesp: {
        type: DataTypes.DATE,
        allowNull: true
    },
    fec_envio_lesp: {
        type: DataTypes.DATE,
        allowNull: true
    },
    fec_resul_lesp: {
        type: DataTypes.DATE,
        allowNull: true
    },
    des_resultadoi: {
        type: DataTypes.STRING(15),
        allowNull: true
    },
    fec_resu_indrei: {
        type: DataTypes.DATE,
        allowNull: true
    }
}, {
    tableName: 'tbl_baseefe',
    timestamps: false
});

module.exports = BaseEfe;
