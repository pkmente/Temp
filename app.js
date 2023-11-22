const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

const sensorDataRoutes = require("./routes/sensordataRoutes");



app.use(cors());
app.use(bodyParser.json());
app.use("/api", sensorDataRoutes);


const port = process.env.PORT || 5600;
mongoose.set('strictQuery', false);
mongoose
  .connect(
    "mongodb+srv://iotcourse:dbj987jXei6fmXvF@cluster0.pptezci.mongodb.net/iotcourse?retryWrites=true&w=majority")
  .then((result) => {
    console.log("app is running...");
    app.listen(port);
  }).catch((err) => {
    console.log(err);
  });

