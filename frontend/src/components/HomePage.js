import React, { useState } from 'react';
import RoomJoinPage from './RoomJoinPage';
import CreateRoomPage from './CreateRoomPage';
import Test from './Test';
import {
    BrowserRouter as Router, 
    Switch, 
    Route, 
    Routes, 
    Link, 
    Redirect 
} from "react-router-dom"


function HomePage() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Test/>}></Route>
                <Route path="/join" element={<RoomJoinPage/>} />
                <Route path="/create" element={<CreateRoomPage/>} />
            </Routes>

        </Router>

    );
}

export default HomePage;