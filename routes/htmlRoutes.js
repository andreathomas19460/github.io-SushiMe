const db = require(`../models`);

const sushiList = [
    ["blue_mackerel", "blue mackerel", "サバ"],
    ["salmon", 'salmon', 'シャケ'],
    ["tuna", 'tuna', 'マグロ'],
    ["sea_urchin", 'sea urchin', 'ウニ'],
    ["red_sea_bream", 'red sea bream', 'マダイ'],
    ["octopus", 'octopus', 'タコ'],
    ["yellowtail", 'yellowtail', 'ハマチ'],
    ["shrimp", 'shrimp', 'エビ'],
    ["puffer_fish", 'puffer fish', 'フグ'],
    ["fluke", 'fluke', 'ヒラメ'],
    ["sardine", 'sardine', 'イワシ'],
    ["spanish_mackerel", 'spanish mackerel', 'サワラ'],
    ["sea_bass", 'sea bass', 'スズキ'],
    ["freshwater_eel",'freshwater eel', 'ウナギ'],
    ["surf_clam", 'surf clam', 'ホッキガイ'],
    ["oyster", 'oyster', 'カキ'],
    ["crab", 'crab', 'カニ'],
    ["salmon_roe", 'salmon roe', 'イクラ'],
    ["flying_fish_roe", 'flying fish roe', 'トビコ'],
]

module.exports = app => {
    app.get('/', function (req, res) {
        res.render('index', {
            style: 'landingPage.css'
        })
    });
    app.get('/home', function (req, res) {
        res.render('home', {
            style: 'style.css'
        })
    });

    app.get('/sushiMe', function (req, res) {
        res.render('sushiMe', {
            style: 'sushiMe.css',
            sushiList: sushiList,
        })
    });

    app.get('/map', function (req, res) {
        res.render('map', {
            style: 'map.css'
        })
    });
}

module.exports.sushiList = sushiList;