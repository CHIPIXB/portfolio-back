const Proyecto = require('../models/proyecto.model')

const getProyectos = async (req, res) => {
    try {
        const proyectos = await Proyecto.find()
        res.status(200).json(proyectos)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const addProyecto = async (req, res) => {
    const { nombre, descripcion, fechaInicio, fechaFin, tecnologias, imagen, url } = req.body

    const nuevoProyecto = new Proyecto({
        nombre,
        descripcion,
        fechaInicio,
        fechaFin,
        tecnologias,
        imagen,
        url
    })

    try {
        const proyectoGuardado = await nuevoProyecto.save()
        res.status(201).json(proyectoGuardado)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

module.exports = {
    getProyectos,
    addProyecto,
    // getProyectoById,
    // updateProyecto,
    // deleteProyecto
}