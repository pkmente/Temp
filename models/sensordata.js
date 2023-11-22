const mongoose = require("mongoose");

const Schema = mongoose.Schema;


 
const sensordataSchema = new Schema(
    {
      temperature: {
        type: Schema.Types.Number,
        required: true,
      },
      humidity: {
        type: Schema.Types.Number,
        required: true,
      },
    }
  );
  

module.exports = mongoose.model("sensordata", sensordataSchema);
