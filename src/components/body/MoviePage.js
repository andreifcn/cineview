import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const MoviePage = ({ match }) => {

    const [movieData, setMovieData] = useState('');
    const movieID = match.params.id.match(/\d+/);

    useEffect(() => {
        
        fetchMovieData();
    }, []);

    const fetchMovieData = async () => {

        Promise.all([
            await fetch(`http://api.tvmaze.com/shows/${movieID}`)
            .then(response => response.json()),
            await fetch(`http://api.tvmaze.com/shows/${movieID}/seasons`)
            .then(response => response.json())
        ]).then(responses => setMovieData(responses));
    }
    
    return (
        <div id='movie-page'>
            <div id='movie-info'>
                <img id='movie-image' src={movieData[0] && movieData[0].image !== null ? 
                    movieData[0].image.medium 
                    : 'https://www.kevingage.com/assets/clapboard.png'} />
                <h1 id='movie-title'>{movieData && movieData[0].name}</h1>
                <h2 id='movie-summary'>{movieData && movieData[0].summary}</h2>
            </div>
            <div id='movie-seasons'>
                <h2 style={{color:   'white'}}>Seasons</h2>
                {movieData && movieData[1].map(season => {

                    return  <Link to={`/MoviePage/:id${movieID}/Seasons/${season.id}/Episodes`}>
                            <p className='season-link'>{season.number}</p>
                        </Link>
                })};
            </div>
        </div>
    )
}

export default MoviePage;