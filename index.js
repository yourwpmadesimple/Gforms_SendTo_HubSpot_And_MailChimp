require("dotenv").config();
require("./config/server");

const { SendData } = require("./includes/Getdata");

SendData();
var hours = 1;
var milliseconds = hours * 60 * 60 * 100;
setInterval(SendData, milliseconds);
