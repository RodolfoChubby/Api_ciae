// models/tblCensoDmehUnidad.js
const { DataTypes } = require('sequelize');
const sequelize = require('../configs/database'); 

const CensoDmehUnidades = sequelize.define('censoDmehUnidad', {
    id_censoDmehUnid: {
        type: DataTypes.INTEGER,
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
        allowNull: true
    },
    diag: {
        type: DataTypes.STRING(30),
        allowNull: true
    },
    total: {
        type: DataTypes.INTEGER,
        validate: {
            min: 0
        }
    },
    mujeres_tot: {
        type: DataTypes.INTEGER,
        validate: {
            min: 0
        }
    },
    hombres_tot: {
        type: DataTypes.INTEGER,
        validate: {
            min: 0
        }
    },
    muj_men1: {
        type: DataTypes.INTEGER,
        validate: {
            min: 0
        }
    },
    muj_1a4: {
        type: DataTypes.INTEGER,
        validate: {
            min: 0
        }
    },
    muj_5a9: {
        type: DataTypes.INTEGER,
        validate: {
            min: 0
        }
    },
    muj_10a14: {
        type: DataTypes.INTEGER,
        validate: {
            min: 0
        }
    },
    muj_15a19: {
        type: DataTypes.INTEGER,
        validate: {
            min: 0
        }
    },
    muj_20a24: {
        type: DataTypes.INTEGER,
        validate: {
            min: 0
        }
    },
    muj_25a29: {
        type: DataTypes.INTEGER,
        validate: {
            min: 0
        }
    },
    muj_30a34: {
        type: DataTypes.INTEGER,
        validate: {
            min: 0
        }
    },
    muj_35a39: {
        type: DataTypes.INTEGER,
        validate: {
            min: 0
        }
    },
    muj_40a44: {
        type: DataTypes.INTEGER,
        validate: {
            min: 0
        }
    },
    muj_45a49: {
        type: DataTypes.INTEGER,
        validate: {
            min: 0
        }
    },
    muj_50a54: {
        type: DataTypes.INTEGER,
        validate: {
            min: 0
        }
    },
    muj_55a59: {
        type: DataTypes.INTEGER,
        validate: {
            min: 0
        }
    },
    muj_60a64: {
        type: DataTypes.INTEGER,
        validate: {
            min: 0
        }
    },
    muj_65a69: {
        type: DataTypes.INTEGER,
        validate: {
            min: 0
        }
    },
    muj_70a74: {
        type: DataTypes.INTEGER,
        validate: {
            min: 0
        }
    },
    muj_75a79: {
        type: DataTypes.INTEGER,
        validate: {
            min: 0
        }
    },
    muj_80a84: {
        type: DataTypes.INTEGER,
        validate: {
            min: 0
        }
    },
    muj_85mas: {
        type: DataTypes.INTEGER,
        validate: {
            min: 0
        }
    },
    hom_men1: {
        type: DataTypes.INTEGER,
        validate: {
            min: 0
        }
    },
    hom_1a4: {
        type: DataTypes.INTEGER,
        validate: {
            min: 0
        }
    },
    hom_5a9: {
        type: DataTypes.INTEGER,
        validate: {
            min: 0
        }
    },
    hom_10a14: {
        type: DataTypes.INTEGER,
        validate: {
            min: 0
        }
    },
    hom_15a19: {
        type: DataTypes.INTEGER,
        validate: {
            min: 0
        }
    },
    hom_20a24: {
        type: DataTypes.INTEGER,
        validate: {
            min: 0
        }
    },
    hom_25a29: {
        type: DataTypes.INTEGER,
        validate: {
            min: 0
        }
    },
    hom_30a34: {
        type: DataTypes.INTEGER,
        validate: {
            min: 0
        }
    },
    hom_35a39: {
        type: DataTypes.INTEGER,
        validate: {
            min: 0
        }
    },
    hom_40a44: {
        type: DataTypes.INTEGER,
        validate: {
            min: 0
        }
    },
    hom_45a49: {
        type: DataTypes.INTEGER,
        validate: {
            min: 0
        }
    },
    hom_50a54: {
        type: DataTypes.INTEGER,
        validate: {
            min: 0
        }
    },
    hom_55a59: {
        type: DataTypes.INTEGER,
        validate: {
            min: 0
        }
    },
    hom_60a64: {
        type: DataTypes.INTEGER,
        validate: {
            min: 0
        }
    },
    hom_65a69: {
        type: DataTypes.INTEGER,
        validate: {
            min: 0
        }
    },
    hom_70a74: {
        type: DataTypes.INTEGER,
        validate: {
            min: 0
        }
    },
    hom_75a79: {
        type: DataTypes.INTEGER,
        validate: {
            min: 0
        }
    },
    hom_80a84: {
        type: DataTypes.INTEGER,
        validate: {
            min: 0
        }
    },
    hom_85mas: {
        type: DataTypes.INTEGER,
        validate: {
            min: 0
        }
    }
}, {
    tableName: 'tbl_censo_dmeh_unidad',
    timestamps: false
});

module.exports = CensoDmehUnidades;
