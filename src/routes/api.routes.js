const express = require("express");
const router = express.Router();

const proyectoRoutes = require("./proyecto.routes");

router.use("/proyectos", proyectoRoutes);

module.exports = router;