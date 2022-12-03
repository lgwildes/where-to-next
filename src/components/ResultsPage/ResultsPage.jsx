import React, { useEffect, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Grid2 from '@mui/material/Unstable_Grid2'; 
import Button from '@mui/material/Button';
import { FavoriteBorder, FavoriteBorderOutlined, Favorite, FavoriteIcon, Diversity1TwoTone } from '@mui/icons-material';
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
        <div id="results-page">
           <h2 id="result-header">the results are in...</h2>

            <Grid2 container spacing={2} m={2}
                    alignItems="center"
                    justifyContent="center">
                {results.map(destination => {
                    return(
                        <Grid2 
                        key={destination.id}
                        id="results-card"> 
                            <Card sx={{width:500, height:500, m:2, boxShadow:3}}
                                >
                                
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={destination.url} 
                                    alt={destination.alt_text} 
                                    />
                                <CardContent>
                                <div>
                                    <h3>{destination.name}</h3>
                                    <div id="result-chips">
                                    {destination.feature_names.map( feature => {
                                        
                                        return(
                                           
                                            <Chip
                                            key={feature}
                                            label={feature} />
                                          
                                        )
                                       
                                    })}
                                    </div>
                                    <p>{destination.description}</p>
                                    
                                    {isFavorite(destination.id) ? 
                                        <div id="filled-heart">
                                            <Favorite />
                                        </div>
                                        : 
                                        <div id="outlined-heart">
                                        <IconButton 
                                        onClick={(event) => {
                                            addFavorite(destination.id)}}>
                                            <FavoriteBorder /> 
                                        </IconButton>
                                        </div>
                                     }
                                     </div>
                                 </CardContent>  
                            </Card>
                        </Grid2>
                    )
            

                })}
             </Grid2>
            </div>
            
        
        )
    }
    else{
        return(
            <h2>loading results...</h2>
        )
    }
   
   

}

export default ResultsPage;