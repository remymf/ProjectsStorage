const express = require('express');
const router = express.Router();

//Register
router.get('/register', (req, res, next) => {
	res.send('REGISTERed');
});

//Register
router.post('/authenticate', (req, res, next) => {
	res.send('Auth');
});

//Register
router.get('/profile', (req, res, next) => {
	res.send('PROFILE');
});

//Register
router.get('/validate', (req, res, next) => {
	res.send('VALIDAte');
});

module.exports = router;