import React, { useEffect, useState } from 'react';
import AllMovies from './AllMovies';
import UpcomingEpisodes from './UpcomingEpisodes';

const MovieList = () => {

    const [moviesData, setMoviesData] = useState([]);

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
        ]).then(responses => setMoviesData(responses));
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