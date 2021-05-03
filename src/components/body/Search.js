import React from 'react';
import { useState, useEffect } from 'react';
import MoviePage from './MoviePage';

const Search = () => {

    const [searchTitle, setSearchTitle] = useState(null);


    return (
        <div id='search-box'>
            <input 
                id='search-bar' 
                onChange={event => setSearchTitle(event.target.value)} 
                type='text' placeholder='Search for a movie...'
            />
        </div>
    )
}


export default Search;