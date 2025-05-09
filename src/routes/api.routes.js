const express = require("express");
const router = express.Router();

const experienciaRoutes = require("./experiencia.routes");
const proyectoRoutes = require("./proyecto.routes");
const formacionRoutes = require("./formacion.routes");
const contactoRoutes = require("./contacto.routes");

router.use("/experiencia", experienciaRoutes);
router.use("/proyectos", proyectoRoutes);
router.use("/formacion", formacionRoutes);
router.use("/contacto", contactoRoutes);

module.exports = router;
