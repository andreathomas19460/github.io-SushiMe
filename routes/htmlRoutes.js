const db = require ('../models');

module.exports = app =>{
    app.get ('/', function(req,res){
        res.render('index', {
            style: 'style.css'
        })
    });
    app.get ('/home', function(req,res){
        res.render('home', {
            style: 'home.css'
        })
    });
    app.get ('/sushi', function(req,res){
        db.Sushi.findAll({}).then(function(result){
            const test = JSON.stringify(result)
            console.log(`this is the object ${test}`)
            const sushiNames = result.map((item) => {
                return item.name_ja;
            });
            console.log(`These are the sushi names ${sushiNames}`);

            res.render('sushi', {
                style: 'sushi.css',
                sushi: result
            })
        })
    });

    app.get ('/map', function(req,res){
        res.render('map', {
            style: 'map.css'
        })
    });
}