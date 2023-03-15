
const SensorData = require("../models/sensordata");


const sensordataHandler = async (req, res, next) => {
  
  const { waterlevel, motorstatus } = req.body;


  
  

  let exists = false;
  let sensordata;
  try {
    sensordata = await SensorData.find();
    if (sensordata.length == 1) {
      exists = true;
    }

  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Updating Data Failed",
    });
  }

  if (exists) {
    const result = await SensorData.findOneAndUpdate(
      { _id: sensordata[0]._id },
      {
        waterlevel: waterlevel,
        motorstatus: motorstatus,
      }
    );
  } else {
    try {
      const newSensorData = new SensorData({
        waterlevel: waterlevel,
        motorstatus: motorstatus,



      });
      await newSensorData.save();
    } catch (err) {
      console.log(err);
      return res.status(500).json({
        message: "Updating Data Failed",
      });
    }
  }

  return res.status(200).json({
    message: "Data updated successfully",
  });
};

const addHours = (numOfHours, date = new Date()) => {
  date.setTime(date.getTime() + numOfHours * 60 * 60 * 1000);

  return date;
}

const getdataHandler = async (req, res, next) => {
  let sensordata, updatedAtnew;
  try {
    sensordata = await SensorData.find();
    //console.log(sensordata);
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Getting Data Failed",
    });
  }
  if (sensordata.length == 1) {
    const updatedAtold = new Date(sensordata[0].updatedAt);
    updatedAtnew = addHours(5.511, updatedAtold);
    
  }

  const data = {
    waterlevel: sensordata[0].waterlevel,
    motorstatus: sensordata[0].motorstatus,
    
  }
  
  return res.status(200).json(data);
}

exports.sensordataHandler = sensordataHandler;
exports.getdataHandler = getdataHandler;
