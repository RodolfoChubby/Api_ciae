const { DataTypes } = require('sequelize');
const sequelize = require('../configs/database'); 
const UnidadesModel = require('./unidades');

const Consmf = sequelize.define('ConsMf', {
    id_consmf: {
        type: DataTypes.INTEGER(9),
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
    cons_mf: {
        type: DataTypes.INTEGER(9),
        allowNull: false,
        validate: {
            min: 0
        }
    }
}, {
    tableName: 'tbl_cons_mf',
    timestamps: false 
});

Consmf.beforeCreate(async (consmf, options) => {
    if (consmf.cvePresupuestal) {
        const unidad = await UnidadesModel.findByPk(consmf.cvePresupuestal);
        if (!unidad) {
            throw new Error('cvePresupuestal no existe en la tabla Unidades');
        }
    }
});

module.exports = Consmf;
