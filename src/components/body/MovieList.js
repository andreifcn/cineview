import { React, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setMoviesData } from '../../actions';
import { Link } from 'react-router-dom';
import UpcomingEpisodes from './UpcomingEpisodes';
import Movies from './Movies';

const MovieList = () => {

    const dispatch = useDispatch();
  
    useEffect(() => {

        fetchMoviesData();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const fetchMoviesData = async () => {

        let currentDate = new Date().toISOString().slice(0, 10);

        Promise.all([
            await fetch(`https://api.tvmaze.com/schedule?country=GB&date=${currentDate}`)
            .then(response => response.json()),
            await fetch('https://api.tvmaze.com/shows')
            .then(response => response.json())
        ]).then(responses => dispatch(setMoviesData(responses)));
    }
    
    return <div className='movie-list'>
            <h1 className='category-title'>Upcoming Today</h1>
            <Link className='see-all-movies' to={'/AllUpcoming/'}><p>+See All</p></Link>
            <UpcomingEpisodes displayItems={17} />
            <h1 className='category-title'>Movies</h1>
            <Link className='see-all-movies' to={'/AllMovies/'}><p>+See All</p></Link>
            <Movies displayItems={17} />
        </div>
}

export default MovieList;