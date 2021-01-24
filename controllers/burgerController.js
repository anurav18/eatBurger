var express = require("express");

var router = express.Router();
var burger = require("../models/burger");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.all(function(data) {

    const devoured = data.filter(items => items.availability === 0);
    const available = data.filter(items => items.availability === 1);
    var hbsObject = {
      devoured: devoured,
      available: available
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

//Create a new burger

router.post("/api/burger", function(req, res) {
  burger.create(["burgerName"], [req.body.burgerName], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

//Move a available burger to devoured list

router.put("/api/burger/:id", function(req, res) {
  var condition = "id = " + req.params.id;
  burger.update(
    {
      availability: req.body.availability
    },
    condition,
    function(result) {
      if (result.changedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      res.status(200).end();

    }
  );
});

//Delete the burger from a database

router.delete("/api/burger/:id",function(req,res){
  const condition = "id="+req.params.id;
  burger.delete(condition,function(result){
    if (result.affectedRows === 0) {
      return res.status(404).end();
  }
  res.status(200).end();
  })
})

// Export routes for server.js to use.
module.exports = router;
