const TblImcob = require('../models/imcob');

// Obtener todos los registros
exports.getAll = async (req, res) => {
  try {
    const records = await TblImcob.findAll();
    res.status(200).json(records);
  } catch (error) {
    console.error('Error fetching records:', error);
    res.status(500).json({ message: 'Error fetching records' });
  }
};

// Obtener un registro por ID
exports.getById = async (req, res) => {
  const { id } = req.params;
  try {
    const record = await TblImcob.findByPk(id);
    if (record) {
      res.status(200).json(record);
    } else {
      res.status(404).json({ message: 'Record not found' });
    }
  } catch (error) {
    console.error('Error fetching record:', error);
    res.status(500).json({ message: 'Error fetching record' });
  }
};

// Crear un nuevo registro
exports.create = async (req, res) => {
  const { fecha, ...rest } = req.body;

  // Validar la fecha
  let parsedDate;
  if (fecha) {
    if (fecha.length === 6) {
      // Formato YYYYMM
      const year = parseInt(fecha.substring(0, 4), 10);
      const month = parseInt(fecha.substring(4, 6), 10);
      // Asegúrate de que el mes sea válido (1-12)
      if (month < 1 || month > 12) {
        return res.status(400).json({ message: 'Mes inválido en la fecha' });
      }
      parsedDate = new Date(year, month - 1, 1);
    } else {
      // Formato YYYY-MM-DD
      parsedDate = new Date(fecha);
      // Verificar si la fecha es válida
      if (isNaN(parsedDate.getTime())) {
        return res.status(400).json({ message: 'Fecha inválida' });
      }
    }
  } else {
    return res.status(400).json({ message: 'Falta la fecha' });
  }

  try {
    const newRecord = await TblImcob.create({ ...rest, fecha: parsedDate });
    res.status(201).json(newRecord);
  } catch (error) {
    console.error('Error creating record:', error);
    res.status(500).json({ message: 'Error creating record' });
  }
};


// Actualizar un registro existente
exports.update = async (req, res) => {
  const { id } = req.params;
  const { fecha, ...rest } = req.body;

  // Validar la fecha
  let parsedDate;
  if (fecha) {
    if (fecha.length === 6) {
      // Formato YYYYMM
      const year = parseInt(fecha.substring(0, 4), 10);
      const month = parseInt(fecha.substring(4, 6), 10);
      // Asegúrate de que el mes sea válido (1-12)
      if (month < 1 || month > 12) {
        return res.status(400).json({ message: 'Mes inválido en la fecha' });
      }
      parsedDate = new Date(year, month - 1, 1);
    } else {
      // Formato YYYY-MM-DD
      parsedDate = new Date(fecha);
      // Verificar si la fecha es válida
      if (isNaN(parsedDate.getTime())) {
        return res.status(400).json({ message: 'Fecha inválida' });
      }
    }
  }

  try {
    const [updated] = await TblImcob.update({ ...rest, fecha: parsedDate }, {
      where: { id_imcob: id },
    });
    if (updated) {
      const updatedRecord = await TblImcob.findByPk(id);
      res.status(200).json(updatedRecord);
    } else {
      res.status(404).json({ message: 'Record not found' });
    }
  } catch (error) {
    console.error('Error updating record:', error);
    res.status(500).json({ message: 'Error updating record' });
  }
};


// Eliminar un registro
exports.deleteRecord = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await TblImcob.destroy({
      where: { id_imcob: id },
    });
    if (deleted) {
      res.status(204).json();
    } else {
      res.status(404).json({ message: 'Record not found' });
    }
  } catch (error) {
    console.error('Error deleting record:', error);
    res.status(500).json({ message: 'Error deleting record' });
  }
};