import React from "react"

const TodoItem = props =>{
    return(
        <li>

        <span
        onClick={()=>{
            props.onToggle(props.id, props.completed)
        }}
        style={{textDecoration: props.completed ? "line-through": "none"}}>
            {props.name}
        </span>

        <span id="x" onClick={()=>{props.deleteTodo(props.id)}}>X</span>
        </li>
    )
}

export default TodoItem