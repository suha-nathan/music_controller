import React, { useState } from "react"
import ReactDOM from 'react-dom/client'
import { render } from "react-dom"
import HomePage from "./HomePage"


function App(props) {
    // const [name, setName] = useState()

    return (
        <div>
            <HomePage/>
        </div>
       
    );
}

export default App;

ReactDOM.createRoot(document.getElementById('app')).render(<App />)

// const appDiv = document.getElementById("app")
// render(<App/>, appDiv)