const express = require('express');
const pingController = require('../Controller/ping.controllers');
const router = express.Router();

router.get('/', pingController.ping);

module.exports = router