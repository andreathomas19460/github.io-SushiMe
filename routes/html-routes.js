'use strict';

// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
const path = require(`path`);
const express = require(`express`);
const router= express.Router();
// Routes
// =============================================================
// module.exports = app => {
//   // Each of the below routes just handles the HTML page that the user gets sent to.

//   // index route loads view.html
//   app.get(`/`, (req, res) => {
//     res.sendFile(path.join(__dirname, '../public/sushi.html'));
//   });

//   // // cms route loads cms.html
//   // app.get(`/sushi`, (req, res) => {
//   //   res.sendFile(path.join(__dirname, `../public/sushi.html`));
//   // });

// };


// get route -> index
router.get('/', (req, res) => {
  res.render('index',{});
});

module.exports = router;
