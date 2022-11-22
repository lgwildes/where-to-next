import React, { useEffect, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid2 from '@mui/material/Unstable_Grid2'; 
import Button from '@mui/material/Button';
import { FavoriteBorder, FavoriteBorderOutlined, Favorite, FavoriteIcon } from '@mui/icons-material';
import { IconButton, Chip } from '@mui/material';

import FavoriteButton from '../FavoriteButton/FavoriteButton';



function ResultsPage() {
    const dispatch = useDispatch();
    const [clicked, setClicked] = useState(false)
    const currentUser = useSelector(store => store.user);
    const favorites = useSelector(store => store.favorites)

    useEffect(() => {
        dispatch({
            type: 'FETCH_RESULTS'
        })
        dispatch({
            type:'FETCH_FAVORITES',
            payload: currentUser
        })
    },[])

    const results = useSelector(store => store.resultReducer.data)
    console.log('🗺️result from store are', results)
    
  function addFavorite(destinationId) {
    console.log('ADDING FAVORITE 😱')
    dispatch({
        type:'ADD_FAVORITE',
        payload: {
            id: destinationId,
            userId: currentUser
        }
    })
    dispatch({
        type:'FETCH_FAVORITES',
        payload:currentUser
    })
  }

  const isFavorite = (destinationId) => {
    for (let fav of favorites) {
        if(fav.destination_id === destinationId){
            return true;
        }
        
    }
    
        return false;

  }
        
    

    if(results) {

        return (
            <>
           <h2>the results are in...</h2>

            <Grid2 container spacing={2} m={2}
                    alignItems="center"
                    justifyContent="center">
                {results.map(destination => {
                    return(
                        <Grid2 
                        key={destination.id}> 
                            <Card sx={{width:500, height:400, m:2, boxShadow:3}}
                                >
                                <CardMedia
                                    component="img"
                                    height="120"
                                    image={destination.url} //TODO get photos from DB
                                    alt={destination.alt_text} //TODO get alt_text from DB
                                    />
                                    <h3>{destination.name}</h3>
                                    <h5>matching preferences</h5>
                                    {destination.feature_names.map( feature => {
                                        return(
                                            <Chip
                                            key={feature}
                                            label={feature} />
                                        )
                                    })}
                                    <p>{destination.description}</p>
                                    
                                    {isFavorite(destination.id) ? 
                                            < Favorite />
                                        : 
                                        <IconButton 
                                        onClick={(event) => {
                                            addFavorite(destination.id)}}>
                                            <FavoriteBorder /> 
                                        </IconButton>
                                     }
                                   
                            </Card>
                        </Grid2>
                    )
            

                })}
             </Grid2>
            </>
            
        
        )
    }
    else{
        return(
            <h2>loading results...</h2>
        )
    }
   
   

}

export default ResultsPage;