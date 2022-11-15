
const featureReducer = (state = [], action) => {
    switch(action.type){
        case 'ADD_FEATURE':
            return [...state, action.payload];
         case 'SET_FEATURES':
            return action.payload;
        default:
            return state;
    }
}

export default featureReducer;