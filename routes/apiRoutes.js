const db = require('../models');

module.exports = app => {
    app.get('/api/sushi', (req, res) => {
        db.Sushi.findAll({}).then(
            dbSushi => {
                res.json(dbSushi);
            });
    });
    app.post('/api/sushi', (req, res) => {
        db.Sushi.create({
            name: req.body.name,
            name_ja: req.body.name_ja
        }).then(dbSushi => {
            res.json(dbSushi)
        });
    });
    app.post('/api/post', (req, res) => {
        console.log("api post");
        db.Post.create({
            user: req.body.user,
            sushiArray: req.body.sushiArray+'',
        }).then(dbSushi => {
            res.json(dbSushi)
        });
    });
    app.put('/api/sushi/:id', (req, res) => {
        db.Sushi.destroy({
            where: {
                id: req.params.id
            }
        }).then(dbSushi => {
            res.json(dbSushi);
        })
    })
}