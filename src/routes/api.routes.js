const express = require("express");
const router = express.Router();

const experienciaRoutes = require("./experiencia.routes");
const proyectoRoutes = require("./proyecto.routes");

router.use("/experiencia", experienciaRoutes);
router.use("/proyectos", proyectoRoutes);


module.exports = router;