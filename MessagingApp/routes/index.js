var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Message board',messages: messages });
});
/* GET new message page. */
router.get('/new', function(req, res, next) {
  res.render('form');
});

/* POST new message */
router.post("/new", function(req, res) {
  console.log(req.body.description)
  console.log("JSON", req.is('json'))
  messages.push({
    text: req.body.description, 
    user: req.body.username, 
    added: "new Date()"
  });
  console.log(messages)
  res.redirect('/')
})


module.exports = router;
