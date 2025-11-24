const User = require("../models/modelUser")

module.exports = {
    registrar: (req, res) =>{
        const {nome, email, senha} = req.body

        if (!nome || !email || !senha) {
            return res.status(400).json({ erro: "Preencha todos os campos!" })
        }
        
        User.findByEmail (email, (err, usuarioExistente) =>{
            if(usuarioExistente){
                return res.status(400).json({ erro: "Email já Existente"})
            }
        User.create(nome , email, senha, (err, id) => {
            if (err) return res.status(500).json({ erro: "Erro ao registrar"})
              res.json({
                mensagm: "Registro Efetuado com Sucesso.",
                userID: id
            })  
        })
    })
  },

    login: (req, res) =>{
        const {email, senha} = req.body

        User.findByEmail (email, (err,user) =>{
            if (!user || user.senha !== senha){
                return res.status(400).json({erro: "Email ou senha incorretos"})
            }

            res.json ({
                mensagem: "Login Efetuado",
                userId: user.id,
                nome: user.nome
            })
        })
    }
}