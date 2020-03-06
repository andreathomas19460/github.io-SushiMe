'use strict';

// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
const path = require(`path`);

// Routes
// =============================================================
module.exports = app => {
  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get(`/`, (req, res) => {
    res.sendFile(path.join(__dirname, `../public/index.html`));
  });

  // cms route loads cms.html
  app.get(`/sushi`, (req, res) => {
    res.sendFile(path.join(__dirname, `../public/sushi.html`));
  });

};
