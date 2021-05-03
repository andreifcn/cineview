import './App.css';
import React from 'react';
import NavBar from './components/header/NavBar/NavBar.js';
import Home from './components/body/Home.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MoviePage from './components/body/MoviePage';
import Episodes from './components/body/Episodes';


function App() {

    return (
        <Router>
            <div id="main">
                    <NavBar />
                    <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/MoviePage/:id/' exact component={MoviePage} />
                    <Route path='/MoviePage/:id/Seasons/:id/Episodes/' component={Episodes} /> 
                    </Switch> 
             </div>
        </Router>
    )
}

export default App;
