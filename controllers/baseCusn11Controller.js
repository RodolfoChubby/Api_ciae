const BaseCusn11 = require('../models/baseCusn11');

exports.getBaseCusn11Data = async (req, res) => {
    try {
        const data = await BaseCusn11.findAll({
            attributes: ['id_cusn11', 'cvePresupuestal', 'date', 'num', 'den']
        });
        res.json(data);
    } catch (error) {
        console.error('Error al obtener los datos de BaseCusn11:', error);
        res.status(500).json({
            message: 'Error al obtener los datos',
            error
        });
    }
};

exports.getBaseCusn11ById = async (req, res) => {
    const { id } = req.params; // Obtén el parámetro id de los parámetros de la URL

    try {
        // Busca una basecusn11 por su clave primaria
        const baseCusn11 = await BaseCusn11.findByPk(id);

        if (!baseCusn11) {
            return res.status(404).json({
                message: 'base no encontrada'
            });
        }

        res.json(baseCusn11);
    } catch (error) {
        console.error('Error al obtener la base:', error);
        res.status(500).json({
            message: 'Error al obtener la base',
            error
        });
    }
};

exports.createBaseCusn11 = async (req, res) => {
    const { id_cusn11, cvePresupuestal, date, num, den } = req.body;

    if (!cvePresupuestal || !date ) {
        return res.status(400).json({
            message: 'Faltan campos requeridos'
        });
    }

    try {
        const newBaseCusn11 = await BaseCusn11.create({
            id_cusn11,
            cvePresupuestal,
            date,
            num,
            den
        });
        res.status(201).json(newBaseCusn11);
    } catch (error) {
        console.error('Error al crear el item:', error);
        res.status(500).json({
            message: 'Error al crear el ítem',
            error
        });
    }
};

exports.deleteBaseCusn11 = async (req, res) => {
    console.log('deleteBaseCusn11 llamado'); 
    const { id } = req.params; 

    if (!id) {
        return res.status(400).json({
            message: 'El identificador de la base es requerido'
        });
    }

    try {
        // Buscar la base por el identificador
        const baseCusn11 = await BaseCusn11.findOne({ where: { id_cusn11 : id } });

        if (!baseCusn11) {
            return res.status(404).json({
                message: 'base no encontrada'
            });
        }

        // Eliminar base
        await BaseCusn11.destroy({ where: { id_cusn11 : id } });

        res.status(200).json({
            message: 'Base eliminada correctamente'
        });
    } catch (error) {
        console.error('Error al eliminar la base:', error);
        res.status(500).json({
            message: 'Error al eliminar la base',
            error
        });
    }
};

exports.updateBaseCusn11 = async (req, res) => {
    const { id } = req.params;
    const { cvePresupuestal, date, num, den } = req.body;

    if (!id) {
        return res.status(400).json({
            message: 'El identificador de la base es requerido'
        });
    }

    try {
        // Buscar la base por el identificador
        const baseCusn11 = await BaseCusn11.findByPk(id);

        if (!baseCusn11) {
            return res.status(404).json({
                message: 'base no encontrada'
            });
        }

        // Actualizar los campos
        const updatedBaseCusn11 = await baseCusn11.update({
            cvePresupuestal,
            date,
            num,
            den
        });

        res.json(updatedBaseCusn11);
    } catch (error) {
        console.error('Error al actualizar la base:', error);
        res.status(500).json({
            message: 'Error al actualizar la base',
            error
        });
    }
};
