//this is the single destination that is clicked on
const activeFavorite = (state = {}, action ) => {
    switch(action.type) {
        case 'SET_ACTIVE_FAVORITE':
            return action.payload; //a single destination object
        case 'UPDATE_NOTE':
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
        
    }
}

export default activeFavorite;