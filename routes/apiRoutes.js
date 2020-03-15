const db = require('../models');

module.exports = app => {
    app.get('/api/sushi', (req, res) => {
        db.Sushi.findAll({}).then(
            dbSushi => {
                res.json(dbSushi);
            });
    });
    app.post('/api/user', (req, res) => {
        console.log("!!!!!!!!!!!")
        console.log("req"+Object.getOwnPropertyNames(req.body))
        db.User.create({
            username: req.body.username,
            email: req.body.email
        }).then(dbSushi => {
            res.json(dbSushi)
        });
    });
    app.post('/api/post', (req, res) => {
        console.log("we are in the post request")
        db.Post.create({
            user: "1",
            sushiArray: JSON.stringify(req.body.sushiArray),
        }).then(dbSushi => {
            res.json(dbSushi)
        });
    
    });
}