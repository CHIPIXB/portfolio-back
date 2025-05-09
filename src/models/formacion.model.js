const mongoose = require("mongoose");

const FormacionSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true,
    },
    escuela: {
        type: String,
        required: true,
    },
    fechaInicio: {
        type: Date,
        required: true,
    },
    fechaFin: {
        type: Date,
        required: true,
    },
    descripcion: {
        type: String,
        required: true,
    },
});

const Formacion = mongoose.model("Formacion", FormacionSchema);

module.exports = Formacion;
