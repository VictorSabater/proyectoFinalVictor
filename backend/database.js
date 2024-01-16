const mongoose = require("mongoose");

const URI = 'mongodb+srv://root:root@victorbd.fjfwgiv.mongodb.net/NoticiasVICTOR?retryWrites=true&w=majority'

mongoose.connect(URI)
    .then(db => console.log('DB Connected'))
    .catch(err => console.error(err));
module.exports = mongoose;