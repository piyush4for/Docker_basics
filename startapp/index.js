const mongoose = require("mongoose");
const express = require("express");

const app = express()

const DATABASE = "mongodb://mymongo:27017/testup"

mongoose.connect(DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})
.then( () => {
    console.log("DB connnected");
})
.catch( () => {
    console.log("DB connection failed!!");
})

app.get("/",(req,res) => {
    res.json({
        message: "you are visiting root route"
    });
});

app.listen(3000,() => {

    console.log("server running at http://localhost:3000");
});