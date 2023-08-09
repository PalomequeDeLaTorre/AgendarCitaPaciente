const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('confirmar-cita');
});

router.post('/', (req, res) => {
    
    res.send('Cita agendada exitosamente. ¡Gracias por agendar con nosotros!');
});

module.exports = router;

