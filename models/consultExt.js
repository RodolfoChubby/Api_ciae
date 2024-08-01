const { DataTypes } = require('sequelize');
const sequelize = require('../configs/database'); 

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

module.exports = ConsultExt;
