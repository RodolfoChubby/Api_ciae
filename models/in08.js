const { DataTypes } = require('sequelize');
const sequelize = require('../configs/database');
const UnidadesModel = require('./unidades');

const In08 = sequelize.define('In08', {
    id_in08: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        field: 'id_in08'
    },
    cvePresupuestal: {
        type: DataTypes.STRING(15),
        allowNull: false,
        field: 'cvePresupuestal',
        references: {
            model: 'unidades', 
            key: 'cvePresupuestal'
        }
    },
    fecha: {
        type: DataTypes.DATE,
        allowNull: true,
        field: 'fecha'
    },
    tot_cons_mf_num: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: 'tot_cons_mf_num'
    },
    tot_cons_mf_porc: {
        type: DataTypes.DECIMAL(9, 2),
        allowNull: true,
        field: 'tot_cons_mf_porc'
    },
    pac_ref_segnvl_num: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: 'pac_ref_segnvl_num'
    },
    pac_ref_segnvl_porc: {
        type: DataTypes.DECIMAL(9, 2), 
        allowNull: true,
        field: 'pac_ref_segnvl_porc'
    },
    tot_pas_segnvl_num: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: 'tot_pas_segnvl_num'
    },
    tot_pas_segnvl_porc: {
        type: DataTypes.DECIMAL(9, 2), 
        allowNull: true,
        field: 'tot_pas_segnvl_porc'
    }
}, {
    tableName: 'tbl_in08',
    timestamps: false,
    indexes: [
        {
            name: 'idx_cvePresupuestal',
            fields: ['cvePresupuestal'] 
        }
    ]
});

In08.beforeCreate(async (in08, options) => {
    if (in08.cvePresupuestal) {
        const unidad = await UnidadesModel.findByPk(in08.cvePresupuestal);
        if (!unidad) {
            throw new Error('cvePresupuestal no existe en la tabla Unidades');
        }
    }
});

module.exports = In08;
