const express = require ("express");
const app = express();
const PORT = 3000;
require("./config/mongoose");

        //We import the model
const User = require("./models/User");




app.listen(PORT, () => console.log("Server running on port " + PORT));