export const search = (data) => {

    return {
        type: 'SEARCH',
        payload: data
    };
};

export const setMoviesData = (data) => {

    return {
        type: 'SETMOVIESDATA',
        payload: data
    };
};

export const setMovieData = (data) => {

    return {
        type: 'SETMOVIEDATA',
        payload: data
    };
};

export const setEpisodesData = (data) => {

    return {
        type: 'SETEPISODESDATA',
        payload: data
    };
};
