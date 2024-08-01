const { DataTypes } = require('sequelize');
const sequelize = require('../configs/database');
const UnidadesModel = require('./unidades');

const BaseCusn11 = sequelize.define('BaseCusn11', {
    id_cusn11: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    cvePresupuestal: {
        type: DataTypes.INTEGER(15),
        allowNull: false,
        references: {
            model: 'unidades',
            key: 'cvePresupuestal'
        }
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    num: {
        type: DataTypes.INTEGER(10),
        allowNull: true
    },
    den: {
        type: DataTypes.INTEGER(10),
        allowNull: true
    }
}, {
    tableName: 'tbl_base_cusn11',
    timestamps: false
});

// Hook para validar que cvePresupuestal existe en la tabla Unidades
BaseCusn11.beforeCreate(async (entry, options) => {
    if (entry.cvePresupuestal) {
        const unidad = await UnidadesModel.findByPk(entry.cvePresupuestal);
        if (!unidad) {
            throw new Error('cvePresupuestal no existe en la tabla Unidades');
        }
    }
});

module.exports = BaseCusn11;
