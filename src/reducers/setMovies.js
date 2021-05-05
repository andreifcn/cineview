const setMoviesDataReducer = (state = [], action) => {

    switch(action.type) {

        case 'SETMOVIESDATA':
            return state = action.payload;
        default:
            return state = ''
    };
};

export default setMoviesDataReducer;