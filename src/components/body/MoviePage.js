import { Link, useHistory } from 'react-router-dom';
import { setMovieData } from '../../actions';
import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const MoviePage = ({ match }) => {

    const movieID = match.params.id.match(/\d+/);
    const movieData = useSelector(state => state.movie[0]);
    const seasonsData = useSelector(state => state.movie[1]);
    const dispatch = useDispatch();
    let history = useHistory();
    
    useEffect(() => {
        
        fetchMovieData();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const fetchMovieData = async () => {

        Promise.all([
            await fetch(`https://api.tvmaze.com/shows/${movieID}`)
            .then(response => response.json()),
            await fetch(`https://api.tvmaze.com/shows/${movieID}/seasons`)
            .then(response => response.json())
        ]).then(responses => dispatch(setMovieData(responses)));
    }

    return (
        <div id='movie-page'>
            <button className='back-button' onClick={history.goBack}>Back</button>
            <div id='movie-info'>
                <img className='movie-page-image'
                    src={movieData && movieData.image !== null ? 
                        movieData.image.medium 
                        : 'https://www.kevingage.com/assets/clapboard.png'}
                    alt='movie-poster' />
                <h2 className='movie-page-title'>{movieData.name}</h2>
                <p className='movie-page-summary'>{movieData.summary.innerHTML}</p>
                <p id='movie-page-premiered'>Premiered: {movieData.premiered}</p>
                <p id='movie-page-genre'>Genre: {movieData.genres[0]}</p>
                <p id='imdb-id'>IMDB ID: {movieData.externals.imdb}</p>
            </div>
            <div id='movie-seasons'>
                <h2>Seasons</h2>
                {seasonsData.map((season, index) => {

                    return  <Link key={index} to={`/MoviePage/:id${movieID}/Seasons/${season.id}/Episodes`}>
                                <p className='season-link'>{season.number}</p>
                            </Link>
                })};
            </div>
        </div>
    )
}

export default MoviePage;