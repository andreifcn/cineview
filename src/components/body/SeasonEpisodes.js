import { React, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setEpisodesData } from '../../actions';

const SeasonEpisodes = ({ match }) => {

    const episodes = useSelector(state => state.episodes);
    const dispatch = useDispatch();
    const history = useHistory();
    const movieID = match.params.id.match(/\d+/);

    useEffect(() => {

        fetchEpisodesData();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const fetchEpisodesData = async () => {

        const fetchEpisodesData = await fetch(`https://api.tvmaze.com/seasons/${movieID}/episodes`);
        const data = await fetchEpisodesData.json();
        
        return dispatch(setEpisodesData(data));
    }

    return (
        <div id='episodes-list'>
            <button className='back-button' onClick={history.goBack}>{`<Back`}</button>
            <h1 className='category-title-all'>Season Episodes</h1>
            {episodes && episodes.map((episode, index) => {

                return <div key={index} className='episode-info'>
                            <span className='movie-image'>
                                {episode.image !== null ? 
                                    <img className='episode-pic' src={episode.image.medium} 
                                    alt='episode-pic' /> 
                                    : <img className='episode-pic' src={'https://www.omao.noaa.gov/sites/all/themes/noaa_omao/images/video-placeholder-640.jpg'} 
                                    alt='episode-pic' />}
                            </span>
                            <span className='episode-details'>
                                <h4 id='episode-title'>{episode.number}. {episode.name}</h4>
                                <p className='episode-summary' dangerouslySetInnerHTML={{ __html: episode.summary }}></p>
                            </span>
                </div>
            })}
        </div>
    )

}

export default SeasonEpisodes;