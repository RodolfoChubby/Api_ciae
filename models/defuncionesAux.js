const { DataTypes } = require('sequelize');
const sequelize = require('../configs/database');

const DefuncionesAux = sequelize.define('defuncionesAux',{
    id_defuncionesaux: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    tipohoja: {
        type: DataTypes.INTEGER(5),
        allowNull: true
    },
    tipohojad: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    folio: {
        type: DataTypes.STRING(20),
        allowNull: true
    },
    foliocontrol: {
        type: DataTypes.STRING(20),
        allowNull: true
    },
    nombre: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    primerapellido: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    segundoapellido: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    fechanacimiento: {
        type: DataTypes.DATE,
        allowNull: true
    },
    sexo: {
        type: DataTypes.INTEGER(3),
        allowNull: true
    },
    sexod: {
        type: DataTypes.STRING(20),
        allowNull: true
    },
    entidadnacimiento: {
        type: DataTypes.INTEGER(3),
        allowNull: true
    },
    entidadnacimientod: {
        type: DataTypes.STRING(20),
        allowNull: true
    },
    curp: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    se_reconocia_afromexicano: {
        type: DataTypes.INTEGER(3),
        allowNull: true
    },
    se_reconocia_afromexicanod: {
        type: DataTypes.STRING(20),
        allowNull: true
    },
    se_considera_indigena: {
        type: DataTypes.INTEGER(3),
        allowNull: true
    },
    se_considera_indigenad: {
        type: DataTypes.STRING(20),
        allowNull: true
    },
    hablalenguaindigena: {
        type: DataTypes.INTEGER(3),
        allowNull: true
    },
    hablalenguaindigenad: {
        type: DataTypes.STRING(20),
        allowNull: true
    },
    especifique_lengua_hablada: {
        type: DataTypes.INTEGER(3),
        allowNull: true
    },
    especifique_lengua_habladad: {
        type: DataTypes.STRING(20),
        allowNull: true
    },
    nacionalidad: {
        type: DataTypes.INTEGER(3),
        allowNull: true
    },
    nacionalidadd: {
        type: DataTypes.STRING(20),
        allowNull: true
    },
    otranacionalidad: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    edad: {
        type: DataTypes.INTEGER(3),
        allowNull: true
    },
    claveedad: {
        type: DataTypes.INTEGER(3),
        allowNull: true
    },
    claveedadd: {
        type: DataTypes.STRING(20),
        allowNull: true
    },
    foliocertificadonacimiento: {
        type: DataTypes.STRING(12),
        allowNull: true
    },
    edadgestacional: {
        type: DataTypes.INTEGER(3),
        allowNull: true
    },
    peso: {
        type: DataTypes.INTEGER(5),
        allowNull: true
    },
    estadoconyugal: {
        type: DataTypes.INTEGER(3),
        allowNull: true
    },
    estadoconyugald: {
        type: DataTypes.STRING(20),
        allowNull: true
    },
    resideextranjero: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    paisresidencia: {
        type: DataTypes.INTEGER(5),
        allowNull: true
    },
    paisresidenciad: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    entidadresidencia: {
        type: DataTypes.INTEGER(5),
        allowNull: true
    },
    entidadresidenciad: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    municipioresidencia: {
        type: DataTypes.INTEGER(3),
        allowNull: true
    },
    municipioresidenciad: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    localidadresidencia: {
        type: DataTypes.INTEGER(5),
        allowNull: true
    },
    localidadresidenciad: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    codigopostalresidencia: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    tipovialidadresidencia: {
        type: DataTypes.INTEGER(5),
        allowNull: true
    },
    tipovialidadresidenciad: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    nombrevialidadresidencia: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    numeroexteriorresidencia: {
        type: DataTypes.STRING(20),
        allowNull: true
    },
    numerointeriorresidencia: {
        type: DataTypes.STRING(20),
        allowNull: true
    },
    tipoasentamientoresidencia: {
        type: DataTypes.INTEGER(5),
        allowNull: true
    },
    tipoasentamientoresidenciad: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    nombreasentamientoresidencia: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    escolaridad: {
        type: DataTypes.INTEGER(3),
        allowNull: true
    },
    escolaridadd: {
        type: DataTypes.STRING(20),
        allowNull: true
    },
    claveocupacionhabitual: {
        type: DataTypes.INTEGER(3),
        allowNull: true
    },
    claveocupacionhabituald: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    trabajaactualmente: {
        type: DataTypes.INTEGER(3),
        allowNull: true
    },
    trabajaactualmented: {
        type: DataTypes.STRING(20),
        allowNull: true
    },
    afiliacion: {
        type: DataTypes.INTEGER(3),
        allowNull: true
    },
    afiliaciond: {
        type: DataTypes.STRING(20),
        allowNull: true
    },
    especifique_afiliacion: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    numeroafiliacion: {
        type: DataTypes.STRING(20),
        allowNull: true
    },
    nombreinformante: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    primerapellidoinformante: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    segundoapellidoinformante: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    parentescoinformante: {
        type: DataTypes.INTEGER(3),
        allowNull: true
    },
    parentescoinformanted: {
        type: DataTypes.STRING(20),
        allowNull: true
    },
    firma_informante: {
        type: DataTypes.INTEGER(3),
        allowNull: true
    },
    firma_informanted: {
        type: DataTypes.STRING(20),
        allowNull: true
    },
    sitiodefuncion: {
        type: DataTypes.INTEGER(3),
        allowNull: true
    },
    sitiodefunciond: {
        type: DataTypes.STRING(20),
        allowNull: true
    },
    clues: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    nombreunidadmedica: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    entidaddefuncion: {
        type: DataTypes.INTEGER(3),
        allowNull: true
    },
    entidaddefunciond: {
        type: DataTypes.STRING(20),
        allowNull: true
    },
    municipiodefuncion: {
        type: DataTypes.INTEGER(3),
        allowNull: true
    },
    municipiodefunciond: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    localidaddefuncion: {
        type: DataTypes.INTEGER(3),
        allowNull: true
    },
    localidaddefunciond: {
        type: DataTypes.STRING(20),
        allowNull: true
    },
    codigopostaldefuncion: {
        type: DataTypes.STRING(10),
        allowNull: true
    },
    tipovialidaddefuncion: {
        type: DataTypes.INTEGER(3),
        allowNull: true
    },
    tipovialidaddefunciond: {
        type: DataTypes.STRING(20),
        allowNull: true
    },
    nombrevialidaddefuncion: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    numeroexteriordefuncion: {
        type: DataTypes.STRING(20),
        allowNull: true
    },
    tipoasentamientodefuncion: {
        type: DataTypes.INTEGER(3),
        allowNull: true
    },
    tipoasentamientodefunciond: {
        type: DataTypes.STRING(20),
        allowNull: true
    },
    nombreasentamientodefuncion: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    jurisdicciondefuncion: {
        type: DataTypes.INTEGER(3),
        allowNull: true
    },
    jurisdicciondefunciond: {
        type: DataTypes.STRING(20),
        allowNull: true
    },
    fechadefuncion: {
        type: DataTypes.DATE,
        allowNull: true
    },
    horadefuncion: {
        type: DataTypes.STRING(20),
        allowNull: true
    },
    atencionmedica: {
        type: DataTypes.INTEGER(3),
        allowNull: true
    },
    atencionmedicad: {
        type: DataTypes.STRING(20),
        allowNull: true
    },
    realizo_cirugia: {
        type: DataTypes.INTEGER(3),
        allowNull: true
    },
    realizo_cirugiad: {
        type: DataTypes.STRING(20),
        allowNull: true
    },
    fecha_cirugia: {
        type: DataTypes.DATE,
        allowNull: true
    },
    motivo_cirugia: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    muerteaccidentalviolenta: {
        type: DataTypes.INTEGER(3),
        allowNull: true
    },
    muerteaccidentalviolentad: {
        type: DataTypes.STRING(20),
        allowNull: true
    },
    intencionevento: {
        type: DataTypes.INTEGER(3),
        allowNull: true
    },
    intencioneventod: {
        type: DataTypes.STRING(20),
        allowNull: true
    },
    descripcioncausa_a: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    clavetiempo: {
        type: DataTypes.INTEGER(3),
        allowNull: true
    },
    clavetiempodes: {
        type: DataTypes.STRING(20),
        allowNull: true
    },
    tiempo: {
        type: DataTypes.INTEGER(5),
        allowNull: true
    },
    codigociecausa_a_1: {
        type: DataTypes.STRING(5),
        allowNull: true
    },
    codigociecausa_a_2: {
        type: DataTypes.STRING(5),
        allowNull: true
    },
    codigociecausa_a_3: {
        type: DataTypes.STRING(5),
        allowNull: true
    },
    descripcioncausa_b: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    clavetiempob: {
        type: DataTypes.INTEGER(3),
        allowNull: true
    },
    clavetiempobd: {
        type: DataTypes.STRING(20),
        allowNull: true
    },
    tiempob: {
        type: DataTypes.INTEGER(5),
        allowNull: true
    },
    codigociecausa_b_1: {
        type: DataTypes.STRING(5),
        allowNull: true
    },
    codigociecausa_b_2: {
        type: DataTypes.STRING(5),
        allowNull: true
    },
    codigociecausa_b_3: {
        type: DataTypes.STRING(5),
        allowNull: true
    },
    descripcioncausa_c: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    clavetiempoc: {
        type: DataTypes.INTEGER(3),
        allowNull: true
    },
    clavetiempocd: {
        type: DataTypes.STRING(20),
        allowNull: true
    },
    tiempoc: {
        type: DataTypes.INTEGER(5),
        allowNull: true
    },
    codigociecausa_c_1: {
        type: DataTypes.STRING(5),
        allowNull: true
    },
    codigociecausa_c_2: {
        type: DataTypes.STRING(5),
        allowNull: true
    },
    codigociecausa_c_3: {
        type: DataTypes.STRING(5),
        allowNull: true
    },
    descripcioncausa_d: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    clavetiempod: {
        type: DataTypes.INTEGER(3),
        allowNull: true
    },
    clavetiempodd: {
        type: DataTypes.STRING(20),
        allowNull: true
    },
    tiempod: {
        type: DataTypes.INTEGER(5),
        allowNull: true
    },
    codigociecausa_d_1: {
        type: DataTypes.STRING(5),
        allowNull: true
    },
    codigociecausa_d_2: {
        type: DataTypes.STRING(5),
        allowNull: true
    },
    codigociecausa_d_3: {
        type: DataTypes.STRING(5),
        allowNull: true
    },
    descripcioncausa_1: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    clavetiempo1: {
        type: DataTypes.INTEGER(3),
        allowNull: true
    },
    clavetiempo1d: {
        type: DataTypes.STRING(20),
        allowNull: true
    },
    tiempo1: {
        type: DataTypes.INTEGER(5),
        allowNull: true
    },
    codigociecausa_1_1: {
        type: DataTypes.STRING(5),
        allowNull: true
    },
    codigociecausa_1_2: {
        type: DataTypes.STRING(5),
        allowNull: true
    },
    codigociecausa_1_3: {
        type: DataTypes.STRING(5),
        allowNull: true
    },
    ////
    descripcioncausa_2: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    clavetiempo2: {
        type: DataTypes.INTEGER(3),
        allowNull: true
    },
    clavetiempo2d: {
        type: DataTypes.STRING(20),
        allowNull: true
    },
    tiempo_2: {
        type: DataTypes.INTEGER(5),
        allowNull: true
    },
    codigociecausa_2_1: {
        type: DataTypes.STRING(5),
        allowNull: true
    },
    codigociecausa_2_2: {
        type: DataTypes.STRING(5),
        allowNull: true
    },
    codigociecausa_2_3: {
        type: DataTypes.STRING(5),
        allowNull: true
    },
    ciecausabasica: {
        type: DataTypes.STRING(5),
        allowNull: true
    },
    ciecausabasicad: {
        type: DataTypes.STRING(80),
        allowNull: true
    },
    cie_codigo_adicional: {
        type: DataTypes.STRING(5),
        allowNull: true
    },
    cie_codigo_adicionald: {
        type: DataTypes.STRING(5),
        allowNull: true
    },
    cie_causa_externa: {
        type: DataTypes.INTEGER(5),
        allowNull: true
    },
    cie_causa_externad: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    practiconecropsia: {
        type: DataTypes.INTEGER(3),
        allowNull: true
    },
    practiconecropsiad: {
        type: DataTypes.STRING(20),
        allowNull: true
    },
    hallazgos: {
        type: DataTypes.INTEGER(3),
        allowNull: true
    },
    hallazgosd: {
        type: DataTypes.STRING(20),
        allowNull: true
    },
    ocurrioduranteembarazo: {
        type: DataTypes.INTEGER(3),
        allowNull: true
    },
    ocurrioduranteembarazod: {
        type: DataTypes.STRING(20),
        allowNull: true
    },
    causapropiaembarazo: {
        type: DataTypes.INTEGER(3),
        allowNull: true
    },
    causapropiaembarazod: {
        type: DataTypes.STRING(20),
        allowNull: true
    },
    causacomplicoembarazo: {
        type: DataTypes.INTEGER(3),
        allowNull: true
    },
    causacomplicoembarazod: {
        type: DataTypes.STRING(20),
        allowNull: true
    },
    posiblemuertematerna: {
        type: DataTypes.INTEGER(3),
        allowNull: true
    },
    posiblemuertematernad: {
        type: DataTypes.STRING(20),
        allowNull: true
    },
    muerte_encefalica: {
        type: DataTypes.INTEGER(3),
        allowNull: true
    },
    muerte_encefalicad: {
        type: DataTypes.STRING(20),
        allowNull: true
    },
    donador: {
        type: DataTypes.INTEGER(3),
        allowNull: true
    },
    donadord: {
        type: DataTypes.STRING(20),
        allowNull: true
    },
    vigilanciaepidemiologica: {
        type: DataTypes.INTEGER(3),
        allowNull: true
    },
    vigilanciaepidemiologicad: {
        type: DataTypes.STRING(20),
        allowNull: true
    },
    ocurrioentrabajo: {
        type: DataTypes.INTEGER(3),
        allowNull: true
    },
    ocurrioentrabajod: {
        type: DataTypes.STRING(20),
        allowNull: true
    },
    sitioocurrencialesion: {
        type: DataTypes.INTEGER(3),
        allowNull: true
    },
    sitioocurrencialesiond: {
        type: DataTypes.STRING(20),
        allowNull: true
    },
    actamp: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    parentescoagresor: {
        type: DataTypes.INTEGER(3),
        allowNull: true
    },
    parentescoagresord: {
        type: DataTypes.STRING(20),
        allowNull: true
    },
    conoce_motivo_lesion: {
        type: DataTypes.INTEGER(3),
        allowNull: true
    },
    conoce_motivo_lesiond: {
        type: DataTypes.STRING(20),
        allowNull: true
    },
    descripcionsituacion: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    entidadocurrencia: {
        type: DataTypes.INTEGER(3),
        allowNull: true
    },
    entidadocurrenciad: {
        type: DataTypes.STRING(20),
        allowNull: true
    },
    municipioocurrencia: {
        type: DataTypes.INTEGER(3),
        allowNull: true
    },
    municipioocurrenciad: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    localidadocurrencia: {
        type: DataTypes.INTEGER(3),
        allowNull: true
    },
    localidadocurrenciad: {
        type: DataTypes.STRING(20),
        allowNull: true
    },
    codigopostal: {
        type: DataTypes.STRING(10),
        allowNull: true
    },
    tipovialidad: {
        type: DataTypes.INTEGER(3),
        allowNull: true
    },
    tipovialidadd: {
        type: DataTypes.STRING(20),
        allowNull: true
    },
    nombrevialidad: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    numeroexterior: {
        type: DataTypes.STRING(20),
        allowNull: true
    },
    numerointerior: {
        type: DataTypes.STRING(20),
        allowNull: true
    },
    tipoasentamiento: {
        type: DataTypes.INTEGER(3),
        allowNull: true
    },
    tipoasentamientod: {
        type: DataTypes.STRING(20),
        allowNull: true
    },
    nombreasentamiento: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    certificadopor: {
        type: DataTypes.INTEGER(5),
        allowNull: true
    },
    certificadopord: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    expecifiqueotro: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    nombrecertificante: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    primerapellidocertificante: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    segundoapellidocertificante: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    cedulaprofesional: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    firmacertificante: {
        type: DataTypes.INTEGER(5),
        allowNull: true
    },
    firmacertificanted: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    entidadcertificante: {
        type: DataTypes.INTEGER(5),
        allowNull: true
    },
    municipiocertificante: {
        type: DataTypes.INTEGER(3),
        allowNull: true
    },
    municipiocertificanted: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    localidadcertificante: {
        type: DataTypes.INTEGER(5),
        allowNull: true
    },
    localidadcertificanted: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    codigopostalcertificante: {
        type: DataTypes.STRING(10),
        allowNull: true
    },
    tipovialidadcertificante: {
        type: DataTypes.INTEGER(5),
        allowNull: true
    },
    tipovialidadcertificanted: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    nombrevialidadcertificante: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    numeroexteriorcertificante: {
        type: DataTypes.STRING(20),
        allowNull: true
    },
    numerointeriorcertificante: {
        type: DataTypes.STRING(20),
        allowNull: true
    },
    tipoasentamientocertificante: {
        type: DataTypes.INTEGER(5),
        allowNull: true
    },
    tipoasentamientocertificanted: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    nombreasentamientocertificante: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    telefonocertificante: {
        type: DataTypes.STRING(15),
        allowNull: true
    },
    fechacertificacion: {
        type: DataTypes.DATE,
        allowNull: true
    },
    numerojuzgado: {
        type: DataTypes.STRING(20),
        allowNull: true
    },
    numerolibro: {
        type: DataTypes.STRING(20),
        allowNull: true
    },
    numeroacta: {
        type: DataTypes.STRING(20),
        allowNull: true
    },
    entidadjuzgado: {
        type: DataTypes.INTEGER(3),
        allowNull: true
    },
    entidadjuzgadod: {
        type: DataTypes.STRING(20),
        allowNull: true
    },
    municipiojuzgado: {
        type: DataTypes.INTEGER(3),
        allowNull: true
    },
    municipiojuzgadod: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    localidadjuzgado: {
        type: DataTypes.INTEGER(3),
        allowNull: true
    },
    localidadjuzgadod: {
        type: DataTypes.STRING(20),
        allowNull: true
    },
    fecharegistro: {
        type: DataTypes.DATE,
        allowNull: true
    },
    fechainsercion: {
        type: DataTypes.DATE,
        allowNull: true
    },
    fecha_actualizacion: {
        type: DataTypes.DATE,
        allowNull: true
    },
    fecha_codificacion: {
        type: DataTypes.DATE,
        allowNull: true
    },
    ent_residencia_key: {
        type: DataTypes.INTEGER(5),
        allowNull: true
    },
    ent_ocurrencia_key: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    anio: {
        type: DataTypes.INTEGER(4),
        allowNull: true
    },
    mes: {
        type: DataTypes.INTEGER(2),
        allowNull: true
    },
    login: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    user_nivel: {
        type: DataTypes.INTEGER(5),
        allowNull: true
    },
    user_nivel1: {
        type: DataTypes.INTEGER(5),
        allowNull: true
    },
    user_nivel2: {
        type: DataTypes.INTEGER(5),
        allowNull: true
    },
    user_nivel3: {
        type: DataTypes.INTEGER(5),
        allowNull: true
    },
    clues_nivel: {
        type: DataTypes.INTEGER(5),
        allowNull: true
    },
    estado_captura: {
        type: DataTypes.INTEGER(5),
        allowNull: true
    },
    agregadomedico: {
        type: DataTypes.STRING(15),
        allowNull: true
    },
    unidadadscripcion: {
        type: DataTypes.STRING(12),
        allowNull: true
    },
    unidadatencion: {
        type: DataTypes.STRING(12),
        allowNull: true
    },
    servicioespecialidad: {
        type: DataTypes.STRING(10),
        allowNull: true
    }
}, {
    tableName: 'tbl_defuncionesaux',
    timestamps: false 
},
    {
        indexes: [
            {
                unique: true,
                fields: ['id_defuncionesaux']
            },
            {
                unique: false,
                fields: ['folio']
            }
        ]
    })

module.exports = DefuncionesAux;