import React, { useEffect, useState } from 'react';
import AllMovies from './AllMovies';
import UpcomingEpisodes from './UpcomingEpisodes';
import { useSelector, useDispatch } from 'react-redux';
import { setMoviesData } from '../actions';

const MovieList = () => {

    const moviesData = useSelector(state => state.movies);
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
    
    return (
        <div className='movie-list'>
            <h1 style={{color: 'white'}}>Upcoming Today</h1>
            {moviesData[0] && <UpcomingEpisodes moviesData={moviesData[0]} />}
            <h1 style={{color: 'white'}}>All Movies</h1>
            {moviesData[1] && <AllMovies moviesData={moviesData[1]} />}
        </div>
    )
}

export default MovieList;