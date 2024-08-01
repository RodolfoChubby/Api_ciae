const { DataTypes } = require('sequelize');
const sequelize = require('../configs/database');

const Cp03 = sequelize.define('Cp03', {
    id_cp03: {
        type: DataTypes.INTEGER(9),
        autoIncrement: true,
        primaryKey: true
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
        allowNull: false
    },
    h1_cdpv_dm_muj20a44_pob: {
        type: DataTypes.INTEGER(9),
        allowNull: true
    },
    h1_cdpv_dm_muj20a44_no: {
        type: DataTypes.INTEGER(9),
        allowNull: true
    },
    h1_cdpv_dm_muj20a44_cob: {
        type: DataTypes.DECIMAL(9, 2),
        allowNull: true
    },
    h1_cdpv_dm_muj20a44_ind: {
        type: DataTypes.DECIMAL(9, 2),
        allowNull: true
    },
    h1_cdpv_dm_hom20a44_pob: {
        type: DataTypes.INTEGER(9),
        allowNull: true
    },
    h1_cdpv_dm_hom20a44_no: {
        type: DataTypes.INTEGER(9),
        allowNull: true
    },
    h1_cdpv_dm_hom20a44_cob: {
        type: DataTypes.DECIMAL(9, 2),
        allowNull: true
    },
    h1_cdpv_dm_hom20a44_ind: {
        type: DataTypes.DECIMAL(9, 2),
        allowNull: true
    },
    h1_cdpv_dm_20mas_pob: {
        type: DataTypes.INTEGER(9),
        allowNull: true
    },
    h1_cdpv_dm_20mas_no: {
        type: DataTypes.INTEGER(9),
        allowNull: true
    },
    h1_cdpv_dm_20mas_cob: {
        type: DataTypes.DECIMAL(9, 2),
        allowNull: true
    },
    h1_cd_ha_hom20a29_pob: {
        type: DataTypes.INTEGER(9),
        allowNull: true
    },
    h1_cd_ha_hom20a29_no: {
        type: DataTypes.INTEGER(9),
        allowNull: true
    },
    h1_cd_ha_hom20a29_cob: {
        type: DataTypes.DECIMAL(9, 2),
        allowNull: true
    },
    h1_cd_ha_hom20a29_ind: {
        type: DataTypes.DECIMAL(9, 2),
        allowNull: true
    },
    h1_cd_ha_20mas_no: {
        type: DataTypes.INTEGER(9),
        allowNull: true
    },
    h1_cd_ha_20mas_pob: {
        type: DataTypes.INTEGER(9),
        allowNull: true
    },
    h1_cd_ha_20mas_cob: {
        type: DataTypes.DECIMAL(9, 2),
        allowNull: true
    },
    h1_cd_ha_muj20a29_pob: {
        type: DataTypes.INTEGER(9),
        allowNull: true
    },
    h1_cd_ha_muj20a29_no: {
        type: DataTypes.INTEGER(9),
        allowNull: true
    },
    h1_cd_ha_muj20a29_cob: {
        type: DataTypes.DECIMAL(9, 2),
        allowNull: true
    },
    h1_cd_ha_muj20a29_ind: {
        type: DataTypes.DECIMAL(9, 2),
        allowNull: true
    },
    h1_cd_col_muj20a44_pob: {
        type: DataTypes.INTEGER(9),
        allowNull: true
    },
    h1_cd_col_muj20a44_no: {
        type: DataTypes.INTEGER(9),
        allowNull: true
    },
    h1_cd_col_muj20a44_cob: {
        type: DataTypes.DECIMAL(9, 2),
        allowNull: true
    },
    h1_cd_col_muj20a44_ind: {
        type: DataTypes.DECIMAL(9, 2),
        allowNull: true
    },
    h1_cd_col_hom20a44_pob: {
        type: DataTypes.INTEGER(9),
        allowNull: true
    },
    h1_cd_col_hom20a44_no: {
        type: DataTypes.INTEGER(9),
        allowNull: true
    },
    h1_cd_col_hom20a44_cob: {
        type: DataTypes.DECIMAL(9, 2),
        allowNull: true
    },
    h1_cd_col_hom20a44_ind: {
        type: DataTypes.DECIMAL(9, 2),
        allowNull: true
    },
    h1_cd_col_20mas_pob: {
        type: DataTypes.INTEGER(9),
        allowNull: true
    },
    h1_cd_col_20mas_no: {
        type: DataTypes.INTEGER(9),
        allowNull: true
    },
    h1_cd_col_20mas_cob: {
        type: DataTypes.DECIMAL(9, 2),
        allowNull: true
    },
    h1_cd_col_20mas_ind: {
        type: DataTypes.DECIMAL(9, 2),
        allowNull: true
    },
    cvePresupuestal_h2: {
        type: DataTypes.STRING(15),
        allowNull: true
    },
    h2_tnle_menores1: {
        type: DataTypes.INTEGER(9),
        allowNull: true
    },
    h2_tnle_no: {
        type: DataTypes.INTEGER(9),
        allowNull: true
    },
    h2_tnle_cob: {
        type: DataTypes.DECIMAL(9, 2),
        allowNull: true
    },
    h2_tnle_menores1_mes: {
        type: DataTypes.INTEGER(9),
        allowNull: true
    },
    h2_n1mle_no: {
        type: DataTypes.INTEGER(9),
        allowNull: true
    },
    h2_n1mle_cob: {
        type: DataTypes.DECIMAL(9, 2),
        allowNull: true
    },
    h2_n2mle_no: {
        type: DataTypes.INTEGER(9),
        allowNull: true
    },
    h2_n2mle_cob: {
        type: DataTypes.DECIMAL(9, 2),
        allowNull: true
    },
    h2_n3mle_no: {
        type: DataTypes.INTEGER(9),
        allowNull: true
    },
    h2_n3mle_cob: {
        type: DataTypes.DECIMAL(9, 2),
        allowNull: true
    },
    h2_n4mle_no: {
        type: DataTypes.INTEGER(9),
        allowNull: true
    },
    h2_n4mle_cob: {
        type: DataTypes.DECIMAL(9, 2),
        allowNull: true
    },
    h2_n5mle_no: {
        type: DataTypes.INTEGER(9),
        allowNull: true
    },
    h2_n5mle_cob: {
        type: DataTypes.DECIMAL(9, 2),
        allowNull: true
    },
    h2_n6mle_no: {
        type: DataTypes.INTEGER(9),
        allowNull: true
    },
    h2_n6mle_cob: {
        type: DataTypes.DECIMAL(9, 2),
        allowNull: true
    },
    h2_aband_lac_materna: {
        type: DataTypes.INTEGER(9),
        allowNull: true
    },
    cvePresupuestal_h3: {
        type: DataTypes.STRING(15),
        allowNull: true
    },
    h3_tamiz_pob_recnac: {
        type: DataTypes.INTEGER(9),
        allowNull: true
    },
    h3_tamiz_no: {
        type: DataTypes.INTEGER(9),
        allowNull: true
    },
    h3_tamiz_cobertura: {
        type: DataTypes.DECIMAL(9, 2),
        allowNull: true
    },
    h3_tamiz_inds_hipodotirismo_congenito: {
        type: DataTypes.DECIMAL(9, 2),
        allowNull: true
    },
    h3_tamiz_inds_hiperplasia_adenal_congenita: {
        type: DataTypes.DECIMAL(9, 2),
        allowNull: true
    },
    h3_tamiz_inds_deficiencia_de_biotinidasa: {
        type: DataTypes.DECIMAL(9, 2),
        allowNull: true
    },
    h3_tamiz_inds_fenilcetonuria: {
        type: DataTypes.DECIMAL(9, 2),
        allowNull: true
    },
    h3_tamiz_inds_galactosemia: {
        type: DataTypes.DECIMAL(9, 2),
        allowNull: true
    },
    h3_masto_pob_40_49: {
        type: DataTypes.INTEGER(9),
        allowNull: true
    },
    h3_masto_no: {
        type: DataTypes.INTEGER(9),
        allowNull: true
    },
    h3_masto_cobertura: {
        type: DataTypes.DECIMAL(9, 2),
        allowNull: true
    },
    h3_masto_inds: {
        type: DataTypes.DECIMAL(9, 2),
        allowNull: true
    },
    h3_geria_pob: {
        type: DataTypes.INTEGER(9),
        allowNull: true
    },
    h3_geria_cobertura: {
        type: DataTypes.DECIMAL(9, 2),
        allowNull: true
    },
    h3_geria_inds_sindrome_caidas: {
        type: DataTypes.DECIMAL(9, 2),
        allowNull: true
    },
    h3_geria_inds_sindrome_inmovilidad: {
        type: DataTypes.DECIMAL(9, 2),
        allowNull: true
    },
    h3_geria_inds_sindrome_deterioro_cognitivo: {
        type: DataTypes.DECIMAL(9, 2),
        allowNull: true
    },
    h3_geria_inds_sindrome_incontigencia_urinaria: {
        type: DataTypes.DECIMAL(9, 2),
        allowNull: true
    }
}, {
    tableName: 'tbl_cp03',
    timestamps: false
});

module.exports = Cp03;
