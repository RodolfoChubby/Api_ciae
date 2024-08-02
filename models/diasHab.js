const { DataTypes } = require('sequelize');
const sequelize = require('../configs/database'); // Ajusta la ruta según la configuración de tu proyecto

const DiasHab = sequelize.define('DiasHab', {
    id_diashab: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    dias_hab_acum: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            min: 0 
        }
    },
    dias_cal_acum: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            min: 0 
        }
    },
    dias_hab: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            min: 0 
        }
    },
    dias_cal: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            min: 0 
        }
    },
    dias_fin: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            min: 0 
        }
    }
}, {
    tableName: 'tbl_dias_hab',
    timestamps: false
});

module.exports = DiasHab;
