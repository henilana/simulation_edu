
var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
	console.log("got request");
	res.json('["A show", "B show"]');
});

module.exports = router;