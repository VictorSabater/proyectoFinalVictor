const express = require('express')
const router = express.Router();
const noticiaCtrl = require('../controllers/noticia.controller')




router.post('/', noticiaCtrl.addNoticia);
router.get('/', noticiaCtrl.getNoticias);
router.get('/noticia/:id', noticiaCtrl.getNoticia);
router.get('/title/:title', noticiaCtrl.getTitleAuthor);
router.delete('/:id', noticiaCtrl.deleteNoticia);
router.patch('/:id', noticiaCtrl.updateNoticia);
router.get('/sections', noticiaCtrl.getSections);
router.get('/section/:section', noticiaCtrl.getBySection);


module.exports = router;