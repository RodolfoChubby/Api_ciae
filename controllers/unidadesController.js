const UnidadesModel = require('../models/unidades');

exports.getUnidad = async (req, res) => {
    try {
        const unidades = await UnidadesModel.findAll({
            attributes: ['cvePresupuestal', 'unidad', 'tipo_unidad', 'delegacion', 'direccion',
                'municipio', 'ini_servicio']
        });
        res.json(unidades);
    } catch (error) {
        console.error('Error al obtener los ítems:', error);
        res.status(500).json({
            message: 'Error al obtener los ítems',
            error
        });
    }
};

exports.getUnidadById = async (req, res) => {
    const { id } = req.params; // Obtén el parámetro id de los parámetros de la URL

    try {
        // Busca la unidad por su clave primaria
        const unidad = await UnidadesModel.findByPk(id);

        if (!unidad) {
            return res.status(404).json({
                message: 'Unidad no encontrada'
            });
        }

        res.json(unidad);
    } catch (error) {
        console.error('Error al obtener la unidad:', error);
        res.status(500).json({
            message: 'Error al obtener la unidad',
            error
        });
    }
};

exports.disguiseUnidad = async (req, res) => {
    console.log('deleteUnidad llamado'); // Log para depuración
    const { id } = req.params; // Obtén el parámetro id de los parámetros de la URL

    if (!id) {
        return res.status(400).json({
            message: 'El identificador de la unidad es requerido'
        });
    }

    try {
        const unidad = await UnidadesModel.findOne({ where: { cvePresupuestal: id, is_deleted: false } });

        if (!unidad) {
            return res.status(404).json({
                message: 'Unidad no encontrada o ya eliminada'
            });
        }

        // Marca la unidad como eliminada
        await UnidadesModel.update({ is_deleted: true }, { where: { cvePresupuestal: id } });

        res.status(200).json({
            message: 'Unidad eliminada correctamente'
        });
    } catch (error) {
        console.error('Error al eliminar la unidad:', error);
        res.status(500).json({
            message: 'Error al eliminar la unidad',
            error
        });
    }
};

exports.deleteUnidad = async (req, res) => {
    console.log('deleteUnidad llamado'); // Log para depuración
    const { id } = req.params; // Obtén el parámetro id de los parámetros de la URL

    if (!id) {
        return res.status(400).json({
            message: 'El identificador de la unidad es requerido'
        });
    }

    try {
        // Busca la unidad por su clave primaria
        const unidad = await UnidadesModel.findOne({ where: { cvePresupuestal: id } });

        if (!unidad) {
            return res.status(404).json({
                message: 'Unidad no encontrada'
            });
        }

        // Elimina la unidad de la base de datos
        await UnidadesModel.destroy({ where: { cvePresupuestal: id } });

        res.status(200).json({
            message: 'Unidad eliminada correctamente'
        });
    } catch (error) {
        console.error('Error al eliminar la unidad:', error);
        res.status(500).json({
            message: 'Error al eliminar la unidad',
            error
        });
    }
};

// Crear un nuevo registro
exports.createUnidades = async (req, res) => {
    const { cvePresupuestal, unidad, tipo_unidad, delegacion, direccion, municipio, ini_servicio } = req.body;

    // Verifica que se hayan proporcionado todos los campos necesarios
    if (!cvePresupuestal || !unidad || !tipo_unidad || !delegacion || !municipio) {
        return res.status(400).json({
            message: 'Faltan campos requeridos'
        });
    }

    // Función para parsear la fecha
    const parseDate = (date) => {
        let parsedDate;
        if (date) {
            if (date.length === 6) {
                // Formato YYYYMM
                const year = parseInt(date.substring(0, 4), 10);
                const month = parseInt(date.substring(4, 6), 10);
                parsedDate = new Date(year, month - 1, 1);
            } else {
                // Supongamos que el formato completo es YYYY-MM-DD
                parsedDate = new Date(date);
            }
        }
        return parsedDate;
    };

    try {
        // Crea un nuevo ítem en la base de datos
        const newUnidades = await UnidadesModel.create({
            cvePresupuestal,
            unidad,
            tipo_unidad,
            delegacion,
            direccion,
            municipio,
            ini_servicio: parseDate(ini_servicio) // Convertir la fecha
        });
        res.status(201).json(newUnidades);
    } catch (error) {
        console.error('Error al crear el ítem:', error);
        res.status(500).json({
            message: 'Error al crear el ítem',
            error
        });
    }
};

// Actualizar un registro
exports.updateUnidad = async (req, res) => {
    const { id } = req.params;
    const { unidad, tipo_unidad, delegacion, direccion, municipio, ini_servicio } = req.body;

    if (!id) {
        return res.status(400).json({
            message: 'El identificador de la unidad es requerido'
        });
    }

    // Función para parsear la fecha
    const parseDate = (date) => {
        let parsedDate;
        if (date) {
            if (date.length === 6) {
                // Formato YYYYMM
                const year = parseInt(date.substring(0, 4), 10);
                const month = parseInt(date.substring(4, 6), 10);
                parsedDate = new Date(year, month - 1, 1);
            } else {
                // Supongamos que el formato completo es YYYY-MM-DD
                parsedDate = new Date(date);
            }
        }
        return parsedDate;
    };

    try {
        const unidadExistente = await UnidadesModel.findByPk(id);

        if (!unidadExistente) {
            return res.status(404).json({
                message: 'Unidad no encontrada'
            });
        }

        const updatedUnidad = await unidadExistente.update({
            unidad,
            tipo_unidad,
            delegacion,
            direccion,
            municipio,
            ini_servicio: parseDate(ini_servicio) // Convertir la fecha
        });

        res.json(updatedUnidad);
    } catch (error) {
        console.error('Error al actualizar la unidad:', error);
        res.status(500).json({
            message: 'Error al actualizar la unidad',
            error
        });
    }
};
