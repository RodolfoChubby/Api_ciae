const Ifu = require('../models/ifu');

// Obtener todos los registros
exports.getAll = async (req, res) => {
    try {
        const ifu = await Ifu.findAll();
        res.json(ifu);
    } catch (error) {
        console.error('Error al obtener los registros:', error);
        res.status(500).json({ message: 'Error al obtener los registros', error });
    }
};

// Obtener un registro por ID
exports.getById = async (req, res) => {
    const { id } = req.params;
    try {
        const ifu = await Ifu.findByPk(id);
        if (ifu) {
            res.json(ifu);
        } else {
            res.status(404).json({ message: 'Registro no encontrado' });
        }
    } catch (error) {
        console.error('Error al obtener el registro por ID:', error);
        res.status(500).json({ message: 'Error al obtener el registro por ID', error });
    }
};


// Crear un nuevo registro
exports.create = async (req, res) => {
    try {
        const { cvePresupuestal, date } = req.body;

        if (!cvePresupuestal || !date) {
            return res.status(400).json({ message: 'cvePresupuestal and date are required' });
        }

        // Validar y parsear la fecha
        let parsedDate;
        if (date.length === 6) {
            // Formato YYYYMM
            const year = parseInt(date.substring(0, 4), 10);
            const month = parseInt(date.substring(4, 6), 10);
            if (month < 1 || month > 12) {
                return res.status(400).json({ message: 'Mes inválido en la fecha' });
            }
            parsedDate = new Date(year, month - 1, 1);
        } else {
            // Formato YYYY-MM-DD
            parsedDate = new Date(date);
            if (isNaN(parsedDate.getTime())) {
                return res.status(400).json({ message: 'Fecha inválida' });
            }
        }

        const ifu = await Ifu.create({ cvePresupuestal, date: parsedDate });
        res.status(201).json(ifu);
    } catch (error) {
        console.error('Error al crear el registro:', error);
        if (error.name === 'SequelizeUniqueConstraintError') {
            return res.status(409).json({ message: 'Duplicate entry', error });
        }
        res.status(500).json({ message: 'Error al crear el registro', error });
    }
};

// Actualizar un registro existente
exports.update = async (req, res) => {
    const { id } = req.params;
    const { date } = req.body;

    try {
        // Validar y parsear la fecha, si se proporciona
        if (date) {
            let parsedDate;
            if (date.length === 6) {
                // Formato YYYYMM
                const year = parseInt(date.substring(0, 4), 10);
                const month = parseInt(date.substring(4, 6), 10);
                if (month < 1 || month > 12) {
                    return res.status(400).json({ message: 'Mes inválido en la fecha' });
                }
                parsedDate = new Date(year, month - 1, 1);
            } else {
                // Formato YYYY-MM-DD
                parsedDate = new Date(date);
                if (isNaN(parsedDate.getTime())) {
                    return res.status(400).json({ message: 'Fecha inválida' });
                }
            }

            req.body.date = parsedDate;
        }

        const [updated] = await Ifu.update(req.body, {
            where: { id_ifu: id },  // Cambiar 'id_ifustructure' a 'id_ifu'
        });

        if (updated) {
            const updatedIfu = await Ifu.findByPk(id);
            res.json(updatedIfu);
        } else {
            res.status(404).json({ message: 'Registro no encontrado' });
        }
    } catch (error) {
        console.error('Error al actualizar el registro:', error);
        res.status(500).json({ message: 'Error al actualizar el registro', error });
    }
};



// Eliminar un registro
exports.delete = async (req, res) => {
    const { id } = req.params;
    try {
        const deleted = await Ifu.destroy({
            where: { id_ifu: id },
        });
        if (deleted) {
            res.status(204).send(); // No content
        } else {
            res.status(404).json({ message: 'Registro no encontrado' });
        }
    } catch (error) {
        console.error('Error al eliminar el registro:', error);
        res.status(500).json({ message: 'Error al eliminar el registro', error });
    }
};
