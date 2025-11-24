const consulta = require ("../models/modelConsulta")

module.exports = {
    solicitar: (req, res) =>{
        const { userId, especialidade, data } = req.body

        if (!userId || !especialidade || !data){
            return res.status(400).json({ erro: "Por favor preencher os campos!"})
        }

        consulta.create (userId, especialidade, data, (err, consultaId) =>{
            if(err) {
                return res.status(500).json({ erro: "Erro na consulta"})
            }
            res.json({
                mensagem: "Consulta solicitada com sucesso",
                consultaId
            })
        })
    },

    minhasConsultas: (req, res) =>{
        const { userId } = req.params

        consulta.findByUser(userId, (err, consultas) =>{
            if(err){
                return res.status(500).json({ erro: "Erro ao buscar consultas"})
            }

            res.json(consultas)
        })
    }
}