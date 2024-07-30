const { DataTypes } = require('sequelize');
const sequelize = require('../configs/database');
const UnidadesModel = require('./unidades');

const Usuario = sequelize.define('Usuario', {
    usua_matricula: {
        type: DataTypes.INTEGER(8),
        allowNull: false,
        primaryKey: true
    },
    cvePresupuestal: {
        type: DataTypes.INTEGER(12),
        allowNull: false,
        references: {
            model: 'unidades',
            key: 'cvePresupuestal'
        }
    },
    nombres: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    apeido_pat: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    apeido_mat: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    telefono: {
        type: DataTypes.STRING(15),
        allowNull: true
    },
    email: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    password: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    rol: {
        type: DataTypes.STRING(10),
        allowNull: true
    }
}, {
    tableName: 'usuario',
    timestamps: false
});

// Hook para validar que cvePresupuestal existe en la tabla Unidades
Usuario.beforeCreate(async (usuario, options) => {
    if (usuario.cvePresupuestal) {
        const unidad = await UnidadesModel.findByPk(usuario.cvePresupuestal);
        if (!unidad) {
            throw new Error('cvePresupuestal no existe en la tabla Unidades');
        }
    }
});

module.exports = Usuario;
