const express = require('express');
const router = express.Router();

const { getExperiencia, addExperiencia, updateExperiencia, deleteExperiencia } = require('../controllers/experiencia.controller.js');

router.get('/', getExperiencia);
router.post('/', addExperiencia);
router.put('/:id', updateExperiencia);
router.delete('/:id', deleteExperiencia);

module.exports = router;