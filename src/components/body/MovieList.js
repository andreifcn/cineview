import React, { useEffect } from 'react';
import Movies from './Movies';
import UpcomingEpisodes from './UpcomingEpisodes';
import { useDispatch } from 'react-redux';
import { setMoviesData } from '../../actions';
import { Link } from 'react-router-dom';

const MovieList = () => {

    const dispatch = useDispatch();
  
    useEffect(() => {

        fetchMoviesData();
    }, []);

    const fetchMoviesData = async () => {

        let currentDate = new Date().toISOString().slice(0, 10);

        Promise.all([
            await fetch(`http://api.tvmaze.com/schedule?country=US&date=${currentDate}`)
            .then(response => response.json()),
            await fetch('http://api.tvmaze.com/shows')
            .then(response => response.json())
        ]).then(responses => dispatch(setMoviesData(responses)));
    }
    
    return <div className='movie-list'>
            <h1 style={{color: 'white'}}>Upcoming Today</h1>
            <Link to={'/AllUpcoming/'}><p style={{color: 'white'}}>+See All</p></Link>
            <UpcomingEpisodes />
            <h1 style={{color: 'white'}}>Movies</h1>
            <Link to={'/AllMovies/'}><p style={{color: 'white'}}>+See All</p></Link>
            <Movies />
        </div>
}

export default MovieList;