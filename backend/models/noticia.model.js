const mongoose = require('mongoose');
const {Schema} = mongoose;

const noticiaSchema
    = new Schema(
    {
        title: {type: String, required: true},
        subtitle: {type: String, required: true},
        section: {
            name: {type: String, required: true},
            icon: {type: String, required: true}
        },
        author: {type: String, required: true},
        date: {type: String, required: true},
        content: {type: String, required: true},
        images: [{type: String, required: true}],

    }
);

module.exports = mongoose.model('Noticia', noticiaSchema, 'noticias2024');
