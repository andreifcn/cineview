import react from 'react';

const searchReducer = (state = [], action) => {

    switch(action.type) {
        case 'SEARCH':
            return state = action.payload;
        
        case 'CLEARSEARCH':
            return state = [];

        default:
            return state = [];
    }
}

export default searchReducer;