const router = require('express').Router();
const cultures = require('./cultures');

router.use('/', cultures);

module.exports = router;