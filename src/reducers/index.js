import search from './search';
import setMovies from './setMovies';
import { combineReducers } from 'redux';

const allReducers = combineReducers({

    search,
    setMovies
});

export default allReducers;
