const { Router } = require('express');
const Item = require('../models/Item');

module.exports = Router()
  .post('/', async (req, res, next) => {
    try {
      const response = await Item.insert({ ...req.body, user_id: req.user.id });
      res.json(response);
    } catch (e) {
      next(e);
    }
  })
  .get('/', async (req, res, next) => {
    try {
      //return array of objects w/ description, qty, user_id
      const response = await Item.getAll(req.user.id);

      res.json(response);
    } catch (e) {
      next(e);
    }
  });

// TO DO - implement items CRUD
