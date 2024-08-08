const { DataTypes } = require('sequelize');
const sequelize = require('../configs/database'); 

const TblIfuStructure = sequelize.define('TblIfuStructure', {
  id_ifustructure: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  cve: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  description: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  desc_name: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  desc_name_var: {
    type: DataTypes.STRING(255),
    allowNull: true,
  }
}, {
  tableName: 'tbl_ifu_structure',
  timestamps: false, 
});

module.exports = TblIfuStructure;
