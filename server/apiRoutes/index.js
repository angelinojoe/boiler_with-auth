const router = require('express').Router();

//router.use('/users', require('./users'));

//handles routes that dont exist with a 404 error
router.use(function (req, res, next) {
  const err = new Error('Not found.');
  err.status = 404;
  next(err);
});

module.exports = router;
