export const search = (data) => {

    return {
        type: 'SEARCH',
        payload: data
    };
};

export const clearSearch = () => {

    return {
        type: 'CLEARSEARCH'
    };
};

export const setMoviesData = (data) => {

    return {
        type: 'SETMOVIESDATA',
        payload: data
    };
};
