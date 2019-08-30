var autores = [{
    id: 1,
    nome: "fulano",
    email: "fulano@teste.com.br",
    senha: "1234"
}]
var sequence = 1;

exports.list = function (req, res) {
    res.json(autores);
};

exports.create = function (req, res) {
    // Validate request
    if (!req.body) {
        return res.status(400).send({
            message: "No content"
        });
    }

    let autor = req.body;
    autor.id = ++sequence;
    autores.push(autor);
    res.json(autor);
};

exports.find = function (req, res) {
    let id = req.params.id;
    let autor = autores.find(autor => autor.id == id);
    console.log(autor);
    if (autor) {
        res.json(autor);
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
    let autor = autores.find(autor => autor.id == id);
    if (autor) {
        Object.assign(autor, req.body);
        res.json(autor);
    } else {
        res.status(404).send({
            message: "Not found with id " + req.params.id
        });
    }
};

exports.delete = function (req, res) {
    let id = req.params.id;
    let autor = autores.find(autor => autor.id == id);
    if (autor) {
        autores = autores.filter(autor => autor.id != id);
        res.status(204).send();
    } else {
        res.status(404).send({
            message: "Not found with id " + req.params.id
        });
    }
};





