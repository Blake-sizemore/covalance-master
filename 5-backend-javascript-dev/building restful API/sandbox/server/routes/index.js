const express = require('express');
const appRouter = require('./apps');
const usersRouter = require('./users');

let router = express.Router();
router.use('/users',usersRouter);
router.use('/apps',appRouter);

module.exports = router;