import { useHistory } from 'react-router-dom';
import Movies from './Movies';

const AllMovies = () => {

    const history = useHistory();

    return <div className='movie-list'>
        <button className='back-button' onClick={history.goBack}>{`<Back`}</button>
        <h1 className='category-title-all'>All Series</h1>
        <Movies displayItems={undefined} />
    </div>
};

export default AllMovies;