const route = require('express').Router();

const sys = require('../controllers/dbAccess');

route.get('/', sys.sysdate);

module.exports = route;