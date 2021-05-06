import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { search, searchResults } from '../actions'

const Search = () => {

    const searchQuery = useSelector(state => state.search);
    const showSearchResults = useSelector(state => state.results);
    const dispatch = useDispatch();

    useEffect(() => {

        fetchSearchResults();
    }, []);

    const fetchSearchResults = async () => {

        const fetchData = await fetch(`http://api.tvmaze.com/search/shows?q=${searchQuery}`);
        const data = await fetchData.json();
        console.log(data)

        return dispatch(searchResults(data));
    }

    return (
        <div id='search-box'>
            <input 
                id='search-bar' 
                onChange={e => dispatch(search(e.target.value = e.target.value.toLocaleLowerCase()))}
                type='text' placeholder='Search for a movie...'
            />
            {searchResults[0] && <p style={{color: 'yellow'}}>OK</p>}
        </div>
    );
};


export default Search;