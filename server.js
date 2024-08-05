const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./configs/database');
const UsuarioRoutes = require('./routes/UsuarioRoutes');
const baseCusn11Routes = require('./routes/baseCusn11Routes');
const censoDmehRoutes = require('./routes/censoDmehRoutes');
const unidadesRoutes = require('./routes/unidadesRoutes');
const baseefeRoutes = require('./routes/baseefeRoutes')
const CensoDmehUnidadesRoutes = require('./routes/censoDemhUnidadesRoutes');
const cip01Routes = require('./routes/cip01Routes');
const consMfRoutes = require('./routes/consMfRoutes');
const consultExtRoutes = require('./routes/consultExtRoutes');
const cp03Routes = require('./routes/cp03Routes');
const cp04Routes = require('./routes/cp04Routes');
const defuncionesRoutes = require('./routes/defuncionesRoutes');
const defuncionesAuxRoutes = require('./routes/defunicionesAuxRoutes');
const diagTratRoutes = require('./routes/diagTratRoutes');
const diasHabRoutes = require('./routes/diasHabRoutes');
const diasPacienteRoutes = require('./routes/diasPacienteRoutes');
const diasTipicosRoutes = require('./routes/diasTipicosRoutes');
const egresosRoutes = require('./routes/egresosRoutes');
const emcRoutes = require('./routes/emcRoutes');
const emcCobRoutes = require('./routes/emcCobRoutes')
const extractorCegrnacRoutes = require('./routes/extractorCegrnacRoutes');
const extractorCegrpacRoutes = require('./routes/extractorCegrpacRoutes');
const ExtractorCsui13Routes = require('./routes/extractorCsui13Routes');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Rutas de la api
app.use('/api/usuario', UsuarioRoutes);
app.use('/api/base-cusn11', baseCusn11Routes);
app.use('/api/censo-dmeh', censoDmehRoutes);
app.use('/api/unidades', unidadesRoutes);
app.use('/api/base-efe', baseefeRoutes);
app.use('/api/censo-dmeh-unidades', CensoDmehUnidadesRoutes);
app.use('/api/cip01', cip01Routes);
app.use('/api/cons-mf', consMfRoutes);
app.use('/api/consult-ext', consultExtRoutes);
app.use('/api/cp03', cp03Routes);
app.use('/api/cp04', cp04Routes);
app.use('/api/defunciones', defuncionesRoutes);
app.use('/api/defunciones-aux', defuncionesAuxRoutes);
app.use('/api/diag-trat', diagTratRoutes);
app.use('/api/dias-hab', diasHabRoutes);
app.use('/api/dias-paciente', diasPacienteRoutes);
app.use('/api/dias-tipicos', diasTipicosRoutes);
app.use('/api/egresos', egresosRoutes);
app.use('/api/emc', emcRoutes);
app.use('/api/emc-cob', emcCobRoutes);
app.use('/api/extractor-cegrnac', extractorCegrnacRoutes);
app.use('/api/extractor-cegrpac', extractorCegrpacRoutes);
app.use('/api/extractor-csui13', ExtractorCsui13Routes);

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