const resultReducer = (state = [], action ) => {
    switch(action.type){
        case 'SET_RESULTS':
            return action.payload;
        case 'FETCH_RESULTS':
            return state;
        default:
            return state;
    }
}

export default resultReducer;