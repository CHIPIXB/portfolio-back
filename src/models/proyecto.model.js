const mongoose = require("mongoose");

const ProyectoSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true,
    },
    descripcion: {
        type: String,
        required: true,
        trim: true,
    },
    fechaInicio: {
        type: Date,
    },
    fechaFin: {
        type: Date,
    },
    tecnologias: {
        type: [String],
        required: true,
        trim: true,
    },
    imagenDesktop: {
        type: String,
        required: true,
        trim: true,
    },
    url: {
        type: String,
        required: true,
        trim: true,
    },
});

const Proyecto = mongoose.model("Proyecto", ProyectoSchema);

module.exports = Proyecto;
