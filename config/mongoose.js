const mongoose = require('mongoose');

const MONGO_URI = "mongodb+srv://Admin:Sushiya2020@cluster0.9wiyj.mongodb.net/test";

const db = mongoose.connect(MONGO_URI, {
    useNewUrlParser:true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
})
.then(() => console.log("Succesfully connected to MongoDB."))
.catch(console.error)


module.exports = db;