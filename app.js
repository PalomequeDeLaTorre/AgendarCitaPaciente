const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use('/', require('./routes/index'));
app.use('/agenda', require('./routes/agenda'));
app.use('/buscar-especialista', require('./routes/especialistas'));
app.use('/agendar-cita', require('./routes/agendar-cita'));
app.use('/confirmar-cita', require('./routes/confirmar-cita'));


app.listen(port, () => {
    console.log(`Servidor en http://localhost:${port}`);
});

