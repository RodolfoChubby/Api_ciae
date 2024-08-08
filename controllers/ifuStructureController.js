const TblIfuStructure = require('../models/ifuStructure'); 

// Obtener todos los registros
exports.getAll = async (req, res) => {
  try {
    const records = await TblIfuStructure.findAll();
    res.status(200).json(records);
  } catch (error) {
    console.error('Error al obtener todos los registros:', error);
    res.status(500).json({ message: 'Error al obtener todos los registros' });
  }
};

// Obtener un registro por ID
exports.getById = async (req, res) => {
  const { id } = req.params;
  try {
    const record = await TblIfuStructure.findByPk(id);
    if (!record) {
      return res.status(404).json({ message: 'Registro no encontrado' });
    }
    res.status(200).json(record);
  } catch (error) {
    console.error('Error al obtener el registro:', error);
    res.status(500).json({ message: 'Error al obtener el registro' });
  }
};

// Crear un nuevo registro
exports.create = async (req, res) => {
  const { cve, description, desc_name, desc_name_var } = req.body;
  try {
    const newRecord = await TblIfuStructure.create({ cve, description, desc_name, desc_name_var });
    res.status(201).json(newRecord);
  } catch (error) {
    console.error('Error al crear el registro:', error);
    res.status(500).json({ message: 'Error al crear el registro' });
  }
};

// Actualizar un registro por ID
exports.update = async (req, res) => {
  const { id } = req.params;
  const { cve, description, desc_name, desc_name_var } = req.body;
  try {
    const [updated] = await TblIfuStructure.update(
      { cve, description, desc_name, desc_name_var },
      { where: { id_ifustructure: id } }
    );
    if (updated) {
      const updatedRecord = await TblIfuStructure.findByPk(id);
      res.status(200).json(updatedRecord);
    } else {
      res.status(404).json({ message: 'Registro no encontrado' });
    }
  } catch (error) {
    console.error('Error al actualizar el registro:', error);
    res.status(500).json({ message: 'Error al actualizar el registro' });
  }
};

// Eliminar un registro por ID
exports.deleteRecord = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await TblIfuStructure.destroy({ where: { id_ifustructure: id } });
    if (deleted) {
      res.status(204).json({ message: 'Registro eliminado' });
    } else {
      res.status(404).json({ message: 'Registro no encontrado' });
    }
  } catch (error) {
    console.error('Error al eliminar el registro:', error);
    res.status(500).json({ message: 'Error al eliminar el registro' });
  }
};