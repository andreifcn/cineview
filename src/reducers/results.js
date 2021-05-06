const resultsReducer = (state = [], action) => {

    switch(action.type) {

        case 'SETSEARCHRESULTS':
            return state = action.payload;
        
        default:
            return state;
    };
};

export default resultsReducer;