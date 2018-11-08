'use strict';

const routes =  require('express').Router();

module.exports =  (dataStorage, sendErrorPage, sendStatusPage) => {
  routes.get('/deleteperson', (req,res) =>
    res.render('getPerson', {title:'Remove', header:'Remove', action:'/deleteperson'})
  );
  routes.post('/deleteperson', (req,res) => {
    if(!req.body || !req.body.personID) {
      res.sendStatus(500);
    }
    else {
      dataStorage.delete(req.body.personID)
        .then(message => sendStatusPage(res,message))
        .catch(err => sendErrorPage(res, err.message));
    }
  });
  return routes;
};
