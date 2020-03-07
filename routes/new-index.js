
var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
	console.log("got request");
	res.json('{"a show": 9.4, "b show": 8.5}');
});

module.exports = router;