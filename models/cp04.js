const { DataTypes } = require('sequelize');
const sequelize = require('../configs/database'); 
const UnidadesModel = require('./unidades');

const Cp04 = sequelize.define('Cp04', {
    id_cp04: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    cvePresupuestal: {
        type: DataTypes.STRING(15),
        allowNull: false,
        references: {
            model: 'unidades', 
            key: 'cvePresupuestal'
        }
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    diabetes_det_pob_20: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
    },
    diabetes_det_pob_20_mes: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
    },
    diabetes_sos_pob_20_mes: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
    },
    diabetes_con_pob_20: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
    },
    diabetes_ind_pob_20: {
        type: DataTypes.DECIMAL(9, 2),
        allowNull: false,
        defaultValue: 0.00,
    },
    hiperten_sos_pob_20_mes: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
    },
    hiperten_ind_pob_20: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
    },
    hiperten_det_pob_20: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
    },
    hiperten_det_pob_20_mes: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
    },
    hiperten_con_pob_20: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
    }
}, {
    tableName: 'tbl_cp04',
    timestamps: false,
});

Cp04.beforeCreate(async (cp04, options) => {
    if (cp04.cvePresupuestal) {
        const unidad = await UnidadesModel.findByPk(cp04.cvePresupuestal);
        if (!unidad) {
            throw new Error('cvePresupuestal no existe en la tabla Unidades');
        }
    }
});

module.exports = Cp04;
