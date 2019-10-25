const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/jsonwebtoken", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(db => console.log("connected"));
