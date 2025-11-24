const express = require('express')
    // FRamework do Servidor

const cors = require("cors")
    //Comunicação entre o Front e o Back

const app = express()
    // Inicia o servidor

app.use(cors())
app.use(express.json())

app.use("/auth", require("./routes/userRoutes"))
app.use("/consulta", require("./routes/consultaRoutes"))
app.use("/users", require("./routes/listUser"));



app.listen(3000, ()=>{
    console.log("Servidor rodando, TMJ")
})

