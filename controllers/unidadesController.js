const UnidadesModel = require('../models/unidades');

exports.getUnidad = async (req, res) => {
    try {
        const unidades = await UnidadesModel.findAll({
            attributes: ['cvePresupuestal', 'unidad', 'tipo_unidad', 'delegacion', 'direccion', 'municipio', 'ini_servicio']
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


exports.createUnidades = async (req, res) => {
    const { cvePresupuestal, unidad, tipo_unidad, delegacion, direccion, municipio, ini_servicio
     } = req.body;

    // Verifica que se hayan proporcionado todos los campos necesarios
    if (!cvePresupuestal || !unidad || !tipo_unidad || !delegacion || !municipio) {
        return res.status(400).json({
            message: 'Faltan campos requeridos'
        });
    }

    try {
        // Crea un nuevo ítem en la base de datos
        const newUnidades = await UnidadesModel.create({
            cvePresupuestal,
            unidad,
            tipo_unidad,
            delegacion,
            direccion,
            municipio,
            ini_servicio
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

exports.deleteUnidad = async (req, res) => {
    console.log('deleteUnidad llamado'); // Log para depuración
    const { id } = req.params; // Obtén el parámetro id de los parámetros de la URL

    if (!id) {
        return res.status(400).json({
            message: 'El identificador de la unidad es requerido'
        });
    }

    try {
        const unidad = await UnidadesModel.findOne({ where: { cvePresupuestal: id } });

        if (!unidad) {
            return res.status(404).json({
                message: 'Unidad no encontrada'
            });
        }

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
