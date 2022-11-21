import {useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { FavoriteBorder, FavoriteBorderOutlined, Favorite, FavoriteIcon } from '@mui/icons-material';

function FavoriteButton(destinationId) {
    const dispatch = useDispatch();
    const favorites = useSelector(store => store.favorites);
    const currentUser = useSelector(store => store.user);
    let favoriteButton ;

    useEffect(() => {
        dispatch({
          type: 'FETCH_FAVORITES',
          payload: currentUser
        })
    
        dispatch({
          type: 'GET_FAVORITES',
        })
      }, [])
    

    
        for(let favorite of favorites) {
            if(favorite.destination_id === destinationId){
                favoriteButton = <Favorite />
            }
            else if(favorite.destination_id != destinationId) {
               favoriteButton = <FavoriteBorder />
            }
    
        }

       return (
        <>
            {favoriteButton}
        </>
       )
   

    


}

export default FavoriteButton;