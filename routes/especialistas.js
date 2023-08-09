const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const { tipoConsulta, especialidad, ciudad } = req.query;
    res.render('especialistas', { especialidad, ciudad });
});

module.exports = router;
