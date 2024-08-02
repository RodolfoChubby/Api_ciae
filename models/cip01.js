const { DataTypes } = require('sequelize');
const sequelize = require('../configs/database'); // Ajusta la ruta según la configuración de tu proyecto
const UnidadesModel = require('./unidades');

const Cip01 = sequelize.define('Cip01', {
    id_cip01: {
        type: DataTypes.INTEGER(9),
        autoIncrement: true,
        primaryKey: true
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
        allowNull: true
    },
    pob_derhab: {
        type: DataTypes.INTEGER(9),
        allowNull: true
    },
    cob_derhab_aten_int_no: {
        type: DataTypes.INTEGER(9),
        allowNull: true
    },
    cob_derhab_aten_int_cip: {
        type: DataTypes.INTEGER(9),
        allowNull: true
    }
}, {
    tableName: 'tbl_cip01',
    timestamps: false
});

Cip01.beforeCreate(async (cip01, options) => {
    if (cip01.cvePresupuestal) {
        const unidad = await UnidadesModel.findByPk(cip01.cvePresupuestal);
        if (!unidad) {
            throw new Error('cvePresupuestal no existe en la tabla Unidades');
        }
    }
});

module.exports = Cip01;