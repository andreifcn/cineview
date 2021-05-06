
const movieReducer = (state = [], action) => {

    switch(action.type) {

        case 'SETMOVIEDATA':
            return state = action.payload;

        default:
            return state;
    };
};

export default movieReducer;