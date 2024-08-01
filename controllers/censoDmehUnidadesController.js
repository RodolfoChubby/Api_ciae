const CensoDmehUnidades = require('../models/censoDmehUnidades');

exports.getCensoDmehUnidades = async (req, res) => {
    const { date, diag } = req.query;

    let whereClause = {};

    if (date) {
        whereClause.date = date;
    }

    if (diag) {
        whereClause.diag = diag;
    }

    try {
        const censos = await CensoDmehUnidades.findAll({ where: whereClause });
        res.json(censos);
    } catch (error) { // Asegúrate de capturar el error aquí
        console.error('Error al obtener los censos:', error);
        res.status(500).json({ message: 'Error al obtener los censos', error });
    }
};

exports.getCensoDmehUnidadById = async (req, res) => {
    const { id } = req.params;

    try {
        const censo = await CensoDmehUnidades.findByPk(id);
        if (censo) {
            res.json(censo);
        } else {
            res.status(404).json({ message: 'Censo no encontrado' });
        }
    } catch (error) {
        console.error('Error al obtener el censo por ID:', error);
        res.status(500).json({ message: 'Error al obtener el censo', error });
    }
};

exports.createCensoDmehUnidad = async (req, res) => {
    const {
        cvePresupuestal, date, diag, total, mujeres_tot, hombres_tot, muj_men1, muj_1a4,
        muj_5a9, muj_10a14, muj_15a19, muj_20a24, muj_25a29, muj_30a34, muj_35a39, muj_40a44,
        muj_45a49, muj_50a54, muj_55a59, muj_60a64, muj_65a69, muj_70a74, muj_75a79, muj_80a84,
        muj_85mas, hom_men1, hom_1a4, hom_5a9, hom_10a14, hom_15a19, hom_20a24, hom_25a29, hom_30a34,
        hom_35a39, hom_40a44, hom_45a49, hom_50a54, hom_55a59, hom_60a64, hom_65a69, hom_70a74, hom_75a79,
        hom_80a84, hom_85mas
    } = req.body;

    let parsedDate;

    if (date) {
        if (date.length === 6) {
            // Formato YYYYMM
            const year = parseInt(date.substring(0, 4), 10);
            const month = parseInt(date.substring(4, 6), 10);
            parsedDate = new Date(year, month - 1, 1); // Primer día del mes
        } else {
            // Supongamos que el formato completo es YYYY-MM-DD
            parsedDate = new Date(date);
        }
    }

    try {
        // Crear un nuevo registro en la base de datos
        const nuevoCenso = await CensoDmehUnidades.create({
            cvePresupuestal, date: parsedDate, diag, total, mujeres_tot, hombres_tot, muj_men1, muj_1a4,
            muj_5a9, muj_10a14, muj_15a19, muj_20a24, muj_25a29, muj_30a34, muj_35a39, muj_40a44,
            muj_45a49, muj_50a54, muj_55a59, muj_60a64, muj_65a69, muj_70a74, muj_75a79, muj_80a84,
            muj_85mas, hom_men1, hom_1a4, hom_5a9, hom_10a14, hom_15a19, hom_20a24, hom_25a29, hom_30a34,
            hom_35a39, hom_40a44, hom_45a49, hom_50a54, hom_55a59, hom_60a64, hom_65a69, hom_70a74,
            hom_75a79, hom_80a84, hom_85mas
        });

        // Enviar la respuesta con el nuevo registro creado
        res.status(201).json(nuevoCenso);
    } catch (error) {
        console.error('Error al crear el censo:', error);
        res.status(500).json({ message: 'Error al crear el censo', error });
    }
};


exports.updateCensoDmehUnidades = async (req, res) => {
    const { id } = req.params;
    const {
        cvePresupuestal, date, diag, total, mujeres_tot, hombres_tot, muj_men1, muj_1a4,
        muj_5a9, muj_10a14, muj_15a19, muj_20a24, muj_25a29, muj_30a34, muj_35a39, muj_40a44,
        muj_45a49, muj_50a54, muj_55a59, muj_60a64, muj_65a69, muj_70a74, muj_75a79, muj_80a84,
        muj_85mas, hom_men1, hom_1a4, hom_5a9, hom_10a14, hom_15a19, hom_20a24, hom_25a29, hom_30a34,
        hom_35a39, hom_40a44, hom_45a49, hom_50a54, hom_55a59, hom_60a64, hom_65a69, hom_70a74, hom_75a79,
        hom_80a84, hom_85mas
    } = req.body;

    let parsedDate;

    if (date) {
        if (date.length === 6) {
            // Formato YYYYMM
            const year = parseInt(date.substring(0, 4), 10);
            const month = parseInt(date.substring(4, 6), 10);
            parsedDate = new Date(year, month - 1, 1); // Primer día del mes
        } else {
            // Supongamos que el formato completo es YYYY-MM-DD
            parsedDate = new Date(date);
        }
    }

    try {
        const censo = await CensoDmehUnidades.findByPk(id);

        if (!censo) {
            return res.status(404).json({ message: 'Censo no encontrado' });
        }

        await censo.update({
            cvePresupuestal, date: parsedDate, diag, total, mujeres_tot, hombres_tot, muj_men1, muj_1a4,
            muj_5a9, muj_10a14, muj_15a19, muj_20a24, muj_25a29, muj_30a34, muj_35a39, muj_40a44,
            muj_45a49, muj_50a54, muj_55a59, muj_60a64, muj_65a69, muj_70a74, muj_75a79, muj_80a84,
            muj_85mas, hom_men1, hom_1a4, hom_5a9, hom_10a14, hom_15a19, hom_20a24, hom_25a29, hom_30a34,
            hom_35a39, hom_40a44, hom_45a49, hom_50a54, hom_55a59, hom_60a64, hom_65a69, hom_70a74,
            hom_75a79, hom_80a84, hom_85mas
        });

        res.json(censo);
    } catch (error) {
        console.error('Error al actualizar el censo:', error);
        res.status(500).json({ message: 'Error al actualizar el censo', error });
    }
};


exports.deleteCensoDmehUnidades = async (req, res) => {
    const { id } = req.params;

    try {
        const censo = await CensoDmehUnidades.findByPk(id);

        if (!censo) {
            return res.status(404).json({ message: 'Censo no encontrado' });
        }

        await censo.destroy();
        res.json({ message: 'Censo eliminado correctamente' });
    } catch (error) {
        console.error('Error al emilinar el censo', error);
        res.status(500).json({ message: 'error al eliminar el censo', error });
    }
}   