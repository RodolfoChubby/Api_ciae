const CensoDmeh = require('../models/censoDmeh');

exports.getCensoDmeh = async (req, res) => {
    try {
        const data = await CensoDmeh.findAll();
        res.json(data);
    } catch (error) {
        console.error('Error al obtener los datos de CensoDmeh:', error);
        res.status(500).json({
            message: 'Error al obtener los datos',
            error
        });
    }
};

exports.getCensoDmehById = async (req, res) => {
    const { id } = req.params; // Obtén el parámetro id de los parámetros de la URL

    try {
        const censoDmeh = await CensoDmeh.findByPk(id);

        if (!censoDmeh) {
            return res.status(404).json({
                message: 'Censo no encontrado'
            });
        }

        res.json(censoDmeh);
    } catch (error) {
        console.error('Error al obtener el Censo:', error);
        res.status(500).json({
            message: 'Error al obtener el Censo',
            error
        });
    }
};

exports.createCensoDmeh = async (req, res) => {
    const {
        cvePresupuestal, diag, date, pac_ccons_dmeh_sant_cen_prev,
        pac_scons_dmeh_cant_cen_prev, pac_ccons_dmeh_cant_cen_prev,
        pac_cdmeh_iden_egr_cant_neg_cons_pnvl, pac_cdmeh_iden_urg_cant_neg_cons_pnvl
    } = req.body;

    try {
        const newCensoDmeh = await CensoDmeh.create({
            cvePresupuestal, diag, date, pac_ccons_dmeh_sant_cen_prev,
            pac_scons_dmeh_cant_cen_prev, pac_ccons_dmeh_cant_cen_prev,
            pac_cdmeh_iden_egr_cant_neg_cons_pnvl, pac_cdmeh_iden_urg_cant_neg_cons_pnvl
        });
        res.status(201).json(newCensoDmeh);
    } catch (error) {
        console.error('Error al crear la entrada:', error);
        res.status(500).json({ message: 'Error al crear la entrada', error });
    }
};

exports.deleteCensoDmeh = async (req, res) => {
    console.log('deleteCensoDmeh llamado'); // Log para depuración
    const { id } = req.params; // Obtén el parámetro id de los parámetros de la URL

    if (!id) {
        return res.status(400).json({
            message: 'El identificador del Censo es requerido'
        });
    }

    try {
        const censoDmeh = await CensoDmeh.findOne({ where: { id_censodmeh : id } });

        if (!censoDmeh) {
            return res.status(404).json({
                message: 'Censo no encontrado'
            });
        }

        await CensoDmeh.destroy({ where: { id_censodmeh : id } });

        res.status(200).json({
            message: 'Censo eliminado correctamente'
        });
    } catch (error) {
        console.error('Error al eliminar el Censo:', error);
        res.status(500).json({
            message: 'Error al eliminar el Censo',
            error
        });
    }
};
