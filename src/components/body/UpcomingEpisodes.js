import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const UpcomingEpisodes = () => {

    const moviesData = useSelector(state => state.movies);

    return <div>{moviesData[0] && moviesData[0].slice(0, 10).map(episode => {

        return <Link to={`/MoviePage/:id${episode.show.id}`}>

                    <img 
                    className='movie-image'
                    src={episode.show.image !== null ?
                        episode.show.image.medium
                        : 'https://popcornusa.s3.amazonaws.com/placeholder-movieimage.png'}
                    alt='movie' />
                </Link>
    })}
    </div>
};

export default UpcomingEpisodes;