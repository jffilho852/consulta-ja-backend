const express = require("express");
const router = express.Router();
const db = require("../DB/db");

// ROTA PARA LISTAR TODOS OS USUÁRIOS
router.get("/", (req, res) => {
    db.all("SELECT * FROM users", [], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: "Erro ao buscar usuários" });
        }
        res.json(rows);
    });
});

module.exports = router;
