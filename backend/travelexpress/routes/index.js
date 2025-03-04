var express = require('express');
var router = express.Router();

/*GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
/*app.get("http://localhost:3000/api/destinations", (req, res) => {
  res.json([
      { id: 1, name: "Santorini, Greece" },
      { id: 2, name: "Kyoto, Japan" },
      { id: 3, name: "Maldives" },
      { id: 4, name: "Swiss Alps, Switzerland" }
  ]);
});*/

