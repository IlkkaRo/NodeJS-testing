'use strict';

const routes = require('express').Router();

const initRoutes = function(storage, sendErrorPage) {
  let dataStorage = storage;

  routes.get('/all', (req,res)=>{
    dataStorage.getAll()
      .then(result => res.render('allGifts', {result:result}))
      .catch(err => sendErrorPage(res, err.message));
  });

  routes.get('/getgift', (req,res)=>
    res.render('getGift',{title:'Get gift with ID', header:'Get gift with ID', action:'/getgift'})
  );

  routes.post('/getgift', (req,res)=>{
    if(!req.body) {
      res.sendStatus(401);
    }
    else {
      let giftID = req.body.giftID;
      dataStorage.get(giftID)
        .then(gifts => res.render('giftPage', {gifts}))
        .catch(err => sendErrorPage(res,err.message, 'GiftError', 'Oops!'));
    }
  });

  return routes;
};

module.exports=initRoutes;
