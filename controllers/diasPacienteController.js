const DiasPaciente = require('../models/diasPaciente');

// Peticion para visualizar todos los registros
exports.getAllDiasPaciente = async (req, res) => {
    try {
        const diasPacienteRecords = await DiasPaciente.findAll();
        res.status(200).json(diasPacienteRecords);
    } catch (error) {
        console.error('Error al obtener los registros:', error);
        res.status(500).json({ message: 'Error al obtener los registros', error });
    }
};

// Peticion para obtener un solo registro mediante su id
exports.getDiasPacienteById = async (req, res) => {
    const { id } = req.params;

    try {
        const diasPacienteRecord = await DiasPaciente.findByPk(id);

        if (!diasPacienteRecord) {
            return res.status(404).json({ message: 'Registro no encontrado' });
        }

        res.status(200).json(diasPacienteRecord);
    } catch (error) {
        console.error('Error al obtener el registro:', error);
        res.status(500).json({ message: 'Error al obtener el registro', error });
    }
};

// Peticion para crear un nuevo registro
exports.createDiasPaciente = async (req, res) => {
    const { cvePresupuestal, fecha, cirugia, gineco_obstetrica, medicina, pedriatria } = req.body;

    // Validación de fecha
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

    // Verificar que se hayan proporcionado todos los campos necesarios
    if (!cvePresupuestal || !fecha) {
        return res.status(400).json({ message: 'Faltan campos requeridos' });
    }

    try {
        const newDiasPaciente = await DiasPaciente.create({
            cvePresupuestal,
            fecha: parsedDate,
            cirugia,
            gineco_obstetrica,
            medicina,
            pedriatria
        });

        res.status(201).json(newDiasPaciente);
    } catch (error) {
        console.error('Error al crear el registro:', error);
        res.status(500).json({ message: 'Error al crear el registro', error });
    }
};


// Peticion para actualizar un registro ya existente mediante su id
exports.updateDiasPaciente = async (req, res) => {
    const { id } = req.params;
    const { cvePresupuestal, fecha, cirugia, gineco_obstetrica, medicina, pedriatria } = req.body;

      // Validación de fecha
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
        const diasPacienteRecord = await DiasPaciente.findByPk(id);

        if (!diasPacienteRecord) {
            return res.status(404).json({ message: 'Registro no encontrado' });
        }

        const updatedDiasPaciente = await diasPacienteRecord.update({
            cvePresupuestal,
            fecha: parsedDate,
            cirugia,
            gineco_obstetrica,
            medicina,
            pedriatria
        });

        res.status(200).json(updatedDiasPaciente);
    } catch (error) {
        console.error('Error al actualizar el registro:', error);
        res.status(500).json({ message: 'Error al actualizar el registro', error });
    }
};

// Peticion para eliminar un registro mediante su id
exports.deleteDiasPaciente = async (req, res) => {
    const { id } = req.params;

    try {
        const diasPacienteRecord = await DiasPaciente.findByPk(id);

        if (!diasPacienteRecord) {
            return res.status(404).json({ message: 'Registro no encontrado' });
        }

        await diasPacienteRecord.destroy();
        res.status(200).json({ message: 'Registro eliminado con éxito' });
    } catch (error) {
        console.error('Error al eliminar el registro:', error);
        res.status(500).json({ message: 'Error al eliminar el registro', error });
    }
};
