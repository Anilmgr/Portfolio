const express = require('express');
const hbs = require('express-handlebars');
const path = require('path');


const app = express();

// for body parser
app.use(express.urlencoded({ extended : false }));

//static files
app.use(express.static(path.join(__dirname, 'public')));

//Template Engine
app.engine('handlebars', hbs({defaultLayout: 'main'}));
app.set('view engine','handlebars');

app.get('/',(req,res)=>{
   res.render('index',{isActiveHome:true});
});

app.get('/about',(req,res)=>{
   res.render('about',{isActiveAbout:true});
});

//Error=> Page not found 404
app.use((req,res,next) => {
    const err = new Error('Page not found.');
    err.status = 404;
    res.send(err.message);
});

//server setup
app.listen(3000,()=>{
    console.log("Server Started");
});