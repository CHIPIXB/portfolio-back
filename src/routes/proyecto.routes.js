const express = require('express');
const router = express.Router();

const { getProyectos, addProyecto } = require('../controllers/proyecto.controller');

router.get('/', getProyectos);
router.post('/', addProyecto);

module.exports = router;