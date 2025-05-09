const Proyecto = require("../models/proyecto.model");

const getProyectos = async (req, res) => {
    try {
        const proyectos = await Proyecto.find();
        res.status(200).json(proyectos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const addProyecto = async (req, res) => {
    const {
        nombre,
        descripcion,
        fechaInicio,
        fechaFin,
        tecnologias,
        imagenDesktop,
        imagenResponsive,
        url,
    } = req.body;

    const nuevoProyecto = new Proyecto({
        nombre,
        descripcion,
        fechaInicio,
        fechaFin,
        tecnologias,
        imagenDesktop,
        imagenResponsive,
        url,
    });

    try {
        const proyectoGuardado = await nuevoProyecto.save();
        res.status(201).json(proyectoGuardado);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateProyecto = async (req, res) => {
    const { id } = req.params;
    const {
        nombre,
        descripcion,
        fechaInicio,
        fechaFin,
        tecnologias,
        imagenDesktop,
        imagenResponsive,
        url,
    } = req.body;

    try {
        const proyectoActualizado = await Proyecto.findByIdAndUpdate(
            id,
            {
                nombre,
                descripcion,
                fechaInicio,
                fechaFin,
                tecnologias,
                imagenDesktop,
                imagenResponsive,
                url,
            },
            { new: true },
        );

        if (!proyectoActualizado) {
            return res.status(404).json({ message: "Proyecto no encontrado" });
        }

        res.status(200).json(proyectoActualizado);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteProyecto = async (req, res) => {
    const { id } = req.params;

    try {
        const proyectoEliminado = await Proyecto.findByIdAndDelete(id);

        if (!proyectoEliminado) {
            return res.status(404).json({ message: "Proyecto no encontrado" });
        }

        res.status(200).json({ message: "Proyecto eliminado" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getProyectos,
    addProyecto,
    updateProyecto,
    deleteProyecto,
};
