const db = require ('../models');

module.exports = app =>{
    app.get ('/', function(req,res){
        res.render('index', {
            style: 'style.css'
        })
    })
}