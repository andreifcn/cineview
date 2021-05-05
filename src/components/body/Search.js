import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { search, clearSearch } from '../actions'

const Search = () => {

    const searchData = useSelector(state => state.search);
    const dispatch = useDispatch();
    console.log(searchData);


    return (
        <div id='search-box'>
            <input 
                id='search-bar' 
                onChange={e => dispatch(search(e.target.value))}
                type='text' placeholder='Search for a movie...'
            />
        </div>
    )
}


export default Search;