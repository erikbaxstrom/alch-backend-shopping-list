const Item = require('../models/Item');

module.exports = async (req, res, next) => {
  try {
    // console.log('authorizing. req.user.id::', req.user.id);
    const item = await Item.getById(req.params.id);
    // console.log('authorizing. item::', item);
    // confirm item-by-id's userid matches request's userid
    if (item.user_id === req.user.id) {
      //   console.log('ids match::');
      next();
    } else {
      throw new Error('You do not have access');
    }
  } catch (err) {
    err.status = 403;
    next(err);
  }
};
