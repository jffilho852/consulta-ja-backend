const db = require("../DB/db")

    const User = {
        create: (nome, email, senha, callback)=>{
            db.run(
                `INSERT INTO users (nome, email, senha) VALUES (?, ?, ?)`,
                [nome, email, senha],
                function (err) {
                    callback(err, this ? this.lastID : null)
                }
            )
        },

        findByEmail: (email, callback) => {
    db.get(`SELECT * FROM users WHERE email = ?`, [email], (err, row) => {
        callback(err, row)
    })
}
    }

    module.exports = User