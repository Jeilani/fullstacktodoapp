const db = require("../models")


exports.getTodos = (req, res) =>{
    db.Todo.find()
    .then((todos)=>{
        res.json(todos)
    }).catch(err=>{
        res.send(err)
    })
}

exports.createTodos = (req, res)=>{
    console.log(req.body)
    db.Todo.create(req.body)
    .then(newTodo=>{
        res.json(newTodo);
    })
    .catch(err=>{
        res.send(err)
    })
}

exports.getTodo = (req, res)=>{
    db.Todo.findById(req.params.todoid)
    .then(foundTodo=>{
        res.json(foundTodo)
    })
    .catch(err=>{
        res.send(err)
    })
}

exports.updateTodo = (req, res)=>{
    db.Todo.findOneAndUpdate({_id: req.params.todoid}, req.body, {new: true})
    .then(todo=>{
        res.json(todo)
    })
    .catch(err=>{
        res.json(err)
    })
}

exports.deleteTodo = (req, res)=>{
    db.Todo.deleteOne({_id: req.params.todoid})
    .then(data=>{
        res.json({message: "deleted"})
    })
    .catch(err=>{
        console.log(err)
    })
}

module.exports = exports