const Contacto = require("../models/contacto.model.js");

const getContacto = async (req, res) => {
    try {
        const contacto = await Contacto.find();
        res.status(200).json(contacto);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const addContacto = async (req, res) => {
    try {
        const nuevoContacto = new Contacto(req.body);
        await nuevoContacto.save();
        res.status(201).json(nuevoContacto);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateContacto = async (req, res) => {
    try {
        const contactoActualizado = await Contacto.findByIdAndUpdate(
            req.params.id,
            req.body,
            {},
        );
        if (!contactoActualizado) {
            return res.status(404).json({ message: "Contacto no encontrado" });
        }
        res.status(200).json(contactoActualizado);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getContacto,
    addContacto,
    updateContacto,
};
