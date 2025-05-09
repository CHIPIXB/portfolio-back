const express = require("express");
const router = express.Router();

const {
    getContacto,
    addContacto,
    updateContacto,
    deleteContacto,
} = require("../controllers/contacto.controller.js");

router.get("/", getContacto);
router.post("/", addContacto);
router.put("/:id", updateContacto);
router.delete("/:id", deleteContacto);

module.exports = router;
