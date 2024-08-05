const { DataTypes } = require('sequelize');
const sequelize = require('../configs/database'); 
const UnidadesModel = require('./unidades'); 

const DiasPaciente = sequelize.define('DiasPaciente', {
    id_diaspaciente: {
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
    cirugia: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: false
    },
    gineco_obstetrica: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: false
    },
    medicina: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: false
    },
    pedriatria: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: false
    },
    total: {
    type: DataTypes.INTEGER,
    allowNull: true
    }
}, {
    tableName: 'tbl_dias_paciente',
    timestamps: false
});

DiasPaciente.beforeCreate(async (diasPaciente, options) => {
    if (diasPaciente.cvePresupuestal) {
        const unidad = await UnidadesModel.findByPk(diasPaciente.cvePresupuestal);
        if (!unidad) {
            throw new Error('cvePresupuestal no existe en la tabla Unidades');
        }
    }
});

module.exports = DiasPaciente;
