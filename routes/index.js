var express = require('express');
var router = express.Router();

const story = require('fs').readFileSync('story.txt').toString().split('\n').map(i=>i.trim()).filter(i=>!i.match(/^\#/)).filter(i=>i.length).map(i=>({text:i})) .map(o=>{ o.picture = (o.text.match(/([a-z]+\.(jpg|png))/)||[])[0]; o.text = o.text.replace(/[a-z]+\.(jpg|png)/g,''); return o; })
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' , story });
});

module.exports = router;
