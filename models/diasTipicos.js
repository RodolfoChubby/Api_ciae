const { DataTypes } = require('sequelize');
const sequelize = require('../configs/database'); 
const UnidadesModel = require('./unidades');

const DiasTipicos = sequelize.define('DiasTipicos', {
    id_diastipicos: {
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
    date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    cons_otorg: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
    cons_mf: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
    cons_esp: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
    cons_den: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
    aten_urg: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
    egr_hosp: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
    dias_pac: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
    int_quir: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
    part_aten: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
    nac_vivos: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
    anal_clin: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
    est_radio: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
    est_ecos: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
    est_tomo_axial: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
    est_fisio_cardio: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
    est_res_magn: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
    ses_radio: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
    ses_inhalo: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
    ses_hemod: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
    est_hemod: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
    est_electmiog: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
    est_endos: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
    ses_med_fis: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
    est_electrocard: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
    est_electroencefalo: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
    ses_med_nuc: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
    ses_lito: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    }
}, {
    tableName: 'tbl_dias_tipicos',
    timestamps: false,
    indexes: [
        {
            unique: false,
            fields: ['date']
        },
        {
            unique: false,
            fields: ['cvePresupuestal']
        }
    ]
});

DiasTipicos.beforeCreate(async (DiasTipicos, options) => {
    if (DiasTipicos.cvePresupuestal) {
        const unidad = await UnidadesModel.findByPk(DiasTipicos.cvePresupuestal);
        if (!unidad) {
            throw new Error('cvePresupuestal no existe en la tabla Unidades');
        }
    }
});

module.exports = DiasTipicos;
