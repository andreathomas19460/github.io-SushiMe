'use strict';
const express = require(`express`);
const expressHandlebars = require('express-handlebars');

const app = express();
const PORT = process.env.PORT || 3000;


app.engine('handlebars', expressHandlebars({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');


const db = require(`./models`);


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

app.use(express.static(`public`));


db.sequelize.sync().then(() => {
  app.listen(PORT, () =>
    console.log(`App listening on http://localhost:${PORT}`)
  );
});



