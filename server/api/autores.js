var autores = [{
    nome: 'fulano ',
    email: 'fulano@teste.com.br',
    senha: '1234'
}]
  
exports.list = function(req, res){
    res.json(autores);
};





