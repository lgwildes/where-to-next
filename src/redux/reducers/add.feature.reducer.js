const addFeatureReducer = (state = [], action) => {
    switch(action.type){
        case 'ADD_FEATURE':
            return [...state, action.payload];
        case 'CLEAR_FEATURES':
            return [];
        default:
            return state;
    }

}

export default addFeatureReducer;