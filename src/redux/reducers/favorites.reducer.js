const favorites = (state = [], action ) => {
    switch(action.type) {
        case 'SET_FAVORITES':
            return action.payload;
        case 'GET_FAVORITES':
            return state;
        default:
            return state;

    }

}

export default favorites;