import search from './search';
import movie from './movie';
import movies from './movies';
import episodes from './episodes';
import { combineReducers } from 'redux';

const allReducers = combineReducers({

    search,
    movie,
    movies,
    episodes
});

export default allReducers;
