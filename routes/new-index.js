
var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
	console.log("got request");
});

module.exports = router;