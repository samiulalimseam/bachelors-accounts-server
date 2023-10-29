// router/rootRouter.js
const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

// Registration route
router.post('/register', userController.registerUser);

// Check user
router.post('/login', userController.checkUser);

router.get('/user/:id', userController.getUserDetails);

module.exports = router;
