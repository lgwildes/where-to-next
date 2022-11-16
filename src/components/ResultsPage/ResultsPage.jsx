import React, { useState, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid2 from '@mui/material/Unstable_Grid2'; 


function ResultsPage() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({
            type: 'FETCH_RESULTS'
        })
    },[results])

    const results = useSelector(store => store.resultReducer.data)
    console.log('🗺️results from store are', results)
   
    if(results.length > 0) {

        return (
            <>
           <h2>the results are in...</h2>

            <Grid2 container spacing={2} m={2}
                    alignItems="center"
                    justifyContent="center">
                {results.map(destination => {
                    return(
                        <Grid2> 
                            <Card sx={{width:500, height:260, m:2, boxShadow:3}}>
                                <CardMedia
                                    component="img"
                                    height="120"
                                    image="https://images.pexels.com/photos/1850619/pexels-photo-1850619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" //TODO get photos from DB
                                    alt="image description" //TODO get alt_text from DB
                                    />
                                    <div key={destination.id}>
                                    <h4>{destination.name}</h4>
                                    <p>{destination.description}</p>
                                </div>
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