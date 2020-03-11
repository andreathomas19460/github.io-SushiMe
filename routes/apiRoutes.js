const db = require ('../models');

module.exports = app =>{
    app.get('/api/sushi', (req,res) =>{
        db.Sushi.findAll({}).then (
            dbSushi =>{
                res.json(dbSushi);
            });
    })
}