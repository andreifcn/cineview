import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const UpcomingEpisodes = ({ displayItems }) => {

    const episodesData = useSelector(state => state.movies[0]);

    let maxDisplayedItems = displayItems;
    if (episodesData && Object.keys(episodesData).length < displayItems) {
        maxDisplayedItems = Object.keys(episodesData).length;
    }
    
    return <div className='upcoming-episodes'>
            {episodesData && episodesData.slice(0, maxDisplayedItems).map((episode, index) => {

                return <Link key={index} to={`/MoviePage/:id${episode.show.id}`}>
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