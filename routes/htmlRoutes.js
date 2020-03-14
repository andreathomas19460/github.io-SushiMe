const db = require (`../models`);
module.exports = app =>{
    app.get ('/', function(req,res){

const db = require(`../models`);
const YAML = require('yaml');
const fs = require('fs');

const file = fs.readFileSync(__dirname+"/../public/assets/sushi.yaml", 'utf8')
const sushiList = YAML.parse(file)

module.exports = app => {
    app.get('/', function (req, res) {
        res.render('index', {
            style: 'landingPage.css'
        })
    });
    app.get ('/home', function(req,res){
        res.render('home', {
            style: 'style.css'
        })
    });

    app.get ('/sushiMe', function(req,res){
        res.render('sushiMe', {
            style: 'sushiMe.css',
            
        })
    });
     
    app.get ('/map', function(req,res){
        res.render('map', {
            style: 'map.css'
        })
    });
}