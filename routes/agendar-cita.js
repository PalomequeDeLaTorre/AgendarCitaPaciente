const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const { medico } = req.query;
    res.render('agendar-cita', { medico });
});

router.post('/', (req, res) => {
    
    const { nombre, apellidoPaterno, apellidoMaterno, fechaNacimiento, horaCita, sexo, genero, celular, correo } = req.body;
    

    res.send('Cita agendada exitosamente. ¡Gracias por agendar con nosotros!');
});

module.exports = router;

