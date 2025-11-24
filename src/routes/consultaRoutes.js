const express = require ('express')
const router = express.Router()
const consultaController = require ("../controllers/consultaControllers")

router.post("/solicitar", consultaController.solicitar)
router.get("/minhas/:userId", consultaController.minhasConsultas)


module.exports = router