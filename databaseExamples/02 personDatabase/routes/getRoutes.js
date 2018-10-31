'use strict';

const routes      = require('express').Router();

const initRoutes  = function(storage, sendErrorPage) {
  let dataStorage = storage;

  routes.get('/all', (req,res) => {
    dataStorage.getAll()
      .then(result => res.render('allPersons',{result:result}))
      .catch(err => sendErrorPage(res,err.message));
  });

  return routes;
};

module.exports  = initRoutes;
