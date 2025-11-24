const db = require ("../DB/db")

const Consulta = {
    create: (userId, especialidade, data, callback) =>{
        db.run(
            `INSERT INTO consultas (userId, especialidade, data) VALUES (?, ?, ?)`,
            [userId, especialidade, data],
            function (err) { 
                callback (err, this ? this.lastID : null)
            }
        )
    },

    findByUser: (userId, callback) =>{
        db.all(
            `SELECT * FROM consultas WHERE userId = ?`,
            [userId],
            (err, rows) => callback(err, rows)
        )
    }
}


module.exports = Consulta