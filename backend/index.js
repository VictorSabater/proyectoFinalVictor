const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const {mongoose} = require('./database');
const {json} = require('express');


const app = express();

app.set('port', process.env.PORT || 3000);

app.use(morgan('dev'))

app.use(cors());
app.use(express.json());


app.use('/api/noticias',require('./routes/noticia.route'));
app.use('/',(req, res) => res.send('La API esta en /api/noticias'));

app.listen(app.get('port'),() =>{
    console.log('Server on port: ',app.get('port'));
});