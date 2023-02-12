import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Organs from './pages/Organs/Organs';
import Diseases from './pages/Diseases/Diseases';

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" exact element={<Home />} />
                    <Route path="/organs" exact element={<Organs />} />
                    <Route path="/diseases" exact element={<Diseases />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
