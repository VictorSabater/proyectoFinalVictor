const NoticiaModel = require('../models/noticia.model');

const noticiaCtrl = {};

noticiaCtrl.addNoticia = async (req, res) => {

    const myNoticia = new NoticiaModel(req.body);

    await myNoticia.save()
        .then(() => {
            res.json({status: 'Noticia successfully Inserted'})
        })
        .catch(err => res.send(err.message));
};

noticiaCtrl.getNoticias = async (req, res) => {
    const noticia = await NoticiaModel.find()//.limit(15).skip(0)
        .then(
            (data) => {
                res.json(data)
            }
        ).catch(err => res.send(err.message))
};

noticiaCtrl.getNoticia = async (req,res) =>{ //Coger una sola pelicula por id
    const noticia = await NoticiaModel.findById(req.params.id).then(
        (data) => {
            if (data!=null){
                res.json(data);
            }else{
                res.json({status: 'Noticia does not exist'});
            }

        }
    ).catch(err => res.send(err.message))
}


noticiaCtrl.getTitleAuthor = async (req,res) =>{
    const movies = await NoticiaModel.find({$or: [{title: {$regex: req.params.title}}, {author: {$regex: req.params.title}}]})
        .then(
            (data) => {
                res.json(data)
            }
        ).catch(err => res.send(err.message))
}


noticiaCtrl.deleteNoticia = async (req,res) =>{
    await NoticiaModel.findByIdAndDelete(req.params.id)
        .then(
            (data) => {
                if (data!=null){
                    res.json({status: 'Noticia Delete succesfully',data});
                }else{
                    res.json({status: 'Noticia does not exist'});
                }

            }
        ).catch(err => res.send(err.message))
}

noticiaCtrl.updateNoticia = async (req,res) =>{
    const noticiaData = req.body;
    const noticia = await NoticiaModel
        .findByIdAndUpdate(
            req.params.id,
            {$set: noticiaData},
            {new: true}
        )
        .then( //Si to-do va bien
            (data) => {
                if (data!=null){
                    res.json({status: 'Noticia updated succesfully',data});
                }else{
                    res.json({status: 'Noticia does not exist'});
                }

            }
        ).catch(err => res.send(err.message))
}


noticiaCtrl.getSections = async (req,res) =>{
    const noticias = await NoticiaModel.find().distinct('section.name')
        .then(
            (data) => {
                res.json(data)
            }
        ).catch(err => res.send(err.message))
}

noticiaCtrl.getBySection = async (req,res) =>{
    const noticia = await NoticiaModel.find({"section.name": req.params.section})
        .then(
            (data) => {
                res.json(data)
            }
        ).catch(err => res.send(err.message))
}


module.exports = noticiaCtrl;