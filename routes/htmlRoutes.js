const db = require (`../models`);
module.exports = app =>{
    app.get ('/', function(req,res){
<<<<<<< HEAD
        res.render('sushi', {
=======
        res.render('index', {
            style: 'landingPage.css'
        })
    });
    app.get ('/home', function(req,res){
        res.render('home', {
>>>>>>> eaa8aefa731295dabe925b43e8d1ad0a7d57b44a
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