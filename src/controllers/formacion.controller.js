const Formacion = require("../models/formacion.model.js");

const getFormacion = async (req, res) => {
    try {
        const formacion = await Formacion.find();
        res.status(200).json(formacion);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const addFormacion = async (req, res) => {
    const { titulo, escuela, fechaInicio, fechaFin, descripcion } = req.body;
    const formacion = new Formacion({
        titulo,
        escuela,
        fechaInicio,
        fechaFin,
        descripcion,
    });
    try {
        const newFormacion = await formacion.save();
        res.status(201).json(newFormacion);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const updateFormacion = async (req, res) => {
    const { id } = req.params;
    const { titulo, escuela, fechaInicio, fechaFin, descripcion } = req.body;
    try {
        const updatedFormacion = await Formacion.findByIdAndUpdate(
            id,
            {
                titulo,
                escuela,
                fechaInicio,
                fechaFin,
                descripcion,
            },
            { new: true },
        );
        res.status(200).json(updatedFormacion);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const deleteFormacion = async (req, res) => {
    const { id } = req.params;
    try {
        await Formacion.findByIdAndDelete(id);
        res.status(204).send();
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = {
    getFormacion,
    addFormacion,
    updateFormacion,
    deleteFormacion,
};
