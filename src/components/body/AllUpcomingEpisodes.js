import React from 'react';
import { useHistory } from 'react-router-dom';
import UpcomingEpisodes from './UpcomingEpisodes';

const AllUpcomingEpisodes = () => {

    const history = useHistory();
    
    return <div className='category-page'>
        <button className='back-button' onClick={history.goBack}>{`<Back`}</button>
        <h1 className='category-title-all'>All Upcoming</h1>
        <UpcomingEpisodes displayItems={undefined} />
    </div>
};

export default AllUpcomingEpisodes;