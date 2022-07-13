import React, { useState } from "react"
import ReactDOM from 'react-dom/client'
import { render } from "react-dom"
import HomePage from "./HomePage"
import RoomJoinPage from './RoomJoinPage';
import CreateRoomPage from './CreateRoomPage';
import {
    BrowserRouter as Router, 
    Switch, 
    Route, 
    Routes, 
    Link, 
    Redirect 
} from "react-router-dom"

function App(props) {
    // const [name, setName] = useState()

    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/join" element={<RoomJoinPage/>} />
                <Route path="/create" element={<CreateRoomPage/>} />
            </Routes>

        </Router>
       
    );
}

export default App;

ReactDOM.createRoot(document.getElementById('app')).render(<App />)

// const appDiv = document.getElementById("app")
// render(<App/>, appDiv)