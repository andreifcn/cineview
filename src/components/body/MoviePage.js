import { Link, useHistory } from 'react-router-dom';
import { setMovieData } from '../../actions';
import { React, useEffect } from 'react';
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
            <button className='back-button' onClick={history.goBack}>Back</button>
            <div id='movie-info'>
                <img className='movie-page-image' src={movieData[0] && movieData[0].image !== null ? 
                    movieData[0].image.medium 
                    : 'https://www.kevingage.com/assets/clapboard.png'} />
                <h2 className='movie-page-title'>{movieData[0] && movieData[0].name}</h2>
                <p className='movie-page-summary'>{movieData[0] && movieData[0].summary}</p>
                <p id='movie-page-premiered'>Premiered: {movieData[0] && movieData[0].premiered}</p>
                <p id='movie-page-genre'>Genre: {movieData[0] && movieData[0].genres[0]}</p>
                <p id='imdb-id'>IMDB ID: {movieData[0] && movieData[0].externals.imdb}</p>
            </div>
            <div id='movie-seasons'>
                <h2>Seasons</h2>
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