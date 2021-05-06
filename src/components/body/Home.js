import React from 'react';
import Search from './Search.js';
import MovieList from './MovieList.js';
 
const Home = () => {

    return (
        <div id='main'>
           <Search />
           <MovieList />
        </div>
    )
}

export default Home;