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
  res.render('form', { title: 'New message page'});
});

/* POST new message */

router.post("/new", function(req, res) {
  const author = req.body.author
  const messageText = req.body.message
  messages.push({text: messageText, user: author, added: new Date()});
  res.redirect('/')
})


module.exports = router;
