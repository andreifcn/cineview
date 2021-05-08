import './App.css';
import React from 'react';
import NavBar from './components/header/NavBar/NavBar';
import Home from './components/body/Home.js';
import MoviePage from './components/body/MoviePage';
import SeasonEpisodes from './components/body/SeasonEpisodes';
import Movies from './components/body/Movies';
import UpcomingEpisodes from './components/body/UpcomingEpisodes';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {

    return (
        <Router>
            <div id="main">
                    <NavBar />
                    <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/AllUpcoming/' exact component={UpcomingEpisodes} />
                    <Route path='/AllMovies/' exact component={Movies} />
                    <Route path='/MoviePage/:id/' exact component={MoviePage} />
                    <Route path='/MoviePage/:id/Seasons/:id/Episodes/' component={SeasonEpisodes} /> 
                    </Switch> 
             </div>
        </Router>
    )
}

export default App;
