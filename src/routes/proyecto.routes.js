const express = require('express');
const router = express.Router();

const { getProyectos, addProyecto, updateProyecto, deleteProyecto } = require('../controllers/proyecto.controller');

router.get('/', getProyectos);
router.post('/', addProyecto);
router.put('/:id', updateProyecto);
router.delete('/:id', deleteProyecto);

module.exports = router;