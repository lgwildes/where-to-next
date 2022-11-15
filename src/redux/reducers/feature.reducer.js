
const featureReducer = (state = [], action) => {
    switch(action.type){
        case 'ADD_FEATURE':
            return [...state, action.payload];
        default:
            return state;
    }
}

export default featureReducer;