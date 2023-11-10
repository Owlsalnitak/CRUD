const express = require('express');
const repository = require('./repository');
const bodyParse = require('body-parser');
const app = express();
const port = 3001;

app.use(bodyParse.json());

app.get('/jogos',(req, res)=>{
    res.send(repository.getJogos())
})
app.post('/criarJogo', (req,res)=>{
    res.send(repository.createJogo(req.body));
})
app.put('/alterarJogo', (req,res) =>{
    const id = req.query.id;
    const jogo = req.body;
    res.send(repository.updateJogo(id,jogo));
})
app.delete('/deletarJogo', (req,res)=>{
    const id = req.query.id;
    res.send(repository.deleteJogo(id));
})
app.get('/', (req,res)=>{
    res.send('Olá Mundo')
})

app.listen(port, ()=>{
    console.log(`Servidor rodando na porta ${port}`);
})