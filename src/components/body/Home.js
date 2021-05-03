import React from 'react';
import Search from './Search.js';
import { useState, useEffect } from 'react';
import MovieList from './MovieList.js';
 
const Home = () => {

    const [showSearch, setShowSearch] = useState(null);

    return (
        <div id='main'>
           <Search 
                showSearch={showSearch}
                setShowSearch={setShowSearch} />
           <MovieList />
        </div>
    )
}

export default Home;