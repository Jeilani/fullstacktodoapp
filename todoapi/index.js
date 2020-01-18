const express = require("express"),
      app = express(),
      port = process.env.PORT || 3000,
      bodyParser = require("body-parser");


const todoRoutes = require("./routes/todos");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"))
app.use(express.static(__dirname + "/views"))


app.get("/", (req, res)=>{
    res.send("home page")
})

app.use("/api/todos", todoRoutes)

app.listen(3001, (req, res)=>{
    console.log("Connected to server")
})