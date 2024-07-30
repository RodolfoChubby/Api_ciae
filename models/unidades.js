const { DataTypes } = require('sequelize');
const sequelize = require('../configs/database');

const Unidades = sequelize.define('Unidades', {
    cvePresupuestal: {
        type: DataTypes.INTEGER(50),
        allowNull: false,
        primaryKey: true
    },
    unidad: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    tipo_unidad: {
        type: DataTypes.STRING(5),
        allowNull: false
    },
    delegacion: {
        type: DataTypes.STRING(15),
        allowNull: false
    },
    direccion: {
        type: DataTypes.STRING(150),
        allowNull: true
    },
    municipio: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    ini_servicio: {
        type: DataTypes.DATE,
        allowNull: true
    },
    is_deleted: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
}, {
    tableName: 'unidades',
    timestamps: false
});

module.exports = Unidades;
