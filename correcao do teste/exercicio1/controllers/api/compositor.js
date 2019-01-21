var Compositor = require('../../models/compositor')

// Lista de compositores
module.exports.listar = () => {
    return Compositor
        .find()
        .sort({datanasc: -1})
        .exec()
}

// retorna informação de 1 compositor
module.exports.consultar = cid => {
    return Compositor
        .findOne({id: cid})
        .exec()
}

//compositores de um certo periodo
module.exports.listarPeriodo = cp => {
    return Compositor
        .find({periodo: cp})
        .sort({datanasc: -1})
        .exec()
}

//compositores de um periodo com data de nascimento superior á pedida
module.exports.listarPeriodoSup = (cp,dn) => {
    return Compositor
        .find({periodo: cp})
        .find({datanasc: {$gte: dn} })
        .sort({datanasc: -1})
        .exec()
}