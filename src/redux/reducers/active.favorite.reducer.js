const activeFavorite = (state = {}, action ) => {
    switch(action.type) {
        case 'SET_ACTIVE_STUDENT':
            return action.payload;
        
    }
}