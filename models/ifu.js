const { DataTypes } = require('sequelize');
const sequelize = require('../configs/database');
const UnidadesModel = require('../models/unidades')

const Ifu = sequelize.define('Ifu', {
    'id_ifu': {
        type: DataTypes.INTEGER(9),
        autoIncrement: true,
        primaryKey: true,
        field: 'id_ifu'
    },
    'cvePresupuestal': {
        type: DataTypes.STRING(15),
        allowNull: false,
        field: 'cvePresupuestal',
        references: {
            model: 'unidades',
            key: 'cvePresupuestal'
        }
    },
    'date': {
        type: DataTypes.DATE,
        allowNull: true,
        field: 'date'
    },
    '00050_sup_tot_m2': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '00050_sup_tot_m2'
    },
    '00051_sup_con_m2': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '00051_sup_con_m2'
    },
    '50100_tot_cam_cens': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '50100_tot_cam_cens'
    },
    '50200_cama_alerg_inmuno': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '50200_cama_alerg_inmuno'
    },
    '50300_cama_audio_otoneu': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '50300_cama_audio_otoneu'
    },
    '50400_cama_angio': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '50400_cama_angio'
    },
    '50500_cama_cirugía_maxilofacial': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '50500_cama_cirugía_maxilofacial'
    },
    '50600_cama_cardi': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '50600_cama_cardi'
    },
    '50700_cama_cirug_toraci': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '50700_cama_cirug_toraci'
    },
    '50800_cama_cirugia_general': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '50800_cama_cirugia_general'
    },
    '50900_cama_derma': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '50900_cama_derma'
    },
    '51000_cama_endoc': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '51000_cama_endoc'
    },
    '51100_cama_gastr': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '51100_cama_gastr'
    },
    '51200_tot_cam_gin_obs': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '51200_tot_cam_gin_obs'
    },
    '51201_cama_ginec': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '51201_cama_ginec'
    },
    '51202_cama_bio_rep': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '51202_cama_bio_rep'
    },
    '51203_cama_obste': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '51203_cama_obste'
    },
    '51204_cama_perin': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '51204_cama_perin'
    },
    '51205_cama_med_mat_fetal': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '51205_cama_med_mat_fetal'
    },
    '51206_cama_preeclam_eclampsia': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '51206_cama_preeclam_eclampsia'
    },
    '51207_cama_emb_alt_riesg': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '51207_cama_emb_alt_riesg'
    },
    '51300_cama_hemat': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '51300_cama_hemat'
    },
    '51400_cama_infec': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '51400_cama_infec'
    },
    '51500_cama_medicina_interna': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '51500_cama_medicina_interna'
    },
    '51600_cama_nefro': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '51600_cama_nefro'
    },
    '51700_cama_neumo': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '51700_cama_neumo'
    },
    '51800_cama_neuro': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '51800_cama_neuro'
    },
    '51900_cama_geronto': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '51900_cama_geronto'
    },
    '52000_cama_oftalmo': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '52000_cama_oftalmo'
    },
    '52100_cama_otorrino': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '52100_cama_otorrino'
    },
    '52200_tot_cam_cun_ped': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '52200_tot_cam_cun_ped'
    },
    '52300_tot_cam_ped': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '52300_tot_cam_ped'
    },
    '52301_cama_ped_med': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '52301_cama_ped_med'
    },
    '52305_cama_esc_adolesc': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '52305_cama_esc_adolesc'
    },
    '52307_cama_gen_ped': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '52307_cama_gen_ped'
    },
    '52310_cama_lactantes': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '52310_cama_lactantes'
    },
    '52316_cama_preescolares': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '52316_cama_preescolares'
    },
    '52318_cama_salud_men_psiq_ped': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '52318_cama_salud_men_psiq_ped'
    },
    '52400_tot_cun_ped': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '52400_tot_cun_ped'
    },
    '52401_cuna_ped_med': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '52401_cuna_ped_med'
    },
    '52406_cuna_gene_ped': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '52406_cuna_gene_ped'
    },
    '52409_cuna_lactantes': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '52409_cuna_lactantes'
    },
    '52416_cuna_reuma_ped': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '52416_cuna_reuma_ped'
    },
    '52417_cuna_sal_men_psiq_ped': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '52417_cuna_sal_men_psiq_ped'
    },
    '52418_cuna_neona': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '52418_cuna_neona'
    },
    '52500_cuna_prematuros_pato': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '52500_cuna_prematuros_pato'
    },
    '52502_cuna_cal_rad': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '52502_cuna_cal_rad'
    },
    '52503_cuna_cal_rad_prem': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '52503_cuna_cal_rad_prem'
    },
    '52600_incub_prematuros_pato': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '52600_incub_prematuros_pato'
    },
    '52700_incub_cun_pato': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '52700_incub_cun_pato'
    },
    '52800_tot_cam_proct': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '52800_tot_cam_proct'
    },
    '52801_cama_colon_recto': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '52801_cama_colon_recto'
    },
    '52802_cama_coloprocto': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '52802_cama_coloprocto'
    },
    '52900_tot_cam_psiqu': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '52900_tot_cam_psiqu'
    },
    '52901_cama_psiq_adult': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '52901_cama_psiq_adult'
    },
    '52902_cama_psiq_ped': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '52902_cama_psiq_ped'
    },
    '52903_cama_psiq_tiemp_parc': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '52903_cama_psiq_tiemp_parc'
    },
    '53000_cama_reuma': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '53000_cama_reuma'
    },
    '53100_cama_microesferas': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '53100_cama_microesferas'
    },
    '53200_tot_cam_traum_ort': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '53200_tot_cam_traum_ort'
    },
    '53201_cama_trauma': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '53201_cama_trauma'
    },
    '53202_cama_rodilla': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '53202_cama_rodilla'
    },
    '53203_cama_miembro_toracico': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '53203_cama_miembro_toracico'
    },
    '53204_cama_trauma_polifract_exp': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '53204_cama_trauma_polifract_exp'
    },
    '53205_cama_tobillo_pie': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '53205_cama_tobillo_pie'
    },
    '53206_cadera_pelvis': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '53206_cadera_pelvis'
    },
    '53207_cama_columna': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '53207_cama_columna'
    },
    '53208_cirugia_mano': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '53208_cirugia_mano'
    },
    '53209_cama_ortopedia': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '53209_cama_ortopedia'
    },
    '53210_cama_cir_cab_cue': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '53210_cama_cir_cab_cue'
    },
    '53211_cama_cir_toraco_abd': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '53211_cama_cir_toraco_abd'
    },
    '53212_cama_columna_cad': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '53212_cama_columna_cad'
    },
    '53213_cama_diafisis': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '53213_cama_diafisis'
    },
    '53214_cama_fract': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '53214_cama_fract'
    },
    '53215_cama_miembro_pelvico': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '53215_cama_miembro_pelvico'
    },
    '53216_cama_reempl_art': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '53216_cama_reempl_art'
    },
    '53217_cama_circoelect_politraum': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '53217_cama_circoelect_politraum'
    },
    '53218_cama_trauma_orto_ped': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '53218_cama_trauma_orto_ped'
    },
    '53219_cuna_trauma_orto_ped': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '53219_cuna_trauma_orto_ped'
    },
    '53300_cama_geriatria': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '53300_cama_geriatria'
    },
    '53400_cama_urologia': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '53400_cama_urologia'
    },
    '53500_cama_neurocir': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '53500_cama_neurocir'
    },
    '53600_tot_cam_cun_cir': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '53600_tot_cam_cun_cir'
    },
    '53601_cama_cuna_cir_ped': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '53601_cama_cuna_cir_ped'
    },
    '53602_cama_cuna_trauma_ped': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '53602_cama_cuna_trauma_ped'
    },
    '53603_cama_cuna_orto_ped': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '53603_cama_cuna_orto_ped'
    },
    '53604_cama_cuna_cir_cardio_ped': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '53604_cama_cuna_cir_cardio_ped'
    },
    '53605_cama_cuna_cir_gastroembrio': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '53605_cama_cuna_cir_gastroembrio'
    },
    '53606_cama_cuna_cir_maxilo_ped': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '53606_cama_cuna_cir_maxilo_ped'
    },
    '53607_cama_cuna_min_ped': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '53607_cama_cuna_min_ped'
    },
    '53608_cama_cuna_cir_reconst': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '53608_cama_cuna_cir_reconst'
    },
    '53609_cama_cuna_cir_toracica_neumoped': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '53609_cama_cuna_cir_toracica_neumoped'
    },
    '53610_cama_cuna_neuro_ped': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '53610_cama_cuna_neuro_ped'
    },
    '53611_cama_cuna_oftalmo_ped': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '53611_cama_cuna_oftalmo_ped'
    },
    '53612_cama_cuna_otorrino_ped': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '53612_cama_cuna_otorrino_ped'
    },
    '53613_cama_cuna_urolo_ped': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '53613_cama_cuna_urolo_ped'
    },
    '53620_tot_cama_ped_med': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '53620_tot_cama_ped_med'
    },
    '53622_cama_cuna_card_ped': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '53622_cama_cuna_card_ped'
    },
    '53623_cama_cuna_derm_ped': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '53623_cama_cuna_derm_ped'
    },
    '53624_cama_cuna_endo_ped': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '53624_cama_cuna_endo_ped'
    },
    '53625_cama_cuna_gast_ped': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '53625_cama_cuna_gast_ped'
    },
    '53627_cama_cuna_hema_ped': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '53627_cama_cuna_hema_ped'
    },
    '53628_cama_cuna_infe_ped': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '53628_cama_cuna_infe_ped'
    },
    '53629_cama_cuna_med_int_ped': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '53629_cama_cuna_med_int_ped'
    },
    '53630_cama_cuna_nef_ped': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '53630_cama_cuna_nef_ped'
    },
    '53631_cama_cuna_neumo_ped': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '53631_cama_cuna_neumo_ped'
    },
    '53632_cama_cuna_neuro_ped2': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '53632_cama_cuna_neuro_ped2'
    },
    '53633_cama_cuna_onco_ped': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '53633_cama_cuna_onco_ped'
    },
    '53634_bac_rec_nac_alog_conj': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '53634_bac_rec_nac_alog_conj'
    },
    '53635_cama_cuna_reum_ped': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '53635_cama_cuna_reum_ped'
    },
    '53700_cama_onco_med': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '53700_cama_onco_med'
    },
    '53800_cama_cir_plast_reconst': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '53800_cama_cir_plast_reconst'
    },
    '53900_cam_quemados': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '53900_cam_quemados'
    },
    '53901_cama_quem_adult': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '53901_cama_quem_adult'
    },
    '53902_cama_quem_ped': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '53902_cama_quem_ped'
    },
    '54000_tot_cam_oncol': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '54000_tot_cam_oncol'
    },
    '54001_cama_tumores_colon_recto': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '54001_cama_tumores_colon_recto'
    },
    '54002_cama_sarcomas': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '54002_cama_sarcomas'
    },
    '54003_cama_tumor_cab_cuello': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '54003_cama_tumor_cab_cuello'
    },
    '54004_cama_encolo_ginecolo': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '54004_cama_encolo_ginecolo'
    },
    '54005_cama_tumor_mama': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '54005_cama_tumor_mama'
    },
    '54006_cama_tumor_torax': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '54006_cama_tumor_torax'
    },
    '54007_cama_onc_qui': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '54007_cama_onc_qui'
    },
    '54100_cama_genetica': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '54100_cama_genetica'
    },
    '54200_cama_med_fis_rehab': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '54200_cama_med_fis_rehab'
    },
    '54300_cama_unidad_metab': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '54300_cama_unidad_metab'
    },
    '54400_cama_transplantes': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '54400_cama_transplantes'
    },
    '54401_cama_tras_adult': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '54401_cama_tras_adult'
    },
    '54402_cama_tras_ped': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '54402_cama_tras_ped'
    },
    '54403_cama_tras_cel_prog_hema_adult': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '54403_cama_tras_cel_prog_hema_adult'
    },
    '54404_cama_tras_cel_prog_gema_ped': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '54404_cama_tras_cel_prog_gema_ped'
    },
    '54500_otr_cam_censable': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '54500_otr_cam_censable'
    },
    '55000_tot_cama_cens_cir': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '55000_tot_cama_cens_cir'
    },
    '56000_tot_cama_cens_med': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '56000_tot_cama_cens_med'
    },
    '60000_tot_cam_no_censable': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '60000_tot_cam_no_censable'
    },
    '60100_tot_cam_urgen': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '60100_tot_cam_urgen'
    },
    '60102_cama_area_choque': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '60102_cama_area_choque'
    },
    '60103_cama_urg_toco': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '60103_cama_urg_toco'
    },
    '60104_cama_urg_med_cort_dist': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '60104_cama_urg_med_cort_dist'
    },
    '60105_cama_area_reanim_adult': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '60105_cama_area_reanim_adult'
    },
    '60106_cama_area_reanim_ped': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '60106_cama_area_reanim_ped'
    },
    '60200_tot_cam_urg_obs': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '60200_tot_cam_urg_obs'
    },
    '60201_cam_urg_med_obs_ped': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '60201_cam_urg_med_obs_ped'
    },
    '60202_cam_urg_med_obs_adult': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '60202_cam_urg_med_obs_adult'
    },
    '60300_tot_cam_ate_con': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '60300_tot_cam_ate_con'
    },
    '60301_cama_med_cont_adult': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '60301_cama_med_cont_adult'
    },
    '60302_cama_med_cont_menor': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '60302_cama_med_cont_menor'
    },
    '60400_tot_cam_adm_obs': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '60400_tot_cam_adm_obs'
    },
    '60401_cama_admis_cont': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '60401_cama_admis_cont'
    },
    '60402_cama_admis_cont_ped': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '60402_cama_admis_cont_ped'
    },
    '60403_cama_admis_cont_adult': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '60403_cama_admis_cont_adult'
    },
    '60405_cama_admis_cont_gineco_obst': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '60405_cama_admis_cont_gineco_obst'
    },
    '60406_cama_rec_postq_urg': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '60406_cama_rec_postq_urg'
    },
    '60500_tot_cam_gin_obs2': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '60500_tot_cam_gin_obs2'
    },
    '60501_cama_trab_parto': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '60501_cama_trab_parto'
    },
    '60502_cama_recup_post_parto': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '60502_cama_recup_post_parto'
    },
    '60504_cama_monit_fetal': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '60504_cama_monit_fetal'
    },
    '60506_cama_rec_postq_toco': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '60506_cama_rec_postq_toco'
    },
    '60600_recien_nac_sano_cun_fisio': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '60600_recien_nac_sano_cun_fisio'
    },
    '60700_recien_nac_sano_incub_fisio': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '60700_recien_nac_sano_incub_fisio'
    },
    '60800_cama_braquite': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '60800_cama_braquite'
    },
    '60900_cama_recup_post_endos': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '60900_cama_recup_post_endos'
    },
    '61000_cama_recup_post_radio': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '61000_cama_recup_post_radio'
    },
    '61100_cama_recup_post_quirur': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '61100_cama_recup_post_quirur'
    },
    '61200_cama_dial_peditor_ambul': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '61200_cama_dial_peditor_ambul'
    },
    '61300_tot_cam_cuid_int': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '61300_tot_cam_cuid_int'
    },
    '61301_cama_cuid_int_adult': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '61301_cama_cuid_int_adult'
    },
    '61302_cama_cuid_int_postquirurg': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '61302_cama_cuid_int_postquirurg'
    },
    '61303_cama_cuid_int_resp': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '61303_cama_cuid_int_resp'
    },
    '61304_cama_cuid_int_corona': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '61304_cama_cuid_int_corona'
    },
    '61305_cama_area_terap_interm': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '61305_cama_area_terap_interm'
    },
    '61306_tot_cama_cuid_int_quem': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '61306_tot_cama_cuid_int_quem'
    },
    '61307_cama_cuid_int_quem_adult': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '61307_cama_cuid_int_quem_adult'
    },
    '61308_cama_cuid_int_quem_ped': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '61308_cama_cuid_int_quem_ped'
    },
    '61350_cama_cuna_cart_pres_neg': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '61350_cama_cuna_cart_pres_neg'
    },
    '61400_tot_cam_cuid_int_ped': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '61400_tot_cam_cuid_int_ped'
    },
    '61401_cama_cuid_int_ped': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '61401_cama_cuid_int_ped'
    },
    '61402_cuna_cuid_int_ped': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '61402_cuna_cuid_int_ped'
    },
    '61403_cama_cuid_int_postquirurg_ped': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '61403_cama_cuid_int_postquirurg_ped'
    },
    '61404_cuna_rad_cuid_int_neonatal': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '61404_cuna_rad_cuid_int_neonatal'
    },
    '61405_cuna_cal_rad_toco_quir': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '61405_cuna_cal_rad_toco_quir'
    },
    '60407_incub_urg_adm_cont': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '60407_incub_urg_adm_cont'
    },
    '61408_incub_area_trans': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '61408_incub_area_trans'
    },
    '61409_incub_area_toco_quir': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '61409_incub_area_toco_quir'
    },
    '61410_cuna_cal_rad_area_trans': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '61410_cuna_cal_rad_area_trans'
    },
    '61500_cama_rec_post_cir_amb': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '61500_cama_rec_post_cir_amb'
    },
    '61600_sillon_quimio': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '61600_sillon_quimio'
    },
    '61700_otr_cam_no_censable': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '61700_otr_cam_no_censable'
    },
    '61800_cama_rec_hemo': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '61800_cama_rec_hemo'
    },
    '70000_tot_consult': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '70000_tot_consult'
    },
    '70100_tot_consult_mf': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '70100_tot_consult_mf'
    },
    '70101_cons_mf': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '70101_cons_mf'
    },
    '70103_cons_mf_unid_mov_trab_camp': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '70103_cons_mf_unid_mov_trab_camp'
    },
    '70104_mod_enf_esp_mf': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '70104_mod_enf_esp_mf'
    },
    '70105_cons_diab': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '70105_cons_diab'
    },
    '70106_cons_plan_fam': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '70106_cons_plan_fam'
    },
    '70107_tot_cons_aux_mf': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '70107_tot_cons_aux_mf'
    },
    '70108_cons_med_aux': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '70108_cons_med_aux'
    },
    '70109_cons_aux_fab': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '70109_cons_aux_fab'
    },
    '70110_cons_aux_enf': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '70110_cons_aux_enf'
    },
    '70150_tot_cons_prof': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '70150_tot_cons_prof'
    },
    '70200_cons_estomatologia': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '70200_cons_estomatologia'
    },
    '70300_cons_estomatologia_unid_mov': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '70300_cons_estomatologia_unid_mov'
    },
    '70400_cons_enferm_prenatal': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '70400_cons_enferm_prenatal'
    },
    '70500_cons_enferm_crinic_degene': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '70500_cons_enferm_crinic_degene'
    },
    '70600_cons_enf_mat_inf': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '70600_cons_enf_mat_inf'
    },
    '70700_cons_optometria': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '70700_cons_optometria'
    },
    '70800_cons_nutri_dietetica': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '70800_cons_nutri_dietetica'
    },
    '70900_total_consu_toraci': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '70900_total_consu_toraci'
    },
    '70901_cons_urg_med': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '70901_cons_urg_med'
    },
    '70902_cons_urg_toco': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '70902_cons_urg_toco'
    },
    '71000_cons_aten_med_cont': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '71000_cons_aten_med_cont'
    },
    '71001_cons_aten_med_cont_adult': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '71001_cons_aten_med_cont_adult'
    },
    '71002_cons_aten_med_cont_menor': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '71002_cons_aten_med_cont_menor'
    },
    '71100_total_cons_adm_cont': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '71100_total_cons_adm_cont'
    },
    '71101_cons_adm_cont_ped': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '71101_cons_adm_cont_ped'
    },
    '71102_cons_adm_cont_adult': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '71102_cons_adm_cont_adult'
    },
    '71103_cons_adm_cont_urg_oftalmo': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '71103_cons_adm_cont_urg_oftalmo'
    },
    '71104_cons_adm_cont_urg_otorr': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '71104_cons_adm_cont_urg_otorr'
    },
    '71200_tot_cons_especialidades': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '71200_tot_cons_especialidades'
    },
    '71250_cons_rad_onco': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '71250_cons_rad_onco'
    },
    '71300_cons_espidem': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '71300_cons_espidem'
    },
    '71400_cons_alerg_inmulog': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '71400_cons_alerg_inmulog'
    },
    '71500_cons_angiol': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '71500_cons_angiol'
    },
    '71550_tot_cons_fam_cir': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '71550_tot_cons_fam_cir'
    },
    '71600_cons_cir_max_facial': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '71600_cons_cir_max_facial'
    },
    '71700_cons_cardiologia': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '71700_cons_cardiologia'
    },
    '71800_cons_cir_card_tor': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '71800_cons_cir_card_tor'
    },
    '71900_cons_cir_gen': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '71900_cons_cir_gen'
    },
    '72000_cons_derm': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '72000_cons_derm'
    },
    '72100_cons_endo': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '72100_cons_endo'
    },
    '72200_cons_gastroenterologia': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '72200_cons_gastroenterologia'
    },
    '72300_cons_gastrocirugia': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '72300_cons_gastrocirugia'
    },
    '72400_cons_hemo': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '72400_cons_hemo'
    },
    '72500_tot_con_gin_obs': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '72500_tot_con_gin_obs'
    },
    '72600_tot_de_cons_gin': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '72600_tot_de_cons_gin'
    },
    '72601_cons_gine': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '72601_cons_gine'
    },
    '72602_cons_dis_gin': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '72602_cons_dis_gin'
    },
    '72603_cons_tra_trac_sup': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '72603_cons_tra_trac_sup'
    },
    '72604_cons_end_gin': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '72604_cons_end_gin'
    },
    '72605_cons_bio_la_hum': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '72605_cons_bio_la_hum'
    },
    '72606_cons_urol_gin': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '72606_cons_urol_gin'
    },
    '72607_cons_gine_onco': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '72607_cons_gine_onco'
    },
    '72700_tot_cons_obs': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '72700_tot_cons_obs'
    },
    '72701_cons_obst': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '72701_cons_obst'
    },
    '72702_cons_peri': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '72702_cons_peri'
    },
    '72703_cons_med_mat_fet': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '72703_cons_med_mat_fet'
    },
    '72704_cons_pre_ecl': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '72704_cons_pre_ecl'
    },
    '72705_cons_comp_1ra_mit_emb': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '72705_cons_comp_1ra_mit_emb'
    },
    '72706_cons_comp_2da_mit_emb': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '72706_cons_comp_2da_mit_emb'
    },
    '72707_cons_sal_reprod': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '72707_cons_sal_reprod'
    },
    '72800_cons_hema': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '72800_cons_hema'
    },
    '72900_cons_infe': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '72900_cons_infe'
    },
    '73000_cons_med_int': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '73000_cons_med_int'
    },
    '73100_cons_nefro': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '73100_cons_nefro'
    },
    '73200_cons_neumo': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '73200_cons_neumo'
    },
    '73300_cons_neuro': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '73300_cons_neuro'
    },
    '73400_con_geront': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '73400_con_geront'
    },
    '73500_tot_cons_oftamo': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '73500_tot_cons_oftamo'
    },
    '73501_cons_oftamo': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '73501_cons_oftamo'
    },
    '73502_cons_oftamo_seg_ant': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '73502_cons_oftamo_seg_ant'
    },
    '73503_cons_oftamo_seg_pos': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '73503_cons_oftamo_seg_pos'
    },
    '73600_cons_otorrino': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '73600_cons_otorrino'
    },
    '73700_tot_cons_ped_med': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '73700_tot_cons_ped_med'
    },
    '73701_cons_ped_med': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '73701_cons_ped_med'
    },
    '73702_cons_derma_pedia': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '73702_cons_derma_pedia'
    },
    '73703_cons_endo_ped': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '73703_cons_endo_ped'
    },
    '73704_cons_gastro_ped': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '73704_cons_gastro_ped'
    },
    '73705_cons_gen_ped': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '73705_cons_gen_ped'
    },
    '73706_cons_hema_ped': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '73706_cons_hema_ped'
    },
    '73707_cons_infecto_ped': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '73707_cons_infecto_ped'
    },
    '73708_cons_med_int_ped': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '73708_cons_med_int_ped'
    },
    '73709_cons_nefro_ped': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '73709_cons_nefro_ped'
    },
    '73710_cons_neumo_ped': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '73710_cons_neumo_ped'
    },
    '73711_cons_neuro_ed': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '73711_cons_neuro_ed'
    },
    '73712_cons_onco_ped': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '73712_cons_onco_ped'
    },
    '73713_cons_reuma_ped': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '73713_cons_reuma_ped'
    },
    '73714_cons_neonato': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '73714_cons_neonato'
    },
    '74000_tot_cons_procto': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '74000_tot_cons_procto'
    },
    '74001_cons_colon_recto': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '74001_cons_colon_recto'
    },
    '74002_cons_coloprocto': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '74002_cons_coloprocto'
    },
    '74100_tot_cons_psiq': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '74100_tot_cons_psiq'
    },
    '74101_cons_psiq': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '74101_cons_psiq'
    },
    '74102_cons_psiq_adult': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '74102_cons_psiq_adult'
    },
    '74103_cons_psiq_ped': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '74103_cons_psiq_ped'
    },
    '74200_cons_reuma': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '74200_cons_reuma'
    },
    '74300_tot_con_tra_ort': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '74300_tot_con_tra_ort'
    },
    '74301_cons_traum_ort_ed': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '74301_cons_traum_ort_ed'
    },
    '74302_cons_traum': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '74302_cons_traum'
    },
    '74303_cons_orto': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '74303_cons_orto'
    },
    '74304_cons_colum': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '74304_cons_colum'
    },
    '74305_cons_rod': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '74305_cons_rod'
    },
    '74306_cons_miem_torac': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '74306_cons_miem_torac'
    },
    '74307_cons_traum_poli_exp': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '74307_cons_traum_poli_exp'
    },
    '74308_cons_tob_pie': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '74308_cons_tob_pie'
    },
    '74309_cons_cad_pelv': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '74309_cons_cad_pelv'
    },
    '74310_cons_cir_mano': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '74310_cons_cir_mano'
    },
    '74311_cons_cir_cab_cuello': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '74311_cons_cir_cab_cuello'
    },
    '74312_cons_cir_toraco_abd': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '74312_cons_cir_toraco_abd'
    },
    '74313_cons_colum_cad': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '74313_cons_colum_cad'
    },
    '74314_cons_diafisis': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '74314_cons_diafisis'
    },
    '74316_cons_miem_pelv': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '74316_cons_miem_pelv'
    },
    '74317_cons_reempl_artic': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '74317_cons_reempl_artic'
    },
    '74400_cons_clin_dol_cuid_int': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '74400_cons_clin_dol_cuid_int'
    },
    '74401_cons_cuid_paliat': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '74401_cons_cuid_paliat'
    },
    '74500_cons_geria': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '74500_cons_geria'
    },
    '74600_cons_urol': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '74600_cons_urol'
    },
    '74700_cons_aud_audi_oto': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '74700_cons_aud_audi_oto'
    },
    '74800_cons_neur': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '74800_cons_neur'
    },
    '74900_tota_cons_cir_ped': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '74900_tota_cons_cir_ped'
    },
    '74901_cons_cir_ped': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '74901_cons_cir_ped'
    },
    '74902_cons_traum_ped': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '74902_cons_traum_ped'
    },
    '74903_cons_orto_ped': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '74903_cons_orto_ped'
    },
    '74904_cons_cir_card_ped': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '74904_cons_cir_card_ped'
    },
    '74905_cons_cir_gastroemb': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '74905_cons_cir_gastroemb'
    },
    '74906_cons_cir_maxilo_ped': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '74906_cons_cir_maxilo_ped'
    },
    '74907_cons_cir_min_inv_ped': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '74907_cons_cir_min_inv_ped'
    },
    '74908_cons_cir_recons_ped': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '74908_cons_cir_recons_ped'
    },
    '74909_cons_cir_tora_neumo': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '74909_cons_cir_tora_neumo'
    },
    '74910_cons_neuro_ped': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '74910_cons_neuro_ped'
    },
    '74911_cons_oftal_ped': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '74911_cons_oftal_ped'
    },
    '74912_cons_otorrino_ped': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '74912_cons_otorrino_ped'
    },
    '74913_cons_urol_ped': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '74913_cons_urol_ped'
    },
    '75000_cons_onco_med': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '75000_cons_onco_med'
    },
    '75100_cons_cir_plast_recons': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '75100_cons_cir_plast_recons'
    },
    '75200_cons_quem': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '75200_cons_quem'
    },
    '75300_tot_cons_onco_quirur': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '75300_tot_cons_onco_quirur'
    },
    '75301_cons_onco_quirur': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '75301_cons_onco_quirur'
    },
    '75302_cons_sarcom_tej_bland': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '75302_cons_sarcom_tej_bland'
    },
    '75303_cons_tum_cab_cue_piel': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '75303_cons_tum_cab_cue_piel'
    },
    '75304_cons_onco_ginecol': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '75304_cons_onco_ginecol'
    },
    '75305_cons_tum_mama': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '75305_cons_tum_mama'
    },
    '75306_cons_tum_torax': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '75306_cons_tum_torax'
    },
    '75307_cons_urol_oncol': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '75307_cons_urol_oncol'
    },
    '75308_cons_tubo_digest_alto': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '75308_cons_tubo_digest_alto'
    },
    '75309_cons_oftalmo_oncol': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '75309_cons_oftalmo_oncol'
    },
    '75310_cons_hemato_oncol': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '75310_cons_hemato_oncol'
    },
    '75400_cons_psicol': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '75400_cons_psicol'
    },
    '75500_cons_gene': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '75500_cons_gene'
    },
    '75600_tot_cons_med_fis_reh': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '75600_tot_cons_med_fis_reh'
    },
    '75601_cons_med_fis_reh': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '75601_cons_med_fis_reh'
    },
    '75602_cons_reh_prof': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '75602_cons_reh_prof'
    },
    '75603_cons_electro_pot_evo': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '75603_cons_electro_pot_evo'
    },
    '75604_cons_com_hum': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '75604_cons_com_hum'
    },
    '75700_cons_unid_metab': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '75700_cons_unid_metab'
    },
    '75800_cons_transpl': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '75800_cons_transpl'
    },
    '75900_cons_med_nuc': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '75900_cons_med_nuc'
    },
    '76100_cons_tabaquismo': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '76100_cons_tabaquismo'
    },
    '76200_cons_telemed': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '76200_cons_telemed'
    },
    '76300_cons_cir_baria': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '76300_cons_cir_baria'
    },
    '76400_cons_val_preanestesica': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '76400_cons_val_preanestesica'
    },
    '76500_cons_val_preoperatoria': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '76500_cons_val_preoperatoria'
    },
    '76600_cons_endos_gast': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '76600_cons_endos_gast'
    },
    '76700_cons_endos_urolo': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '76700_cons_endos_urolo'
    },
    '76800_cons_endos_neumo': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '76800_cons_endos_neumo'
    },
    '76900_cons_endos_vias_dig_alt': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '76900_cons_endos_vias_dig_alt'
    },
    '77000_cons_endos_vias_dig_baj': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '77000_cons_endos_vias_dig_baj'
    },
    '77010_tot_cons_endo': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '77010_tot_cons_endo'
    },
    '77050_cons_banc_sang': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '77050_cons_banc_sang'
    },
    '77060_cons_cli_mama_unid_med': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '77060_cons_cli_mama_unid_med'
    },
    '77101_serv_sal_trab': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '77101_serv_sal_trab'
    },
    '77200_otros_cons': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '77200_otros_cons'
    },
    '77300_cons_clin_suenio': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '77300_cons_clin_suenio'
    },
    '77400_cons_athodo': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '77400_cons_athodo'
    },
    '77401_cons_adec': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '77401_cons_adec'
    },
    '77500_tot_cons_med': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '77500_tot_cons_med'
    },
    '80002_area_trab_enf_hosp': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80002_area_trab_enf_hosp'
    },
    '80003_sala_trab_enferm': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80003_sala_trab_enferm'
    },
    '80004_cadit': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80004_cadit'
    },
    '80006_subcentral_equip_ester': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80006_subcentral_equip_ester'
    },
    '80008_cietd_cp': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80008_cietd_cp'
    },
    '80010_banco_leche': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80010_banco_leche'
    },
    '80014_cubic_entrev_nutri': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80014_cubic_entrev_nutri'
    },
    '80015_area_hosp': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80015_area_hosp'
    },
    '80016_adm_hosp': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80016_adm_hosp'
    },
    '80017_area_rean_hosp': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80017_area_rean_hosp'
    },
    '80018_nut_parent': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80018_nut_parent'
    },
    '80019_lab_form_lact_diet_ent': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80019_lab_form_lact_diet_ent'
    },
    '80020_cent_ester': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80020_cent_ester'
    },
    '80021_serv_nut_diet': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80021_serv_nut_diet'
    },
    '80022_area_sig_apre_hosp': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80022_area_sig_apre_hosp'
    },
    '80023_area_dorm_cuart_desc_res': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80023_area_dorm_cuart_desc_res'
    },
    '80024_mod_enferm_esp_geriatria': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80024_mod_enferm_esp_geriatria'
    },
    '80025_cub_clinica_heridas': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80025_cub_clinica_heridas'
    },
    '80026_cub_anex_oftamo_campi': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80026_cub_anex_oftamo_campi'
    },
    '80027_cub_anex_oftamo_fluora': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80027_cub_anex_oftamo_fluora'
    },
    '80028_cub_anex_oftamo_ultras_ocul': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80028_cub_anex_oftamo_ultras_ocul'
    },
    '80029_cub_aten_dom_enf_cro': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80029_cub_aten_dom_enf_cro'
    },
    '80030_cub_lin_trans_pac_dial_perito': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80030_cub_lin_trans_pac_dial_perito'
    },
    '80031_cub_real_ecocardio': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80031_cub_real_ecocardio'
    },
    '80032_cub_real_prueb_esf': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80032_cub_real_prueb_esf'
    },
    '80033_cub_toma_electro': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80033_cub_toma_electro'
    },
    '80034_lactario': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80034_lactario'
    },
    '80035_est_vap_dir': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80035_est_vap_dir'
    },
    '80036_est_baj_temp_plas': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80036_est_baj_temp_plas'
    },
    '80037_est_alt_baj_temp_gas': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80037_est_alt_baj_temp_gas'
    },
    '80038_otros_est': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80038_otros_est'
    },
    '80039_sal_lact': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80039_sal_lact'
    },
    '80040_sal_estim_temp': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80040_sal_estim_temp'
    },
    '80041_aula_aten_amig': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80041_aula_aten_amig'
    },
    '80042_area_pre_labor': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80042_area_pre_labor'
    },
    '80050_area_cons_ext': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80050_area_cons_ext'
    },
    '80051_mod_asist_med': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80051_mod_asist_med'
    },
    '80052_asist_med': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80052_asist_med'
    },
    '80053_mod_nutri_diet': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80053_mod_nutri_diet'
    },
    '80054_aulas_sesion_educ': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80054_aulas_sesion_educ'
    },
    '80055_ofic_coord_asist_med': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80055_ofic_coord_asist_med'
    },
    '80056_ofic_jef_grup_arimac': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80056_ofic_jef_grup_arimac'
    },
    '80057_sal_altas': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80057_sal_altas'
    },
    '80100_area_admin': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80100_area_admin'
    },
    '80101_mod_aten_orient_derecho': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80101_mod_aten_orient_derecho'
    },
    '80102_control_prest': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80102_control_prest'
    },
    '80103_sector_tecnivo': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80103_sector_tecnivo'
    },
    '80105_ofic_inform_med': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80105_ofic_inform_med'
    },
    '80106_arch_clin_central': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80106_arch_clin_central'
    },
    '80107_arch_clin_descentral': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80107_arch_clin_descentral'
    },
    '80109_local_refrigerios': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80109_local_refrigerios'
    },
    '80110_farmacia': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80110_farmacia'
    },
    '80111_lavanderia': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80111_lavanderia'
    },
    '80112_almac_viveres': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80112_almac_viveres'
    },
    '80113_almac_unidad': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80113_almac_unidad'
    },
    '80114_taller_conserv_mant': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80114_taller_conserv_mant'
    },
    '80115_comedor_personal': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80115_comedor_personal'
    },
    '80116_cocina': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80116_cocina'
    },
    '80117_area_inf_med_arc_clin': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80117_area_inf_med_arc_clin'
    },
    '80150_area_aten_prev_integ': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80150_area_aten_prev_integ'
    },
    '80151_mod_prevenimss': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80151_mod_prevenimss'
    },
    '80152_local_vacunad_prog_esp': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80152_local_vacunad_prog_esp'
    },
    '80153_local_red_frio': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80153_local_red_frio'
    },
    '80154_cub_estomato_prev': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80154_cub_estomato_prev'
    },
    '80155_sillones_dent_med_prev': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80155_sillones_dent_med_prev'
    },
    '80156_aulas_med_prev': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80156_aulas_med_prev'
    },
    '80157_mod_serv_prev_prom_sal_trab': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80157_mod_serv_prev_prom_sal_trab'
    },
    '80159_cent_prep_med': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80159_cent_prep_med'
    },
    '80200_area_estomato_cons_ext': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80200_area_estomato_cons_ext'
    },
    '80201_sillones_dent_cons_ext': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80201_sillones_dent_cons_ext'
    },
    '80250_area_trab_social': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80250_area_trab_social'
    },
    '80251_ofic_trab_social': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80251_ofic_trab_social'
    },
    '80252_mod_trab_social': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80252_mod_trab_social'
    },
    '80253_cub_entrev_trab_social': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80253_cub_entrev_trab_social'
    },
    '80254_control': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80254_control'
    },
    '80300_area_urg': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80300_area_urg'
    },
    '80301_triage': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80301_triage'
    },
    '80302_atenc_cont': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80302_atenc_cont'
    },
    '80303_prim_cont_urg': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80303_prim_cont_urg'
    },
    '80304_observ_urg': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80304_observ_urg'
    },
    '80307_area_choque_urg': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80307_area_choque_urg'
    },
    '80308_local_hidra_oral': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80308_local_hidra_oral'
    },
    '80309_adm_cont': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80309_adm_cont'
    },
    '80310_observ_adm_cont': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80310_observ_adm_cont'
    },
    '80311_area_rean_urg': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80311_area_rean_urg'
    },
    '80312_area_cort_est': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80312_area_cort_est'
    },
    '80313_triage_urg_toco': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80313_triage_urg_toco'
    },
    '80351_area_cir_amb': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80351_area_cir_amb'
    },
    '80354_sala_oper_hibrida': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80354_sala_oper_hibrida'
    },
    '80355_bombas_circ_ext_corp': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80355_bombas_circ_ext_corp'
    },
    '80356_equip_succion': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80356_equip_succion'
    },
    '80357_fuent_marcapasos': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80357_fuent_marcapasos'
    },
    '80358_histeroscopios': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80358_histeroscopios'
    },
    '80359_microscopios_quirurg': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80359_microscopios_quirurg'
    },
    '80360_taller_anestesio': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80360_taller_anestesio'
    },
    '80361_sala_ope_urg': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80361_sala_ope_urg'
    },
    '80362_area_prep_pac_quir_endo': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80362_area_prep_pac_quir_endo'
    },
    '80363_area_quirur': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80363_area_quirur'
    },
    '80364_sal_quirof': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80364_sal_quirof'
    },
    '80365_cuart_hosp_aisl': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80365_cuart_hosp_aisl'
    },
    '80402_sal_mix_cir_toco': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80402_sal_mix_cir_toco'
    },
    '80403_sala_exp': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80403_sala_exp'
    },
    '80404_local_perinato': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80404_local_perinato'
    },
    '80405_incub_trasl': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80405_incub_trasl'
    },
    '80406_area_toco': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80406_area_toco'
    },
    '80407_quir_toco': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80407_quir_toco'
    },
    '80408_sala_proc_quir': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80408_sala_proc_quir'
    },
    '80409_sala_proc_med': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80409_sala_proc_med'
    },
    '80450_area_endos': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80450_area_endos'
    },
    '80451_sala_endos_alt': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80451_sala_endos_alt'
    },
    '80452_sala_endos_baj': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80452_sala_endos_baj'
    },
    '80453_endoscopios': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80453_endoscopios'
    },
    '80454_endo_neuro': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80454_endo_neuro'
    },
    '80455_equip_cepre': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80455_equip_cepre'
    },
    '80500_area_hemo_fisio_card': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80500_area_hemo_fisio_card'
    },
    '80501_unid_cuid_intensiv': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80501_unid_cuid_intensiv'
    },
    '80502_aparat_ray_x_hemo': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80502_aparat_ray_x_hemo'
    },
    '80503_balon_contrap_intra_aortico': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80503_balon_contrap_intra_aortico'
    },
    '80504_balon_contra_expuls': {
        type: DataTypes.INTEGER,
        allowNull: '80504_balon_contra_expuls'
    },
    '80505_equip_med_gas_artif': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80505_equip_med_gas_artif'
    },
    '80507_equipo_prueba_esf': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80507_equipo_prueba_esf'
    },
    '80508_cardiotocografos': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80508_cardiotocografos'
    },
    '80509_angiografo': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80509_angiografo'
    },
    '80510_pletismografo': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80510_pletismografo'
    },
    '80511_respirometro': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80511_respirometro'
    },
    '80512_equip_holter': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80512_equip_holter'
    },
    '80513_equip_monit': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80513_equip_monit'
    },
    '80514_pletism_corp_neo': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80514_pletism_corp_neo'
    },
    '80515_pletism_corp_ped_adult': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80515_pletism_corp_ped_adult'
    },
    '80517_ergo_prueb_ejerc': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80517_ergo_prueb_ejerc'
    },
    '80518_espiro_comput_neumo': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80518_espiro_comput_neumo'
    },
    '80519_espiro_neumot': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80519_espiro_neumot'
    },
    '80520_espiro_tipo_wrigth': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80520_espiro_tipo_wrigth'
    },
    '80521_lamp_foto': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80521_lamp_foto'
    },
    '80522_sist_foto_bili': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80522_sist_foto_bili'
    },
    '80523_tromboelast': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80523_tromboelast'
    },
    '80524_und_sec_equip_inhal': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80524_und_sec_equip_inhal'
    },
    '80550_area_med_nuclear': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80550_area_med_nuclear'
    },
    '80551_sala_diag_trat': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80551_sala_diag_trat'
    },
    '80552_sist_med_nuc_emi_posit': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80552_sist_med_nuc_emi_posit'
    },
    '80554_contad_radioact': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80554_contad_radioact'
    },
    '80555_gamma_camara': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80555_gamma_camara'
    },
    '80556_lab_med_nuc': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80556_lab_med_nuc'
    },
    '80600_area_tomog_axial_comput': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80600_area_tomog_axial_comput'
    },
    '80602_apar_tomo': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80602_apar_tomo'
    },
    '80604_unid_ultra_colop': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80604_unid_ultra_colop'
    },
    '80605_unid_ultra_oftal': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80605_unid_ultra_oftal'
    },
    '80606_ultras_endos': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80606_ultras_endos'
    },
    '80607_unid_ultra_trans_cod_col': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80607_unid_ultra_trans_cod_col'
    },
    '80651_sala_radiodiagn': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80651_sala_radiodiagn'
    },
    '80652_sala_interp_radiodiagn': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80652_sala_interp_radiodiagn'
    },
    '80653_unid_radiog_fluorosc': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80653_unid_radiog_fluorosc'
    },
    '80654_sist_fluorosc_prop_gen': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80654_sist_fluorosc_prop_gen'
    },
    '80655_equip_reson_magn': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80655_equip_reson_magn'
    },
    '80656_apar_ultrasonografia': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80656_apar_ultrasonografia'
    },
    '80657_apar_ray_x_dent': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80657_apar_ray_x_dent'
    },
    '80658_apar_ray_x_fijos': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80658_apar_ray_x_fijos'
    },
    '80659_apar_ray_x_transp': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80659_apar_ray_x_transp'
    },
    '80660_mastog_analogico': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80660_mastog_analogico'
    },
    '80661_mastog_digital': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80661_mastog_digital'
    },
    "80662_revel_autom": {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80662_revel_autom'
    },
    '80663_esterotaxia_mamog': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80663_esterotaxia_mamog'
    },
    '80664_densito_oseo': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80664_densito_oseo'
    },
    '80665_arcos_c': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80665_arcos_c'
    },
    '80666_fantomas': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80666_fantomas'
    },
    '80667_fonomecanocardio': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80667_fonomecanocardio'
    },
    '80668_area_imagen': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80668_area_imagen'
    },
    '80669_sist_arch_comun_imag': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80669_sist_arch_comun_imag'
    },
    '80670_impre_seco_revel_pel_radiog': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80670_impre_seco_revel_pel_radiog'
    },
    '80671_area_radiodiag': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80671_area_radiodiag'
    },
    '80672_unid_flotoflut': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80672_unid_flotoflut'
    },
    '80701_sala_radioterap': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80701_sala_radioterap'
    },
    '80702_apar_radioterap_prof': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80702_apar_radioterap_prof'
    },
    '80703_apar_radioterap_superf': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80703_apar_radioterap_superf'
    },
    '80704_sum_radioterap': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80704_sum_radioterap'
    },
    '80705_sist_plan_trat_radioterap': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80705_sist_plan_trat_radioterap'
    },
    '80706_radiocir_robot': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80706_radiocir_robot'
    },
    '80707_radiocir_gammaknife': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80707_radiocir_gammaknife'
    },
    '80708_braquiterap_alt_dosis': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80708_braquiterap_alt_dosis'
    },
    '80709_braquiterap_baja_dosis': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80709_braquiterap_baja_dosis'
    },
    '80710_acele_lineales': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80710_acele_lineales'
    },
    '80711_unid_radioterap_cobalt': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80711_unid_radioterap_cobalt'
    },
    '80712_unid_terap_superf_ortovolt': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80712_unid_terap_superf_ortovolt'
    },
    '80713_unid_terap_intracav': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80713_unid_terap_intracav'
    },
    '80714_aspirad_ultrasonic': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80714_aspirad_ultrasonic'
    },
    '80715_bombas_cobalt': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80715_bombas_cobalt'
    },
    '80716_colimadores_bloque': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80716_colimadores_bloque'
    },
    '80717_colimadores_terap_multh': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80717_colimadores_terap_multh'
    },
    '80718_equip_braquiterap_convenc': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80718_equip_braquiterap_convenc'
    },
    '80719_equip_radiocir_exterotaxica': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80719_equip_radiocir_exterotaxica'
    },
    '80720_litotriptores': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80720_litotriptores'
    },
    '80721_area_radiot': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80721_area_radiot'
    },
    '80722_cuart_hosp_blind_mat_rad': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80722_cuart_hosp_blind_mat_rad'
    },
    '80723_area_prep_mat_rad': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80723_area_prep_mat_rad'
    },
    '80751_electrocardiografos': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80751_electrocardiografos'
    },
    '80752_electroencefalografos': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80752_electroencefalografos'
    },
    '80753_electromiografos': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80753_electromiografos'
    },
    '80754_ecocardiografo': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80754_ecocardiografo'
    },
    '80755_impedanciometros': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80755_impedanciometros'
    },
    '80756_unid_prest_topo_pot_evo': {
        type: '80756_unid_prest_topo_pot_evo',
        allowNull: true,
        field: '80756_unid_prest_topo_pot_evo'
    },
    '80757_felxoextensor_muneca': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80757_felxoextensor_muneca'
    },
    '80758_equip_fort_cad_miemb_sup_inf': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80758_equip_fort_cad_miemb_sup_inf'
    },
    '80759_unid_med_metab': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80759_unid_med_metab'
    },
    '80761_area_electrodiag': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80761_area_electrodiag'
    },
    '80800_area_med_fis_rehab': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80800_area_med_fis_rehab'
    },
    '80810_mod_rehab_int': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80810_mod_rehab_int'
    },
    '80851_cub_comp': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80851_cub_comp'
    },
    '80852_cub_electroterap': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80852_cub_electroterap'
    },
    '80853_cub_corrient_interf': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80853_cub_corrient_interf'
    },
    '80854_area_electroterap': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80854_area_electroterap'
    },
    '80904_sist_sop_entrenam_marcha': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80904_sist_sop_entrenam_marcha'
    },
    '80907_equip_comp_sum_lab': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80907_equip_comp_sum_lab'
    },
    '80909_sist_robot_ent_miemb_sup': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80909_sist_robot_ent_miemb_sup'
    },
    '80910_area_mecanoterap': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80910_area_mecanoterap'
    },
    '80911_gimnasio': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80911_gimnasio'
    },
    '80912_isocinecia': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80912_isocinecia'
    },
    '80913_marcha': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80913_marcha'
    },
    '80951_cub_hidroterap_miemb_sup': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80951_cub_hidroterap_miemb_sup'
    },
    '80952_cub_hidroterap_miemb_inf': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80952_cub_hidroterap_miemb_inf'
    },
    '80953_cub_fluidoterap_miemb_sup': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80953_cub_fluidoterap_miemb_sup'
    },
    '80954_cub_fluidoterap_miemb_inf': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80954_cub_fluidoterap_miemb_inf'
    },
    '80955_cub_tina_hubbard': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80955_cub_tina_hubbard'
    },
    '80956_cub_tina_horizont': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80956_cub_tina_horizont'
    },
    '80957_cub_baño_parafina': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80957_cub_baño_parafina'
    },
    '80958_tanque_terapeutico': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80958_tanque_terapeutico'
    },
    '80959_baño_vest_pac_hidroterap': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80959_baño_vest_pac_hidroterap'
    },
    '80960_area_hidrot': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '80960_area_hidrot'
    },
    '81007_area_terap_ocup': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81007_area_terap_ocup'
    },
    '81008_act_vid_diar': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81008_act_vid_diar'
    },
    '81009_rehab_card': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81009_rehab_card'
    },
    '81010_hig_colum': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81010_hig_colum'
    },
    '81011_sim_lab': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81011_sim_lab'
    },
    '81012_reeduc_lab': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81012_reeduc_lab'
    },
    '81013_ninos': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81013_ninos'
    },
    '81051_cama_sonoamort': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81051_cama_sonoamort'
    },
    '81052_aparat_audio_otoneuro': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81052_aparat_audio_otoneuro'
    },
    '81053_electronistag_videonistag': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81053_electronistag_videonistag'
    },
    '81054_sillones_giro': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81054_sillones_giro'
    },
    '81055_area_aud_oton': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81055_area_aud_oton'
    },
    '81100_area_terap_leng': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81100_area_terap_leng'
    },
    '81101_area_ter_leng': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81101_area_ter_leng'
    },
    '81202_local_espac_terap_resp': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81202_local_espac_terap_resp'
    },
    '81203_area_espiro': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81203_area_espiro'
    },
    '81204_area_polisom_poligra_adult': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81204_area_polisom_poligra_adult'
    },
    '81205_unid_ciud_int_resp': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81205_unid_ciud_int_resp'
    },
    '81251_local_dialisis': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81251_local_dialisis'
    },
    '81252_area_ent_pac_dialisis': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81252_area_ent_pac_dialisis'
    },
    '81253_area_dial': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81253_area_dial'
    },
    '81301_maquinas_hemo': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81301_maquinas_hemo'
    },
    '81302_equip_osmo_inversa_port': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81302_equip_osmo_inversa_port'
    },
    '81303_area_hemod': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81303_area_hemod'
    },
    '81304_equip_terap_ren_cont': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81304_equip_terap_ren_cont'
    },
    '81351_area_quimioterap': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81351_area_quimioterap'
    },
    '81401_cubic_toma_prod_lab_clin': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81401_cubic_toma_prod_lab_clin'
    },
    '81402_peines_lab_clin': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81402_peines_lab_clin'
    },
    '81403_lab_cuid_intens': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81403_lab_cuid_intens'
    },
    '81404_lab_hormonas': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81404_lab_hormonas'
    },
    '81405_cub_toma_prod_horm': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81405_cub_toma_prod_horm'
    },
    '81406_peines_lab_horm': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81406_peines_lab_horm'
    },
    '81407_peines_lab_genet': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81407_peines_lab_genet'
    },
    '81408_peines_lab_hemo_fisio_card': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81408_peines_lab_hemo_fisio_card'
    },
    '81409_peines_lab_med_medic': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81409_peines_lab_med_medic'
    },
    '81410_area_lab_clin': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81410_area_lab_clin'
    },
    '81411_lab_prep_suc_lec_hum': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81411_lab_prep_suc_lec_hum'
    },
    '81412_sala_hemod': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81412_sala_hemod'
    },
    '81451_peines_lab_ana_anato': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81451_peines_lab_ana_anato'
    },
    '81452_sala_autopsia': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81452_sala_autopsia'
    },
    '81453_refri_cadaveres': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81453_refri_cadaveres'
    },
    '81455_area_anat_pato': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81455_area_anat_pato'
    },
    '81500_area_educ_invest_med': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81500_area_educ_invest_med'
    },
    '81501_ofic_educ_inv_med': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81501_ofic_educ_inv_med'
    },
    '81502_aulas': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81502_aulas'
    },
    '81503_bibliohemeroteca': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81503_bibliohemeroteca'
    },
    '81505_auditorio': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81505_auditorio'
    },
    '81506_sala_cons_elect': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81506_sala_cons_elect'
    },
    '81507_sala_lectura': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81507_sala_lectura'
    },
    '81508_cent_doc_salud': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81508_cent_doc_salud'
    },
    '81509_cent_sim_exc_cli_quir': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81509_cent_sim_exc_cli_quir'
    },
    '81550_cubic_inyecc_curaciones': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81550_cubic_inyecc_curaciones'
    },
    '81551_cubic_retiro_yesos': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81551_cubic_retiro_yesos'
    },
    '81552_sala_procedimientos': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81552_sala_procedimientos'
    },
    '81553_sala_espera_areas_comun': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81553_sala_espera_areas_comun'
    },
    '81554_banios_vest_pac': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81554_banios_vest_pac'
    },
    '81608_unid_cuid_int': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81608_unid_cuid_int'
    },
    '81609_unid_cuid_int_adult': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81609_unid_cuid_int_adult'
    },
    '81610_unid_cuid_int_ped': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81610_unid_cuid_int_ped'
    },
    '81611_unid_cuid_int_neo': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81611_unid_cuid_int_neo'
    },
    '81612_unid_cuid_intem': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81612_unid_cuid_intem'
    },
    '81613_unid_metab': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81613_unid_metab'
    },
    '81614_unid_cuid_int_pac_quem': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81614_unid_cuid_int_pac_quem'
    },
    '81615_unid_traspl': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81615_unid_traspl'
    },
    '81616_area_pres_neg': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81616_area_pres_neg'
    },
    '81658_sala_dict': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81658_sala_dict'
    },
    '81712_ofic_direct_umae_med': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81712_ofic_direct_umae_med'
    },
    '81713_ofic_direct_umae_adm': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81713_ofic_direct_umae_adm'
    },
    '81714_ofic_direct_umae_subm': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81714_ofic_direct_umae_subm'
    },
    '81715_ofic_jef_div': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81715_ofic_jef_div'
    },
    '81716_ofic_coord_clin': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81716_ofic_coord_clin'
    },
    '81717_ofic_jef_serv_esp_umae': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81717_ofic_jef_serv_esp_umae'
    },
    '81718_ofic_dir_enf_umae': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81718_ofic_dir_enf_umae'
    },
    '81719_ofic_jef_enf': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81719_ofic_jef_enf'
    },
    '81720_ofic_ing_biom': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81720_ofic_ing_biom'
    },
    '81721_ofic_nut_diet': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81721_ofic_nut_diet'
    },
    '81722_serv_seg_trab_hosp_ab': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81722_serv_seg_trab_hosp_ab'
    },
    '81723_serv_seg_trab_hosp_cd': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81723_serv_seg_trab_hosp_cd'
    },
    '81724_ofic_personal': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81724_ofic_personal'
    },
    '81725_ofic_subj_ens_enf': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81725_ofic_subj_ens_enf'
    },
    '81730_bal_analit': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81730_bal_analit'
    },
    '81731_camp_ext': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81731_camp_ext'
    },
    '81732_crom_gases': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81732_crom_gases'
    },
    '81733_crom_liq': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81733_crom_liq'
    },
    '81734_espectrof_abs_atom': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81734_espectrof_abs_atom'
    },
    '81735_espectrof_infra': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81735_espectrof_infra'
    },
    '81736_espectrof_uv_vis': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81736_espectrof_uv_vis'
    },
    '81737_microbal': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81737_microbal'
    },
    '81738_microsc_opt': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81738_microsc_opt'
    },
    '81750_central_monitoreo': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81750_central_monitoreo'
    },
    '81751_monitor_sign_vital': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81751_monitor_sign_vital'
    },
    '81752_colposcopios': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81752_colposcopios'
    },
    '81753_unid_oftalmo_opto': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81753_unid_oftalmo_opto'
    },
    '81755_unid_facoemulsion': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81755_unid_facoemulsion'
    },
    '81756_laser_yag_nd_yag_co2': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81756_laser_yag_nd_yag_co2'
    },
    '81757_bombas_infusion': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81757_bombas_infusion'
    },
    '81758_calorimetros': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81758_calorimetros'
    },
    '81759_camara_hiperbaricas': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81759_camara_hiperbaricas'
    },
    '81760_laparoscopios': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81760_laparoscopios'
    },
    '81762_carro_paro_desfibra': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81762_carro_paro_desfibra'
    },
    '81763_carro_recolect_des_hosp': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81763_carro_recolect_des_hosp'
    },
    '81764_equipo_computo': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81764_equipo_computo'
    },
    '81765_impresoras': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81765_impresoras'
    },
    '81766_cam_fond_ojo_no_mid': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81766_cam_fond_ojo_no_mid'
    },
    '81767_cam_dig_no_mid_fond_ojo': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81767_cam_dig_no_mid_fond_ojo'
    },
    '81768_campim_comp': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81768_campim_comp'
    },
    '81769_unid_criocirug_gin': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81769_unid_criocirug_gin'
    },
    '81770_tot_ven_sop_vid': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81770_tot_ven_sop_vid'
    },
    '81776_angioscopio': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81776_angioscopio'
    },
    '81777_artroscopio': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81777_artroscopio'
    },
    '81778_broncoscopio': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81778_broncoscopio'
    },
    '81779_cam_cent_apl_gen': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81779_cam_cent_apl_gen'
    },
    '81780_colonoscopio': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81780_colonoscopio'
    },
    '81781_cistouretroscopio': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81781_cistouretroscopio'
    },
    '81782_esofagogastro': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81782_esofagogastro'
    },
    '81784_laringoscopio': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81784_laringoscopio'
    },
    '81785_maq_anest': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81785_maq_anest'
    },
    '81786_mesa_oper_cir_bar': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81786_mesa_oper_cir_bar'
    },
    '81787_nasofatingo': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81787_nasofatingo'
    },
    '81788_post_bio_perc': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81788_post_bio_perc'
    },
    '81789_rectosigmo': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81789_rectosigmo'
    },
    '81790_sist_biop_mam_auto_cont': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81790_sist_biop_mam_auto_cont'
    },
    '81791_mediastinos': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81791_mediastinos'
    },
    '81805_banc_sang': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81805_banc_sang'
    },
    '81806_puest_sang': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81806_puest_sang'
    },
    '81807_dep_sang': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81807_dep_sang'
    },
    '81808_serv_trans_sang': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81808_serv_trans_sang'
    },
    '81809_area_afer': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81809_area_afer'
    },
    '81810_tot_vent_no_inv_sop_vid': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81810_tot_vent_no_inv_sop_vid'
    },
    '81820_tot_vent_mec_sop_bid': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81820_tot_vent_mec_sop_bid'
    },
    '81821_vent_mec_neo_ped_adult': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81821_vent_mec_neo_ped_adult'
    },
    '81822_vent_mec_neo_ped': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81822_vent_mec_neo_ped'
    },
    '81823_vent_mec_ped_adult': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81823_vent_mec_ped_adult'
    },
    '81824_vent_alt_frec_osc_ped_neo': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81824_vent_alt_frec_osc_ped_neo'
    },
    '81825_vent_alt_frec_osc_adult_ped': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81825_vent_alt_frec_osc_adult_ped'
    },
    '81830_tot_vent_no_inv_bipap_cpap': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81830_tot_vent_no_inv_bipap_cpap'
    },
    '81831_vent_no_inv_neo': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81831_vent_no_inv_neo'
    },
    '81832_vent_no_inv_adult_ped': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81832_vent_no_inv_adult_ped'
    },
    '81840_tot_vent_sop_vid_trasl': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81840_tot_vent_sop_vid_trasl'
    },
    '81841_vent_trasl_neo': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81841_vent_trasl_neo'
    },
    '81842_vent_trasl_ped_adult': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81842_vent_trasl_ped_adult'
    },
    '81851_exp_clinc_elect': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81851_exp_clinc_elect'
    },
    '81852_internet': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81852_internet'
    },
    '81853_telemedicina': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81853_telemedicina'
    },
    '81854_red_datos': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81854_red_datos'
    },
    '81858_agua_pot_red_municipal': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81858_agua_pot_red_municipal'
    },
    '81859_cisterna': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81859_cisterna'
    },
    '81860_drebaje': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81860_drebaje'
    },
    '81861_planta_elect': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81861_planta_elect'
    },
    '81862_pozo_agua': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81862_pozo_agua'
    },
    '81863_sist_rec_agua': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81863_sist_rec_agua'
    },
    '81864_serv_int_lab': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81864_serv_int_lab'
    },
    '81865_resg_serv_tele_princ': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81865_resg_serv_tele_princ'
    },
    '81866_area_resg_serv_tele_sec': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81866_area_resg_serv_tele_sec'
    },
    '81867_ancho_band_mbps': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81867_ancho_band_mbps'
    },
    '81868_enl_satel': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81868_enl_satel'
    },
    '81869_tel_conv': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81869_tel_conv'
    },
    '81900_ambulancias': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81900_ambulancias'
    },
    '81901_ambulancias_equip': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81901_ambulancias_equip'
    },
    '81902_unid_aten_mov': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81902_unid_aten_mov'
    },
    '81903_otros_vehic_automotores': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81903_otros_vehic_automotores'
    },
    '81910_anex_camb_lin_dial': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81910_anex_camb_lin_dial'
    },
    '81911_anex_proc_derm': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81911_anex_proc_derm'
    },
    '81912_anex_cardio': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81912_anex_cardio'
    },
    '81913_anex_neuro': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81913_anex_neuro'
    },
    '81914_anex_ofta': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81914_anex_ofta'
    },
    '81915_anex_otorrin': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81915_anex_otorrin'
    },
    '81950_lab_salud_trab': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81950_lab_salud_trab'
    },
    '81951_cent_reg_seg_trab_cap_prod': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81951_cent_reg_seg_trab_cap_prod'
    },
    '81952_mod_div_salud_trab': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81952_mod_div_salud_trab'    
    },
    '81953_mod_coord_salud_trab': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81953_mod_coord_salud_trab'
    },
    '81954_ofic_lab_sal_trab': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81954_ofic_lab_sal_trab'
    },
    '81955_cub_anal_lab_sal_trab': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81955_cub_anal_lab_sal_trab'
    },
    '81956_area_rec_muest_amb': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81956_area_rec_muest_amb'
    },
    '81957_cub_tom_mues_bio': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81957_cub_tom_mues_bio'
    },
    '81958_area_prep_muest': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81958_area_prep_muest'
    },
    '81959_area_cromat': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81959_area_cromat'
    },
    '81960_area_espect': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81960_area_espect'
    },
    '81961_alm_mat': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81961_alm_mat'
    },
    '81962_alm_gas': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81962_alm_gas'
    },
    '81963_alm_react': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81963_alm_react'
    },
    '81964_alm_res_pelig': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81964_alm_res_pelig'
    },
    '81965_alm_equip_hig_ind': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81965_alm_equip_hig_ind'
    },
    '81966_aula_lab_sal_trab': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81966_aula_lab_sal_trab'
    },
    '50801_cama_ext_cir_gen': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '50801_cama_ext_cir_gen'
    },
    '51501_cama_ext_med_int': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '51501_cama_ext_med_int'
    },
    '52702_cuna_cal_rad_prem2': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '52702_cuna_cal_rad_prem2'
    },
    '52703_cuna_cal_rad_cun_pat': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '52703_cuna_cal_rad_cun_pat'
    },
    '70111_mod_enf_esp_mf2': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '70111_mod_enf_esp_mf2'
    },
    '81771_vent_mec_no_inv': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81771_vent_mec_no_inv'
    },
    '81772_vent_sop_vida_trans': {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: '81772_vent_sop_vida_trans'
    }
}, {
    tableName: 'tbl_ifu',
    timestamps: false,
});

Ifu.beforeCreate(async (ifu, options) => {
    if (ifu.cvePresupuestal) {
        const unidad = await UnidadesModel.findByPk(ifu.cvePresupuestal);
        if (!unidad) {
            throw new Error('cvePresupuestal no existe en la tabla Unidades');
        }
    }
});

module.exports = Ifu;