const { DataTypes } = require('sequelize');
const sequelize = require('../configs/database'); // Ajusta la ruta según la configuración de tu proyecto
const Unidades = require('./unidades');

const Cip01 = sequelize.define('Cip01', {
    id_cip01: {
        type: DataTypes.INTEGER(9),
        autoIncrement: true,
        primaryKey: true
    },
    cvePresupuestal: {
        type: DataTypes.STRING(15),
        allowNull: false
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

module.exports = Cip01;