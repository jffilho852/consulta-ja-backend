const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database("./banco.db", (err) => {
    if (err) {
        console.error("Erro ao conectar ao banco:", err);
    } else {
        console.log("Banco conectado com sucesso!");
    }
});

// Cria e executa o banco de dados (database.db)

db.serialize(()=>{
    db.run (`
        CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT NOT NULL,
        email TEXT UNIQUE NOT NULL,
        senha TEXT NOT NULL
        )
    `)

    db.run(`
        CREATE TABLE IF NOT EXISTS consultas (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        userId INTEGER NOT NULL,
        especialidade TEXT NOT NULL,
        data TEXT NOT NULL,
        FOREIGN KEY (userId) REFERENCES users(id)
        )
    `)
})


module.exports = db