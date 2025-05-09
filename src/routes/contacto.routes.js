const express = require("express");
const router = express.Router();

const {
    getContacto,
    addContacto,
    updateContacto,
} = require("../controllers/contacto.controller.js");

router.get("/", getContacto);
router.post("/", addContacto);
router.put("/:id", updateContacto);

module.exports = router;
