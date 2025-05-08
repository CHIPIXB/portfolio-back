const Experiencia = require('../models/experiencia.model.js');

const getExperiencia = async (req, res) => {
    try {
        const datos = await Experiencia.find();
        res.status(200).json(datos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const addExperiencia = async (req, res) => {
    try {
        const nueva = new Experiencia(req.body);
        const guardada = await nueva.save();
        res.status(201).json(guardada);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const updateExperiencia = async (req, res) => {
    try {
        const actualizada = await Experiencia.findByIdAndUpdate(req.params.id, req.body, {
        });
        if (!actualizada)
        return res.status(404).json({ message: 'No encontrada' });
        res.json(actualizada);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteExperiencia = async (req, res) => {
    try {
        const eliminada = await Experiencia.findByIdAndDelete(req.params.id);
        if (!eliminada) 
        return res.status(404).json({ message: 'No encontrada' });
        res.json({ message: 'Eliminada correctamente' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getExperiencia,
    addExperiencia,
    updateExperiencia,
    deleteExperiencia
};