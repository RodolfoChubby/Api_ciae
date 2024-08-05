const { DataTypes } = require('sequelize');
const sequelize = require('../configs/database');
const UnidadesModel = require('./unidades');

const Egresos = sequelize.define('Egresos', {
    id_egreso: {
        type: DataTypes.INTEGER,
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
    fecha: {
        type: DataTypes.DATE,
        allowNull: false
    },
    egresos: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    division: {
        type: DataTypes.STRING(30)
    }
}, {
    tableName: 'tbl_egresos',
    timestamps: false,
    indexes: [
        {
            name: 'idx_cvePresupuestal',
            fields: ['cvePresupuestal']
        },
        {
            name: 'idx_fecha',
            fields: ['fecha']
        }
    ]
});

Egresos.beforeCreate(async (egresos, options) => {
    if (egresos.cvePresupuestal) {
        const unidad = await UnidadesModel.findByPk(egresos.cvePresupuestal);
        if (!unidad) {
            throw new Error('cvePresupuestal no existe en la tabla Unidades');
        }
    }
});

module.exports = Egresos;