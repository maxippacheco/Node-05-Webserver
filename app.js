const express = require('express');
const hbs = require('hbs');
require('dotenv').config();

const app = express();
const port = process.env.PORT;

//handlebars

app.set('view engine', 'hbs');


hbs.registerPartials(__dirname + '/views/partials', (err) => {
    console.log(err);
})



// Middleware
//servir contenido estático

app.use( express.static('public') );


/*
app.get('/hola-mundo', function (req, res) {
    res.send('Hola mundo');
})
*/

/*app.get('/', (req, res) => {
    

    res.render('home', {
        nombre: 'Maximo',
        titulo: 'Curso de Node'
    });

})*/

/*app.get('/generic', (req, res) => {
    
    //res.sendFile(__dirname + '/public/roadtrip/generic.html');
    res.render('generic', {
        nombre: 'Maximo',
        titulo: 'Curso de Node'
    });
})

app.get('/elements', (req, res) => {
    
    //res.sendFile(__dirname + '/public/roadtrip/elements.html');
    
    res.render('elements', {
        nombre: 'Maximo',
        titulo: 'Curso de Node'
    });


})
*/


app.get('*', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
  