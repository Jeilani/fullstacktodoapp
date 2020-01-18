import React from "react"


class TodoForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            inputValue: ""
        }

    }

    handleInputChange = event=>{
        this.setState({
            inputValue: event.target.value
        })
    }

    handleSubmit = event =>{
        event.preventDefault()
        this.props.addTodo(this.state.inputValue)
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input
                type = "text"
                value={this.state.inputValue}
                onChange={this.handleInputChange}
                />
                <button type="submit">Submit</button>
            </form>
        )
        }
}

export default TodoForm