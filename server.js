const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./configs/database');
const UsuarioRoutes = require('./routes/UsuarioRoutes');
const baseCusn11Routes = require('./routes/baseCusn11Routes');
const censoDmehRoutes = require('./routes/censoDmehRoutes');
const unidadesRoutes = require('./routes/unidadesRoutes');
const baseefeRoutes = require('./routes/baseefeRoutes')

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Rutas de la api
app.use('/api/usuario', UsuarioRoutes);
app.use('/api/base-cusn11', baseCusn11Routes); 
app.use('/api/censo-dmeh', censoDmehRoutes);
app.use('/api/unidades', unidadesRoutes)
app.use('/api/base-efe', baseefeRoutes)

app.get('/', (req, res) => {
    res.send('Hello World!');
});

sequelize.sync()
    .then(() => {
        app.listen(port, () => {
            console.log(`Servidor escuchando en http://localhost:${port}`);
        });
    })
    .catch((error) => {
        console.error('No se pudo conectar a la base de datos:', error);
    });