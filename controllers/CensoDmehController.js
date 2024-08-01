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
    const { id } = req.params; 

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

exports.deleteCensoDmeh = async (req, res) => {
    console.log('deleteCensoDmeh llamado'); 
    const { id } = req.params; 

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

// Crear un nuevo registro
exports.createCensoDmeh = async (req, res) => {
    const {
        cvePresupuestal, diag, date, pac_ccons_dmeh_sant_cen_prev,
        pac_scons_dmeh_cant_cen_prev, pac_ccons_dmeh_cant_cen_prev,
        pac_cdmeh_iden_egr_cant_neg_cons_pnvl, pac_cdmeh_iden_urg_cant_neg_cons_pnvl
    } = req.body;

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
        const newCensoDmeh = await CensoDmeh.create({
            cvePresupuestal,
            diag,
            date: parseDate(date),
            pac_ccons_dmeh_sant_cen_prev,
            pac_scons_dmeh_cant_cen_prev,
            pac_ccons_dmeh_cant_cen_prev,
            pac_cdmeh_iden_egr_cant_neg_cons_pnvl,
            pac_cdmeh_iden_urg_cant_neg_cons_pnvl
        });
        res.status(201).json(newCensoDmeh);
    } catch (error) {
        console.error('Error al crear la entrada:', error);
        res.status(500).json({ message: 'Error al crear la entrada', error });
    }
};

// Actualizar un registro
exports.updateCensoDmeh = async (req, res) => {
    const { id } = req.params;
    const {
        cvePresupuestal, diag, date, pac_ccons_dmeh_sant_cen_prev,
        pac_scons_dmeh_cant_cen_prev, pac_ccons_dmeh_cant_cen_prev,
        pac_cdmeh_iden_egr_cant_neg_cons_pnvl, pac_cdmeh_iden_urg_cant_neg_cons_pnvl
    } = req.body;

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

    if (!id) {
        return res.status(400).json({
            message: 'El identificador del Censo es requerido'
        });
    }

    try {
        const censoDmeh = await CensoDmeh.findByPk(id);

        if (!censoDmeh) {
            return res.status(404).json({
                message: 'Censo no encontrado'
            });
        }

        const updatedCensoDmeh = await censoDmeh.update({
            cvePresupuestal,
            diag,
            date: parseDate(date),
            pac_ccons_dmeh_sant_cen_prev,
            pac_scons_dmeh_cant_cen_prev,
            pac_ccons_dmeh_cant_cen_prev,
            pac_cdmeh_iden_egr_cant_neg_cons_pnvl,
            pac_cdmeh_iden_urg_cant_neg_cons_pnvl
        });

        res.json(updatedCensoDmeh);
    } catch (error) {
        console.error('Error al actualizar el Censo:', error);
        res.status(500).json({
            message: 'Error al actualizar el Censo',
            error
        });
    }
};
