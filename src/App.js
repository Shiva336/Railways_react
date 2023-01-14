import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Organs from './Organs';

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" exact element={<Home />} />
                    <Route path="/organs" exact element={<Organs />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
