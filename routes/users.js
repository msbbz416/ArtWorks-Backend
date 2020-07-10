var express = require('express');
var router = express.Router();
var artists = require('../models/artists');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/signup', function (req, res) {
  var data = new artists({
    Name: req.body.name,
    Email: req.body.email,
    Portfolio: req.body.portfolio,
    Photo: req.body.photo
  });
  console.log(data);
  data.save(function (err) {
    if (err) throw err;
    console.log("Record inserted Successfully");
    res.json({
      message: "Record inserted Successfully",
      status: 200
    })
  });
})


module.exports = router;
