const express = require('express');
const personas = require('./PersonasRouter.js');

module.exports = app => {
  app.use(
    express.json(),
    personas,
  );
};