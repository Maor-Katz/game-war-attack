import React from 'react';
import './App.css';
import Header from "./components/Header";
import Scenario from "./components/scenario-component/Scenario";

function App() {
    return (
        <div className="App">
            <Header/>
            <Scenario/>
        </div>
    );
}

export default App;
