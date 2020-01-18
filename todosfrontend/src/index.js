import React from "react"
import ReactDOM from "react-dom"
import App from "./App.js"
import {
    BrowserRouter as Router
} from 'react-router-dom'

const body = document.getElementById("root")

ReactDOM.render(<Router>
                    <App/>
                </Router>, body)