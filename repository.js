const jogos = [
    {nome: 'Mario World', lancamento: '21 de novembro de 1990'},
    {nome: 'Sonic', lancamento: '23 de junho de 1991'},
    {nome: 'Horizon Zero Dawn', lancamento: '28 de fevereiro de 2017'},
]

const getJogos = () =>{
    return jogos;
}
const getJogosID = (id) =>{
    return jogos[id];
}
const createJogo = (novoJogo) =>{
    jogos.push(novoJogo);
    return jogos;
}
const updateJogo = (id, jogo) =>{
    jogos[id] = jogo;
    return jogos[id];
}
const deleteJogo = (id) =>{
    remove = jogos[id];
    jogos = jogos.filter(function (elemento){
        return elemento.none != remove.none && elemento.lancamento != remove.lancamento;
    })
    return jogos;
}

module.exports = {
    getJogos,
    getJogosID,
    createJogo,
    updateJogo,
    deleteJogo,

}