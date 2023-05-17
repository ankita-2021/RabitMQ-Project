const express = require("express");
const app = express();
const web = require("./routes/web.js");
const mongoose = require("mongoose");
const port = process.env.PORT || "8000";
const dotenv = require("dotenv").config();

const connect_db = require("./db/mongo.js");

connect_db();

// JSON DATA
app.use(express.json());

// load routes
app.use("/student", web);


// get the medium 
// app.post("/", (req, res, next) => {
//   producer.publishMessage(req.body.medium, req.body.message);
//   res.send();
// });



app.listen(port, () => {
  console.log(`server is listening at http://localhost:${port}`);
});
