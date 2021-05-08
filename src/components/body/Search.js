import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { search, searchResults } from '../../actions';
import { Link } from 'react-router-dom';

const Search = () => {

    const searchQuery = useSelector(state => state.search);
    const showSearchResults = useSelector(state => state.results);
    const dispatch = useDispatch();

    useEffect(() => {

        fetchSearchResults();
    }, [searchQuery]);

    const fetchSearchResults = async () => {

        const fetchData = await fetch(`http://api.tvmaze.com/search/shows?q=${searchQuery}`);
        const data = await fetchData.json();
        
        return dispatch(searchResults(data));
    }

    return (
        <div id='search-box'>
            <input 
                id='search-bar' 
                onChange={e => dispatch(search(e.target.value = e.target.value.toLocaleLowerCase()))}
                type='text' placeholder='Search for a movie...'
            />
            <div id='search-results'>
                {showSearchResults && showSearchResults.map(movie => {

                    return <span>
                        <Link to={`/MoviePage/:id${movie.show.id}`}>
                            {movie.show.image !== null ?
                            <img className='movie-image' src={movie.show.image.medium} />
                            : ''}
                        </Link>
                    </span>
                })}
            </div>
        </div>
    );
};


export default Search;