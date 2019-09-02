var fotos = [
    {
        "urlPerfil": "https://s3.amazonaws.com/caelum-online-public/react-native-parte-2/images/adittional-resources/profile-photo-alberto.jpg", "loginUsuario": "alots", "horario": "02/09/2019 11:37", "urlFoto": "https://s3.amazonaws.com/caelum-online-public/react-native-parte-2/images/adittional-resources/photo-1.jpg", "id": 1, "likeada": false, "likers": [], "comentarios": [], "comentario": "Legenda da foto"
    }, {
        "urlPerfil": "https://s3.amazonaws.com/caelum-online-public/react-native-parte-2/images/adittional-resources/profile-photo-alberto.jpg", "loginUsuario": "alots", "horario": "02/09/2019 11:37", "urlFoto": "https://s3.amazonaws.com/caelum-online-public/react-native-parte-2/images/adittional-resources/photo-2.jpg", "id": 2, "likeada": false, "likers": [], "comentarios": [], "comentario": "Legenda da foto"
    }, {
        "urlPerfil": "https://s3.amazonaws.com/caelum-online-public/react-native-parte-2/images/adittional-resources/profile-photo-rafael.jpg", "loginUsuario": "rafael", "horario": "02/09/2019 11:37", "urlFoto": "https://s3.amazonaws.com/caelum-online-public/react-native-parte-2/images/adittional-resources/photo-1.jpg", "id": 3, "likeada": false, "likers": [], "comentarios": [], "comentario": "Legenda da foto"
    }, {
        "urlPerfil": "https://s3.amazonaws.com/caelum-online-public/react-native-parte-2/images/adittional-resources/profile-photo-rafael.jpg", "loginUsuario": "rafael", "horario": "02/09/2019 11:37", "urlFoto": "https://s3.amazonaws.com/caelum-online-public/react-native-parte-2/images/adittional-resources/photo-2.jpg", "id": 4, "likeada": false, "likers": [], "comentarios": [], "comentario": "Legenda da foto"
    }, {
        "urlPerfil": "https://s3.amazonaws.com/caelum-online-public/react-native-parte-2/images/adittional-resources/profile-photo-vitor.jpg", "loginUsuario": "vitor", "horario": "02/09/2019 11:37", "urlFoto": "https://s3.amazonaws.com/caelum-online-public/react-native-parte-2/images/adittional-resources/photo-1.jpg", "id": 5, "likeada": false, "likers": [], "comentarios": [], "comentario": "Legenda da foto"
    }, {
        "urlPerfil": "https://s3.amazonaws.com/caelum-online-public/react-native-parte-2/images/adittional-resources/profile-photo-vitor.jpg", "loginUsuario": "vitor", "horario": "02/09/2019 11:37", "urlFoto": "https://s3.amazonaws.com/caelum-online-public/react-native-parte-2/images/adittional-resources/photo-2.jpg", "id": 6, "likeada": false, "likers": [], "comentarios": [], "comentario": "Legenda da foto"
    }
]

exports.fotos = fotos;

exports.findByLoginUsuario = function (req, res) {
    let loginUsuario = req.params.loginUsuario;
    let fotosLoginUsuario = fotos.filter(foto => foto.loginUsuario == loginUsuario);
    if (fotosLoginUsuario) {
        res.json(fotosLoginUsuario);
    } else {
        res.status(404).send({
            message: "Not found with id " + req.params.loginUsuario
        });
    }

};






