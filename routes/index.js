const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');

router.get('/users', usersController.getUsers);
router.post('/users', usersController.postUser);

module.exports = router;