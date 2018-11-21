'use strict';

const routes = require('express').Router();

module.exports = (dataStorage, sendErrorPage, sendStatusPage) => {
  routes.get('/deletegift', (req,res) =>
    res.render('getGift', {title:'Remove gift with ID', header:'Remove gift with ID', action:'/deletegift'})
  );
  routes.post('/deletegift', (req,res) => {
    if(!req.body || !req.body.giftID) {
      res.sendStatus(500);
    }
    else {
      dataStorage.delete(req.body.giftID)
        .then(message => sendStatusPage(res,message))
        .catch(err => sendErrorPage(res, err.message));
    }
  });
  return routes;
};
