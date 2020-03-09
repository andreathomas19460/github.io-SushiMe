'use strict';
const express = require(`express`);

const Sound = require('node-aplay');
const axios = require('axios');
const expressHandlebars = require('express-handlebars');

const app = express();
const PORT = process.env.PORT || 3000;


app.engine('handlebars', expressHandlebars({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');


// const db = require(`./models`);


app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(express.static(`public`));

const htmlRoutes = require('./routes/html-routes');
app.use(htmlRoutes);


// require(`./routes/html-routes.js`)(app);
// require(`./routes/post-api-routes.js`)(app);


// db.sequelize.sync({ force: true }).then(() => {
//   app.listen(PORT, () =>
//     console.log(`App listening on http://localhost:${PORT}`)
//   );
// });


app.listen(PORT, function () {
  // Log (server-side) when our server has started
  console.log('Server listening on: http://localhost:' + PORT);
});

