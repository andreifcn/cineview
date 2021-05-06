const episodesReducer = (state = [], action) => {

    switch(action.type) {

        case 'SETEPISODESDATA':
            return state = action.payload;

        default:
            return state;
    };
};

export default episodesReducer;