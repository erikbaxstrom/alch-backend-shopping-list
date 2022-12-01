const { Router } = require('express');
const Item = require('../models/Item');

module.exports = Router().get('/', async (req, res, next) => {
  try {
    //return array of objects w/ description, qty, user_id
    console.log('user', req.user);
    const response = await Item.getAll(req.user.id);

    res.json(response);
  } catch (e) {
    next(e);
  }
});

// TO DO - implement items CRUD
