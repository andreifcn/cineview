import './App.css';
import React from 'react';
import NavBar from './components/header/NavBar/NavBar';
import Index from './components/body/Index.js';
import MoviePage from './components/body/MoviePage';
import SeasonEpisodes from './components/body/SeasonEpisodes';
import AllMovies from './components/body/AllMovies';
import AllUpcomingEpisodes from './components/body/AllUpcomingEpisodes';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {

    return (
        <Router>
            <div id="main">
                    <NavBar />
                    <Switch>
                    <Route path='/' exact component={Index} />
                    <Route path='/AllUpcoming/' exact component={AllUpcomingEpisodes} />
                    <Route path='/AllMovies/' exact component={AllMovies} />
                    <Route path='/MoviePage/:id/' exact component={MoviePage} />
                    <Route path='/MoviePage/:id/Seasons/:id/Episodes/' component={SeasonEpisodes} /> 
                    </Switch> 
             </div>
        </Router>
    )
}

export default App;
