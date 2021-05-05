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
