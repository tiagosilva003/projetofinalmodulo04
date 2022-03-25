const express = require("express");
const pedidosController = require("../controllers/pedidosController");

const router = express.Router();

router.get("/pedidos", pedidosController.all);
router.post("/pedidos", pedidosController.create);
router.put("/pedidos/:id", pedidosController.update);
router.get("/pedidos/:id", pedidosController.one);
router.delete("/pedidos/:id", pedidosController.delete);

module.exports = router;