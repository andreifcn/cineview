const moviesReducer = (state = [], action) => {

    switch(action.type) {

        case 'SETMOVIESDATA':
            return state = action.payload;
        default:
            return state;
    };
};

export default moviesReducer;