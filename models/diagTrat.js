const { DataTypes } = require('sequelize');
const sequelize = require('../configs/database');
const UnidadesModel = require('./unidades');

const DiagTrat = sequelize.define('DiagTrat', {
    id_diagtrat: {
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
    date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    aux_diag_trat: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    total: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    tipo: {
        type: DataTypes.STRING(20),
        allowNull: true
    }
}, {
    tableName: 'tbl_diag_trat',
    timestamps: false
});

DiagTrat.beforeCreate(async (diagTrat, options) => {
    if (diagTrat.cvePresupuestal) {
        const unidad = await UnidadesModel.findByPk(diagTrat.cvePresupuestal);
        if (!unidad) {
            throw new Error('cvePresupuestal no existe en la tabla Unidades');
        }
    }
});

module.exports = DiagTrat;
