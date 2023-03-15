const mongoose = require("mongoose");

const Schema = mongoose.Schema;


 
const sensordataSchema = new Schema(
    {
      waterlevel: {
        type: Schema.Types.Number,
        required: true,
      },
      motorstatus: {
        type: Schema.Types.String,
        required: true,
      },
    },
    {
      timestamps: true,
    }
  );
  

module.exports = mongoose.model("sensordata", sensordataSchema);
