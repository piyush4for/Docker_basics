const express = require("express");
const app = express();

app.get("/",(req,res)=>{
    res.json({
        message:"visiting root"
    });
});

app.get("/login",(req,res)=>{
    res.json({
        message:"login page"
    });
});

app.get("/signup",(req,res)=>{
    res.json({
        message:"signup page"
    });
});

app.get("/signout",(req,res)=>{
    res.json({
        message:"successfully signout"
    });
});


app.listen(3000,() => {
    console.log("server is running in http://localhost:3000");
});