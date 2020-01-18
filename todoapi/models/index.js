const mongoose = require("mongoose");

mongoose.set("debug", true)

mongoose.Promise = Promise;

// mongoose.connect("mongodb+srv://jeilani25:h2@L!k9nr8h.99W@cluster0-xo1vv.mongodb.net/test?retryWrites=true&w=majority", {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true,
//     useFindAndModify: false
// }).then(()=>{
//     console.log("Connected to database")
// }).catch(err=>{
//     console.log(err)
//     console.log("not connecting to database")
// });

mongoose.connect("mongodb://localhost/todo-api", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(()=>{
    console.log("Connected to database")
}).catch(err=>{
    console.log(err)
    console.log("not connecting to database")
});

module.exports.Todo = require("./todos")
