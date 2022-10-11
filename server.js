const express = require('express');
const app = express();


app.get("/", async (req,res) => {
    res.send("pagina inicial Anne carine");
});


app.post("/usuarios", async (req,res) => {
    res.send("Cadastrar um novo usuário.");
});

app.listen(7777, () => {
    console.log("Servidor iniciado na porta 7777: http://localhost:7777");
});