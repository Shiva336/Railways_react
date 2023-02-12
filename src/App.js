import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Organs from './Organs';
import Diseases from './Diseases';

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
