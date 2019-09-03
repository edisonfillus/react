var jwt = require('jsonwebtoken');

var users = [{
    login: "alots",
    senha: "1234"
},
{
    login: "rafael",
    senha: "1234"
},
{
    login: "vitor",
    senha: "1234"
}]

exports.login = function (req, res) {
    console.log(req.body);
    let login = req.body.login;
    let senha = req.body.senha;
    let user = users.find(user => ((user.login === login) && (user.senha === senha)));
    if (user) {
        const token = jwt.sign({
            login: login
        }, 'secret', { expiresIn: '1h' });
        res.json(token);
    } else {
        res.status(403).send({
            message: "Login Failed"
        });
    }

};


