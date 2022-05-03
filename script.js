const express = require ('express');
const app = express();
es6Renderer = require('express-es6-template-engine')


app.engine('html', es6Renderer);
app.set('views', 'views');
app.set('view engine', 'html');
app.use(express.json());
app.use(express.urlencoded())
//rutas

app.post('/circunferencia',(request , response)=>{
    const respuesta ={
        mensaje : "El radio de la circunferencia es " + (2*3.14)*parseFloat(request.body.radio)
    }
    response.json(respuesta)
})
app.post('/cuadrado',(request , response)=>{
    const respuesta ={
        mensaje : "El area es " + (parseInt(request.body.lado)) * parseInt(request.body.lado) + " cm2",
        resp : "El perímetro es " + 4*parseInt(request.body.lado) + " cm"
    }
    response.json(respuesta)
})

//port
app.listen(3000, ()=>{console.log('Escuchando el puerto:3000')});