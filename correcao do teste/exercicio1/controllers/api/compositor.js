var Compositor = require('../../models/compositor')

// Lista de compositores
module.exports.listar = () => {
    return Compositor
        .find({},{compID:1, nome:1, dataNasc:1})
        .exec()
}

// retorna informação de 1 compositor
module.exports.consultar = cid => {
    return Compositor
        .findOne({compID: cid})
        .exec()
}

//compositores de um certo periodo
module.exports.listarPeriodo = cp => {
    return Compositor
        .find({periodo: cp})
        .exec()
}

//compositores de um periodo com data de nascimento superior á pedida
module.exports.listarPeriodoSup = (cp,dn) => {
    return Compositor
        .find({dataNasc: {$gt: dn }, periodo: cp})
        .exec()
}