const Usuario = require('../models/usuario');

// Controlador para manejar solicitudes GET
exports.getUsuario = async (req, res) => {
    try {
        const Usuarios = await Usuario.findAll({
            attributes: ['usua_matricula', 'cvePresupuestal', 'nombres', 'apeido_pat', 'apeido_mat',
                'telefono', 'email', 'password', 'rol']
        });
        res.json(Usuarios);
    } catch (error) {
        console.error('Error al obtener los ítems:', error);
        res.status(500).json({
            message: 'Error al obtener los ítems',
            error
        });
    }
};

exports.getUsuarioById = async (req, res) => {
    const { id } = req.params; // Obtén el parámetro id de los parámetros de la URL

    try {
        // Busca el usuario por su clave primaria
        const usuario = await Usuario.findByPk(id);

        if (!usuario) {
            return res.status(404).json({
                message: 'Usuario no encontrado'
            });
        }

        res.json(usuario);
    } catch (error) {
        console.error('Error al obtener el usuario:', error);
        res.status(500).json({
            message: 'Error al obtener el usuario',
            error
        });
    }
};

// Controlador para manejar solicitudes POST
exports.createUsuario = async (req, res) => {
    const { usua_matricula, cvePresupuestal, nombres, apeido_pat, apeido_mat, telefono,
        email, password, rol
     } = req.body;

    // Verifica que se hayan proporcionado todos los campos necesarios
    if (!usua_matricula || !cvePresupuestal || !nombres || !apeido_pat || !apeido_mat
        || !email || !password
     ) {
        return res.status(400).json({
            message: 'Faltan campos requeridos'
        });
    }

    try {
        // Crea un nuevo ítem en la base de datos
        const newUsuario = await Usuario.create({
            usua_matricula,
            cvePresupuestal,
            nombres,
            apeido_pat,
            apeido_mat,
            telefono,
            email,
            password,
            rol
        });
        res.status(201).json(newUsuario);
    } catch (error) {
        console.error('Error al crear el ítem:', error);
        res.status(500).json({
            message: 'Error al crear el ítem',
            error
        });
    }
};


exports.deleteUsuario = async (req, res) => {
    console.log('deleteUsuario llamado'); // Log para depuración
    const { id } = req.params; // Obtén el parámetro id de los parámetros de la URL

    if (!id) {
        return res.status(400).json({
            message: 'El identificador del usuario es requerido'
        });
    }

    try {
        // Buscar el usuario por id
        const usuario = await Usuario.findOne({ where: { usua_matricula : id } });

        if (!usuario) {
            return res.status(404).json({
                message: 'Usuario no encontrado'
            });
        }

        // Eliminar el usuario
        await Usuario.destroy({ where: { usua_matricula : id } });

        res.status(200).json({
            message: 'Usuario eliminado correctamente'
        });
    } catch (error) {
        console.error('Error al eliminar el usuario:', error);
        res.status(500).json({
            message: 'Error al eliminar el usuario',
            error
        });
    }
};
