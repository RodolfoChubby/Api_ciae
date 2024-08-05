const ExtractorCegrpac = require('../models/extractorCegrpac');

exports.getAllRecords = async (req, res) => {
  try {
    const records = await ExtractorCegrpac.findAll();
    res.status(200).json(records);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getRecordById = async (req, res) => {
  try {
    const record = await ExtractorCegrpac.findByPk(req.params.id);
    if (record) {
      res.status(200).json(record);
    } else {
      res.status(404).json({ message: 'Registro no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Crear un nuevo registro
exports.createRecord = async (req, res) => {
  try {
    const record = await ExtractorCegrpac.create(req.body);
    res.status(201).json(record);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar un registro
exports.updateRecord = async (req, res) => {
  try {
    const [updated] = await ExtractorCegrpac.update(req.body, {
      where: { id_extractorcegrpac: req.params.id }
    });
    if (updated) {
      const updatedRecord = await ExtractorCegrpac.findByPk(req.params.id);
      res.status(200).json(updatedRecord);
    } else {
      res.status(404).json({ message: 'Registro no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Eliminar un registro
exports.deleteExtractorCegrpac = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await ExtractorCegrpac.destroy({ where: { id_extractorcegrpac: id } });
    if (deleted) {
        res.status(200).json({ message: 'Registro eliminado correctamente' });
    } else {
      throw new Error('Extractor not found');
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
