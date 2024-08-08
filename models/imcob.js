const { DataTypes } = require('sequelize');
const sequelize = require('../configs/database'); 
const UnidadesModel = require('./unidades');

const Imcob = sequelize.define('Imcob', {
    id_imcob: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
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
        allowNull: true,
    },
    hm_adultos_20a59: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    hm_cartilla_20a59: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    hm_pesoytalla_20a59_mes: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    hm_sobrepeso_20a59: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    hm_obesidad20a59: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    hm_cob_obesidad_20a59: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    hm_obesidad_central_20a59: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    hm_medicion_cintura_20a59: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    hm_pob_20a39: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    hm_sr_20a39: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    hm_pob_50a59: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    hm_influenza_50a59: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    hm_pob_25a64: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    hm_est_cacu_pob_25a64: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    hm_det_cacu_pob_25a64: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    hm_cacu_mes_sos_25a64: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    hm_cacu_mes_25a64: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    hm_pob_25a69: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    hm_det_camama_25a69: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    hm_camama_mes_sos_25a69: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    hm_pob_50a69: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    hm_det_mast_50a69: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    hm_mast_mes_sos_50a69: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    hm_pob_45a59: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    hm_prev_diab_pob_45a59: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    hm_det_diab_45a59: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    hm_diab_mes_sos_45a59: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    hm_diab_mes_45a59: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    hm_pob_30a59: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    hm_prev_hiper_30a59: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    hm_det_hiper_30a59: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    hm_hiper_mes_30a59: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    hm_det_tb_20a59: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    hm_tb_mes_sos_20a59: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    hm_tb_mes_20a59: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    hh_adultos_20a59: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    hh_cartilla_20a59: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    hh_pesoytalla_20a59: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    hh_pesoytalla_20a59_mes: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    hh_sobrepeso_20a59: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    hh_obesidad_20a59: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    hh_medicion_cintura_20a59: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    hh_obesidad_central_20a59: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    hh_pob_20a39: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    hh_sr_20a39: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    hh_pob_50a59: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    hh_influenza_50a59: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    hh_pob_45a59: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    hh_prev_diab_pob_45a59: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    hh_det_diab_45a59: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    hh_diab_mes_sos_45a59: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    hh_diab_mes_45a59: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    hh_pob_30a59: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    hh_prev_hiper_30a59: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    hh_det_hiper_30a59: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    hh_hiper_mes_sos_30a59: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    hh_hiper_mes_30a59: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    hh_det_tb_20a59: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    hh_tb_mes_sos_20a59: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    hh_tb_mes_20a59: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    ha_adultos_60: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    ha_cartilla_60: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    ha_pesoytalla_60: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    ha_pesoytalla_60_mes: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    ha_desnutricion_60: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    ha_sobrepeso_60: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    ha_obesidad_60: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    ha_obesidad_central_60: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    ha_medicion_cintura_60: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    ha_neumo_60: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    ha_influenza_60: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    ha_prev_diab_pob_60: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    ha_det_diab_60: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    ha_diab_mes_sos_60: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    ha_diab_mes_60: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    ha_prev_hiper_60: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    ha_det_hiper_60: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    ha_hiper_mes_sos_60: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    ha_hiper_mes_60: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    ha_det_tb_60: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    ha_tb_mes_sos_60: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    ha_tb_mes_60: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
}, {
    tableName: 'tbl_imcob',
    timestamps: false,
});

Imcob.beforeCreate(async (imcob, options) => {
    if (imcob.cvePresupuestal) {
        const unidad = await UnidadesModel.findByPk(imcob.cvePresupuestal);
        if (!unidad) {
            throw new Error('cvePresupuestal no existe en la tabla Unidades');
        }
    }
});

module.exports = Imcob;
