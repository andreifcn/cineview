import React from 'react';
import { Link } from 'react-router-dom';

const UpcomingEpisodes = ({ moviesData }) => {

    return moviesData.map(episode => {

        return <Link to={`/MoviePage/:id${episode.show.id}`}>

                    <img 
                    className='movie-image'
                    src={episode.show.image !== null ?
                        episode.show.image.medium
                        : 'https://popcornusa.s3.amazonaws.com/placeholder-movieimage.png'}
                    alt='movie' />
                </Link>
    })
};

export default UpcomingEpisodes;