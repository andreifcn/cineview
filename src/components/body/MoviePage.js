import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { setMovieData } from '../../actions';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const MoviePage = ({ match }) => {

    const movieID = match.params.id.match(/\d+/);
    const movieData = useSelector(state => state.movie);
    const dispatch = useDispatch();
    let history = useHistory();

    useEffect(() => {
        
        fetchMovieData();
    }, []);

    const fetchMovieData = async () => {

        Promise.all([
            await fetch(`http://api.tvmaze.com/shows/${movieID}`)
            .then(response => response.json()),
            await fetch(`http://api.tvmaze.com/shows/${movieID}/seasons`)
            .then(response => response.json())
        ]).then(responses => dispatch(setMovieData(responses)));
    }
    
    return (
        <div id='movie-page'>
            <div id='movie-info'>
                <button onClick={() => history.goBack()}>Back</button>
                <img className='movie-image' src={movieData[0] && movieData[0].image !== null ? 
                    movieData[0].image.medium 
                    : 'https://www.kevingage.com/assets/clapboard.png'} />
                <h1 id='movie-title'>{movieData[0] && movieData[0].name}</h1>
                <h2 id='movie-summary'>{movieData[0] && movieData[0].summary}</h2>
            </div>
            <div id='movie-seasons'>
                <h2 style={{color:   'white'}}>Seasons</h2>
                {movieData[1] && movieData[1].map(season => {

                    return  <Link to={`/MoviePage/:id${movieID}/Seasons/${season.id}/Episodes`}>
                                <p className='season-link'>{season.number}</p>
                            </Link>
                })};
            </div>
        </div>
    )
}

export default MoviePage;