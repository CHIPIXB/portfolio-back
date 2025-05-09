const express = require("express");
const router = express.Router();
const {
    getFormacion,
    addFormacion,
    updateFormacion,
    deleteFormacion,
} = require("../controllers/formacion.controller.js");

router.get("/", getFormacion);
router.post("/", addFormacion);
router.put("/:id", updateFormacion);
router.delete("/:id", deleteFormacion);

module.exports = router;
