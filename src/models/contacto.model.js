const mongoose = require("mongoose");

const ContactoSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
    },
    telefono: {
        type: String,
        required: true,
        trim: true,
    },
    linkedin: {
        type: String,
        required: true,
        trim: true,
    },
    github: {
        type: String,
        required: true,
        trim: true,
    },
    ubicacion: {
        type: String,
        required: true,
        trim: true,
    },
});

const Contacto = mongoose.model("Contacto", ContactoSchema);

module.exports = Contacto;
