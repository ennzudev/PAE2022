const express = require('express')
const rutasNoticias = require ('./noticias/routes')
const path = require('path')
const {engine} = require('express-handlebars');

//PORT
var PORT = process.env.PORT || 4000;

//inicializar el app
const app = express();
app.use('/assets', express.static(path.join(__dirname,'public')))

//INSTALATION HANDLEBARS
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');  //carpeta raiz donde tenemos las vistas

//MIDDLEWARE
const middleware = function(req,res,next){
    console.log('pasa por aqui');
    next();
}
app.use('/noticias',middleware,rutasNoticias)



//RENDERS
app.get('/', (req,res)=>{
    console.log('Homepage loaded');
    res.render('index',{text:'THE NEWS'})
})
//CSS
app.get('/assets/estilos.css',)
app.get('/assets/cute-alert.js',)
app.get('/assets/style.css',)
app.get('/assets/functions.js',)

//CONSOLE
app.listen(PORT, () =>{
    console.log('App is running in port',PORT)
})