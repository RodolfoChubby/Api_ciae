const { DataTypes } = require('sequelize');
const sequelize = require('../configs/database'); 

const Consmf = sequelize.define('ConsMf', {
    id_consmf: {
        type: DataTypes.INTEGER(9),
        autoIncrement: true,
        primaryKey: true,
    },
    cvePresupuestal: {
        type: DataTypes.STRING(15),
        allowNull: false,
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

module.exports = Consmf;
