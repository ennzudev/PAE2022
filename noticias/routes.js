//GET /noticias
const express = require('express');
const router = express.Router();

//
router.get('/', (req,res)=>{
    res.send('Endpoint noticias!')
});

router.post('/', (req,res)=>{
    res.send('Crear Noticia!!')
});
//

module.exports = router