const { DataTypes } = require('sequelize');
const sequelize = require('../configs/database'); 
const UnidadesModel = require('./unidades');

const ConsultExt = sequelize.define('ConsultExt', {
    id_consultext: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    cvePresupuestal: {
        type: DataTypes.STRING(15),
        allowNull: false,
        references: {
            model: 'Unidades', 
            key: 'cvePresupuestal'
        }
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    especialidades: {
        type: DataTypes.INTEGER(9),
        allowNull: false
    },
    paramedicas: {
        type: DataTypes.INTEGER(9),
        allowNull: false
    },
    urgencias: {
        type: DataTypes.INTEGER(9),
        allowNull: false
    },
    totales: {
        type: DataTypes.INTEGER(9),
        allowNull: false
    }
}, {
    tableName: 'tbl_consult_ext',
    timestamps: false
});

ConsultExt.beforeCreate(async (consultExt, options) => {
    if (consultExt.cvePresupuestal) {
        const unidad = await UnidadesModel.findByPk(consultExt.cvePresupuestal);
        if (!unidad) {
            throw new Error('cvePresupuestal no existe en la tabla Unidades');
        }
    }
});

module.exports = ConsultExt;
