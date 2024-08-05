const ExtractorCegrnac = require('../models/extractorCegrnac');

// Obtener todos los registros
exports.getAllExtractorCegrnac = async (req, res) => {
  try {
    const extractors = await ExtractorCegrnac.findAll();
    res.status(200).json(extractors);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener un registro por ID
exports.getExtractorCegrnacById = async (req, res) => {
    try {
      const { id } = req.params;
      const extractor = await ExtractorCegrnac.findByPk(id);
      if (extractor) {
        res.status(200).json(extractor);
      } else {
        res.status(404).json({ message: 'Extractor not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

// Crear un nuevo registro
exports.createExtractorCegrnac = async (req, res) => {
  try {
    const newExtractor = await ExtractorCegrnac.create(req.body);
    res.status(201).json(newExtractor);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar un registro existente
exports.updateExtractorCegrnac = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await ExtractorCegrnac.update(req.body, { where: { id_extractor_cegrnac: id } });
    if (updated) {
      const updatedExtractor = await ExtractorCegrnac.findOne({ where: { id_extractor_cegrnac: id } });
      res.status(200).json(updatedExtractor);
    } else {
      throw new Error('Extractor not found');
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Eliminar un registro
exports.deleteExtractorCegrnac = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await ExtractorCegrnac.destroy({ where: { id_extractor_cegrnac: id } });
    if (deleted) {
        res.status(200).json({ message: 'Registro eliminado correctamente' });
    } else {
      throw new Error('Extractor not found');
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
