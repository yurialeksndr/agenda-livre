var express = require('express');
var router = express.Router();
var model = require("./../model/tasks")();

/* GET home page. */
router.get('/', function(request, response, next) {
  model.find(null, function(error, tasks) {
    if (error) {
      throw error;
    }
    response.render('index', { title: 'Agenda Livre', tasks: tasks });
  });
});

module.exports = router;
