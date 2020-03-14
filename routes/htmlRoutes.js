const db = require (`../models`);
const fs = require('fs');
 
const sushiList = fs
  .readdirSync(__dirname+"/../public/assets/images/sushi_db")
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file.slice(-4) === '.jpg');
  })
  .map(file => {
    return file.split(".")[0]
  })

console.log(sushiList)

module.exports = app =>{
    app.get ('/', function(req,res){
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
            sushiList: sushiList,
        })
    });
     
    app.get ('/map', function(req,res){
        res.render('map', {
            style: 'map.css'
        })
    });
}