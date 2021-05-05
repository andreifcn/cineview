import React, { useEffect, useState } from 'react';
import AllMovies from './AllMovies';
import UpcomingEpisodes from './UpcomingEpisodes';
import { useSelector, useDispatch } from 'react-redux';

const MovieList = () => {

    let moviesData = '';
    const setData = useSelector(state => state.setMoviesData);
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
        ]).then(responses => moviesData = responses);
    }
    console.log(moviesData)
    
    return (
        <div className='movie-list'>
            <h1 style={{color: 'white'}}>Upcoming Today</h1>
            
            <h1 style={{color: 'white'}}>All Movies</h1>
            
        </div>
    )
}

export default MovieList;