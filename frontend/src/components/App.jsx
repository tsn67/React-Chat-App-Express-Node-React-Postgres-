import React, { useEffect, useState } from "react";
import Entry from "../pages/Entry";
import Chat from "../pages/Chat";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import {io} from 'socket.io-client';

function App() {
    
    const [socket, setSocket] = useState(null);
    const [onlineCount, setOnlineCount] = useState(0);

    useEffect(()=> {
        const ws = io('http://localhost:3000');
        ws.on('current-count', (json) => {
            setOnlineCount(json.count);
        });
        setSocket(ws);
    }, []);

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Entry count={onlineCount}/>} />
                <Route path="/chat" element={<Chat/>} />
            </Routes>
        </Router>
    );
}

export default App;
