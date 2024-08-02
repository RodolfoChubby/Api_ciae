const { DataTypes } = require('sequelize');
const sequelize = require('../configs/database');
const UnidadesModel = require('./unidades');

const CensoDmeh = sequelize.define('CensoDmeh', {
    id_censodmeh: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
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
    diag: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    pac_ccons_dmeh_sant_cen_prev: {
        type: DataTypes.INTEGER(10),
        allowNull: true
    },
    pac_scons_dmeh_cant_cen_prev: {
        type: DataTypes.INTEGER(10),
        allowNull: true
    },
    pac_ccons_dmeh_cant_cen_prev: {
        type: DataTypes.INTEGER(10),
        allowNull: true
    },
    pac_cdmeh_iden_egr_cant_neg_cons_pnvl: {
        type: DataTypes.INTEGER(10),
        allowNull: true
    },
    pac_cdmeh_iden_urg_cant_neg_cons_pnvl: {
        type: DataTypes.INTEGER(10),
        allowNull: true
    },
    totales: {
        type: DataTypes.INTEGER(15),
        allowNull: true
    }
}, {
    tableName: 'tbl_censo_dmeh',
    timestamps: false
});

CensoDmeh.beforeCreate(async (censoDmeh, options) => {
    if (censoDmeh.cvePresupuestal) {
        const unidad = await UnidadesModel.findByPk(censoDmeh.cvePresupuestal);
        if (!unidad) {
            throw new Error('cvePresupuestal no existe en la tabla Unidades');
        }
    }
});

// Hook para calcular el total antes de crear o actualizar
CensoDmeh.beforeCreate(async (censo, options) => {
    censo.totales = (censo.pac_ccons_dmeh_sant_cen_prev || 0) +
        (censo.pac_scons_dmeh_cant_cen_prev || 0) +
        (censo.pac_ccons_dmeh_cant_cen_prev || 0) +
        (censo.pac_cdmeh_iden_egr_cant_neg_cons_pnvl || 0) +
        (censo.pac_cdmeh_iden_urg_cant_neg_cons_pnvl || 0);
});

CensoDmeh.beforeUpdate(async (censo, options) => {
    censo.totales = (censo.pac_ccons_dmeh_sant_cen_prev || 0) +
        (censo.pac_scons_dmeh_cant_cen_prev || 0) +
        (censo.pac_ccons_dmeh_cant_cen_prev || 0) +
        (censo.pac_cdmeh_iden_egr_cant_neg_cons_pnvl || 0) +
        (censo.pac_cdmeh_iden_urg_cant_neg_cons_pnvl || 0);
});

module.exports = CensoDmeh;
