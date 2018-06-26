module.exports = function() {
  var db = require("./../libs/connect_db")();
  var mongoose = require("mongoose");

  var task = mongoose.Schema({
    name: String,
    gender: Boolean,
    project: String,
    machine: String,
    lab: String,
    estimated_time: Number,
    status: { type: Boolean, default: false },
    created_at: { type: Date, default: Date.now }
  });

  return mongoose.model("tasks", task);
}
