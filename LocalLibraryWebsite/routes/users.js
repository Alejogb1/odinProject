var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.send('Wiki home page');
});

router.get("/about", (req, res, next) => {
  res.send("About this wiki")
})

module.exports = router;
