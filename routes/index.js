var express = require("express");
var router = express.Router();
var model = require("./../model/tasks")();

var title = "AGENDA LIVRE"

labs_by_day = [
  ["", ""],                   //SUNDAY    - DOMINGO
  ["heliopolis", "itaquera"], //MONDAY    - SEGUNDA
  ["itororo", "anhanguera"],  //TUESDAY   - TERÇA
  ["jockey", "guarapiranga"], //WEDNESDAY - QUARTA
  ["ccsp", "penha"],          //THURSDAY  - QUINTA
  ["tiradentes", "olido"],    //FRIDAY    - SEXTA
  ["ccj", "tres_pontes"]      //SATURDAY  - SÁBADO
]

/* GET home page. */
router.get("/", function(request, response, next) {

  var date = new Date();
  var today = date.getDay();

  //TODAY IS SUNDAY AND THERE IS NO ACTIVITY
  if (today == 0) {
    response.render("sunday", {title: title});
  }

  else {
    model.find({ lab : [labs_by_day[today][0], labs_by_day[today][1]] }, function(error, tasks) {
      if (error) {
        throw error;
      }
      response.render("index", { title: title, tasks: tasks });
    });
  }
});

router.get("/new", function(request, response, next) {
  response.render("new", {title: title});
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
