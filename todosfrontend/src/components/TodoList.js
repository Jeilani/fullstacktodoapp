import React, {Component} from "react"
import TodoForm from "./TodoForm"
import TodoItem from "./TodoItem"


const APIURL = "/api/todos/"

class TodoList extends Component{
    constructor(props){
        super(props)
        this.state = {
            todos: []
        }
        this.deleteTodo = this.deleteTodo.bind(this)
    }



    UNSAFE_componentWillMount(){
        this.loadTodos()
    }

    loadTodos = () => {
        fetch(APIURL, {
            mode: 'no-cors'
        })
        .then(res=>{
            if(!res.ok){
                throw Error
            }
            return res.json()
        })
        .then(todoss=>{
            this.setState({
                todos: todoss
            })
        })
        .catch(err=>{
            console.log(err)
        })
    }

    addTodo = (val)=>{
        if(val===""){
            return
        }
        fetch(APIURL, {
            method: 'post',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify({name: val})
        })
        .then(res=>{
            if(!res.ok){
                throw Error
            }
            return res.json()
        })
        .then(newTodo=>{
            this.setState(prevState=>{
                return {
                    todos: [...prevState.todos, newTodo]
                }
            })
        })
        .catch(err=>{
            console.log(err)
        })
    }

    deleteTodo = id => {
        const deleteURL = APIURL + id

        fetch(deleteURL, {
            method: 'delete',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
        })
        .then(res=>{
            if(!res.ok){
                throw Error
            }
            return res.json()
        })
        .then(newTodo=>{
            this.setState(prevState=>{
                let newArray = prevState.todos.filter(todo=> todo._id !== id)
                return {
                    todos: newArray
                }
            })
        })
        .catch(err=>{
            console.log(err)
        })
    }

    onToggle = (id, completed) => {
        let updateURL = APIURL + id
        fetch(updateURL, {
            method: 'put',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify({completed: !completed})
        })
        .then(res=>{
            if(!res.ok){
                throw Error
            }
            return res.json()
        })
        .then(newTodo=>{

            this.setState(prevState=>{
                let updatedTodos = prevState.todos.map(todo=>{
                    if (todo._id === id){

                        return {
                        ...todo, completed: !todo.completed
                        }
                    }

                    else return todo
                })
                return {
                    todos: updatedTodos
                }
            })
        })
        .catch(err=>{
            console.log(err)
        })
    }

    render(){

        const todoitemList = this.state.todos.map(todo=>{
            return (
                <TodoItem
                key = {todo._id}
                name={todo.name}
                completed={todo.completed}
                id = {todo._id}
                deleteTodo = {this.deleteTodo}
                onToggle = {this.onToggle}
                />
            )
        })
        return (
            <div className="TodoList">
                <h1>toDo List</h1>
                <TodoForm addTodo = {this.addTodo}/>
                {todoitemList}
            </div>
        )
    }
}

export default TodoList