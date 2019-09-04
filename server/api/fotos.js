var fotos = [
    {
        "urlPerfil": "https://s3.amazonaws.com/caelum-online-public/react-native-parte-2/images/adittional-resources/profile-photo-alberto.jpg", "loginUsuario": "alots", "horario": "02/09/2019 11:37", "urlFoto": "https://s3.amazonaws.com/caelum-online-public/react-native-parte-2/images/adittional-resources/photo-1.jpg", "id": 1, "likers": [{"login":"vitor"},{"login":"rafael"}], "comentarios": [{"id":1,login:"rafael",texto:"caramba!"}], "comentario": "Muito Legal"
    }, {
        "urlPerfil": "https://s3.amazonaws.com/caelum-online-public/react-native-parte-2/images/adittional-resources/profile-photo-alberto.jpg", "loginUsuario": "alots", "horario": "02/09/2019 11:37", "urlFoto": "https://s3.amazonaws.com/caelum-online-public/react-native-parte-2/images/adittional-resources/photo-2.jpg", "id": 2, "likers": [], "comentarios": [], "comentario": "Cool!"
    }, {
        "urlPerfil": "https://s3.amazonaws.com/caelum-online-public/react-native-parte-2/images/adittional-resources/profile-photo-rafael.jpg", "loginUsuario": "rafael", "horario": "02/09/2019 11:37", "urlFoto": "https://s3.amazonaws.com/caelum-online-public/react-native-parte-2/images/adittional-resources/photo-1.jpg", "id": 3, "likers": [], "comentarios": [], "comentario": "Gostei muito!"
    }, {
        "urlPerfil": "https://s3.amazonaws.com/caelum-online-public/react-native-parte-2/images/adittional-resources/profile-photo-rafael.jpg", "loginUsuario": "rafael", "horario": "02/09/2019 11:37", "urlFoto": "https://s3.amazonaws.com/caelum-online-public/react-native-parte-2/images/adittional-resources/photo-2.jpg", "id": 4, "likers": [], "comentarios": [], "comentario": "Incrível"
    }, {
        "urlPerfil": "https://s3.amazonaws.com/caelum-online-public/react-native-parte-2/images/adittional-resources/profile-photo-vitor.jpg", "loginUsuario": "vitor", "horario": "02/09/2019 11:37", "urlFoto": "https://s3.amazonaws.com/caelum-online-public/react-native-parte-2/images/adittional-resources/photo-1.jpg", "id": 5, "likers": [{"login":"alots"},{"login":"rafael"}], "comentarios": [], "comentario": "Imperdível"
    }, {
        "urlPerfil": "https://s3.amazonaws.com/caelum-online-public/react-native-parte-2/images/adittional-resources/profile-photo-vitor.jpg", "loginUsuario": "vitor", "horario": "02/09/2019 11:37", "urlFoto": "https://s3.amazonaws.com/caelum-online-public/react-native-parte-2/images/adittional-resources/photo-2.jpg", "id": 6, "likers": [], "comentarios": [], "comentario": "Sem comentários!"
    }
]

exports.fotos = fotos;

exports.findByLoginUsuario = function (req, res) {

    let login = req.params.login;
    console.log(login);
    let fotosLoginUsuario = fotos.filter(foto => foto.loginUsuario == login);
    if (fotosLoginUsuario) {
        res.json(fotosLoginUsuario);
    } else {
        res.status(404).send({
            message: "Not found with id " + req.params.login
        });
    }

};

exports.findUserFriends = function (req, res) {
    
    let login = req.login; // Capture from token
    console.log(login);
    let fotosUserFriends = fotos.filter(foto => foto.loginUsuario != login);
    if (fotosUserFriends) {
        fotosUserFriends.map(foto => foto.likeada = foto.likers.some(liker => liker.login == login));
        res.json(fotosUserFriends);
    } else {
        res.status(404).send({
            message: "Not found with id " + req.params.login
        });
    }

};

exports.likeFoto = function (req, res) {
    let login = req.login; // Capture from token
    let id = req.params.id;
    let foto = fotos.find(foto => foto.id == id);
    if (foto) {
        var liked = foto.likers.some(liker => liker.login == login);
        if(liked){
            foto.likers = foto.likers.filter(liker => liker.login != login);
        } else {
            foto.likers.push({login})
        }
        res.json({login});
    } else {
        res.status(404).send({
            message: "Not found with id " + id
        });
    }

};

