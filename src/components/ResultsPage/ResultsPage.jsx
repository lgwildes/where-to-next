import React, { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid2 from '@mui/material/Unstable_Grid2'; 

import { FavoriteBorder, FavoriteBorderOutlined } from '@mui/icons-material';
import { IconButton } from '@mui/material';



function ResultsPage() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({
            type: 'FETCH_RESULTS'
        })
    },[])

    const results = useSelector(store => store.resultReducer.data)
    console.log('🗺️results from store are', results)
    
  function addFavorite(destinationId) {
    dispatch({
        type:'ADD_FAVORITE',
        payload: {
            id: destinationId
        }
    })
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
                            <Card sx={{width:500, height:300, m:2, boxShadow:3}}
                                >
                                <CardMedia
                                    component="img"
                                    height="120"
                                    image="https://images.pexels.com/photos/1850619/pexels-photo-1850619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" //TODO get photos from DB
                                    alt="image description" //TODO get alt_text from DB
                                    />
                                    <h4>{destination.name}</h4>
                                    <p>{destination.description}</p>
                                    <IconButton onClick={(event) => addFavorite(destination.id)} >
                                        <FavoriteBorderOutlined 
                                        />
                                    </IconButton>
                                   
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