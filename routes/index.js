const express = require('express');
const Router = express.Router();

Router.get('/',(req,res)=>{
    res.render('index',{isActiveHome:true});
});

Router.get('/about',(req,res)=>{
    res.render('about',{isActiveAbout:true});
});

Router.get('/contact',(req,res)=>{
    res.render('contact',{isActiveContact:true});
});

module.exports = Router;
