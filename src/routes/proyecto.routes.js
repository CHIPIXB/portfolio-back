const express = require('express');
const router = express.Router();

const { getProyectos } = require('../controllers/proyecto.controller');

router.get('/', getProyectos);

module.exports = router;