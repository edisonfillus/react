var autores = require('./autores')

var livros = [{
    id: 1,
    autor: {id:1},
    titulo: "React Easy",
    preco: "35.00"
}]
var sequence = 1;

exports.list = function (req, res) {
    let list = livros.map(livro => {
        let autor = autores.autores.find(autor => autor.id == livro.autor.id);
        livro.autor.nome = autor.nome;
        return livro;
    })
    res.json(list);
};

exports.create = function (req, res) {
    // Validate request
    if (!req.body) {
        return res.status(400).send({
            message: "No content"
        });
    }

    let livro = req.body;
    livro.id = ++sequence;
    livros.push(livro);
    res.json(livro);
};

exports.find = function (req, res) {
    let id = req.params.id;
    let livro = livros.find(livro => livro.id == id);
    console.log(livro);
    if (livro) {
        res.json(livro);
    } else {
        res.status(404).send({
            message: "Not found with id " + req.params.id
        });
    }

};

exports.update = function (req, res) {
    // Validate request
    if (!req.body) {
        return res.status(400).send({
            message: "No content"
        });
    }
    let id = req.params.id;
    let livro = livros.find(livro => livro.id == id);
    if (livro) {
        Object.assign(livro, req.body);
        res.json(livro);
    } else {
        res.status(404).send({
            message: "Not found with id " + req.params.id
        });
    }
};

exports.delete = function (req, res) {
    let id = req.params.id;
    let livro = livros.find(livro => livro.id == id);
    if (livro) {
        livros = livros.filter(livro => livro.id != id);
        res.status(204).send();
    } else {
        res.status(404).send({
            message: "Not found with id " + req.params.id
        });
    }
};





