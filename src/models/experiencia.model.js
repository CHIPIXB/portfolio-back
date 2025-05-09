const mongoose = require("mongoose");

const ExperienciaSchema = new mongoose.Schema({
    puesto: {
        type: String,
        required: true,
        trim: true,
    },
    empresa: {
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
});

const Experiencia = mongoose.model("Experiencia", ExperienciaSchema);

module.exports = Experiencia;
