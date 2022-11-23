const addFeatureReducer = (state = [], action) => {
    switch(action.type){
        case 'ADD_FEATURE':
            return [...state, action.payload];
        case 'REMOVE_FEATURE':
            return state.filter(feature => feature.id != action.payload)
        case 'CLEAR_FEATURES':
            return [];
        default:
            return state;
    }

}

export default addFeatureReducer;