const Proyecto = require('../models/proyecto.model')

const getProyectos = async (req, res) => {
    try {
        const proyectos = await Proyecto.find()
        res.status(200).json(proyectos)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

module.exports = {
    getProyectos,
    // addProyecto,
    // getProyectoById,
    // updateProyecto,
    // deleteProyecto
}