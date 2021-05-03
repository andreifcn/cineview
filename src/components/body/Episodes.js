import React from 'react'
import { useState, useEffect } from 'react';

const Episodes = ({ match }) => {

    const [episodes, setEpisodesData] = useState('');
    const movieID = match.params.id.match(/\d+/);

    useEffect(() => {

        fetchEpisodesData();
    }, []);

    const fetchEpisodesData = async () => {

        const fetchEpisodesData = await fetch(`http://api.tvmaze.com/seasons/${movieID}/episodes`);
        const data = await fetchEpisodesData.json();
        console.log(data)
        return setEpisodesData(data);
    }

    return (
        <div id='episodes-list'>
            {episodes && episodes.map(episode => {

                return <div className='episode-info'>
                            <span className='movie-image'>
                                {episode.image !== null ? 
                                    <img className='episode-pic' src={episode.image.medium} 
                                    alt='episode-pic' /> 
                                    : <img className='episode-pic' src={'https://www.omao.noaa.gov/sites/all/themes/noaa_omao/images/video-placeholder-640.jpg'} 
                                    alt='episode-pic' />}
                            </span>
                            <span className='episode-details'>
                                <h4 id='episode-title'>{episode.number}. {episode.name}</h4>
                                <p className='episode-summary'>{episode.summary}</p>
                            </span>
                        </div>
            })}
        </div>
    )

}

export default Episodes;