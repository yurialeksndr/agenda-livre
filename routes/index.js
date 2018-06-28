var express = require('express');
var router = express.Router();
var model = require("./../model/tasks")();

/* GET home page. */
router.get("/", function(request, response, next) {
  model.find(null, function(error, tasks) {
    if (error) {
      throw error;
    }
    response.render("index", { title: "Agenda Livre", tasks: tasks });
  });
});

router.get("/new", function(request, response, next) {
  response.render("new", {title: "Agenda Livre"});
});

router.post("/new", function(request, response, next) {
  var data = request.body;

  model.create(data, function(error, task) {
    if (error) {
      throw error;
    }
    response.redirect("/");
  });
});

module.exports = router;
