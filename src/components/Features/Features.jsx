import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2
import { Button } from '@mui/material';
import { Dispatch, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

function Features() {

    useEffect(() => {
        dispatch({
            type: 'FETCH_FEATURES'
        })
    },[]);

   const dispatch = useDispatch();

    const addFeatureId = (featureId) => {
        console.log('adding feature with id of ', featureId );
        dispatch({
            type:'ADD_FEATURE',
            payload: featureId
        })
      
    }


    return (
        <Grid2 container spacing={2}>
            <Grid2>
                <h3>who's going?</h3>
                {/* TODO loop through each DB category and render buttons */}
                {/* TODO on click change button color */}
                <Button 
                onClick={(event) => addFeatureId(1)}
                variant="outlined"
                size="small"
                value="1"
                >solo</Button>
            </Grid2>
            <Grid2>
            <h3>what surrounds you?</h3>
                  {/* TODO loop through each DB category and render buttons */}
                {/* TODO on click change button color */}
                <Button 
                onClick={(event) => addFeatureId(1)}
                variant="outlined"
                size="small"
                value="1"
                >mountains</Button>
            </Grid2>
            <Grid2>
            <h3>what are you up to?</h3>
                  {/* TODO loop through each DB category and render buttons */}
                {/* TODO on click change button color */}
                <Button 
                onClick={(event) => addFeatureId(1)}
                variant="outlined"
                size="small"
                value="1"
                >hiking</Button>
            </Grid2>
            <Grid2>
            <h3>how do you have fun?</h3>
                  {/* TODO loop through each DB category and render buttons */}
                {/* TODO on click change button color */}
                <Button 
                onClick={(event) => addFeatureId(1)}
                variant="outlined"
                size="small"
                value="1"
                >theme park</Button>
            </Grid2>


        </Grid2>
    )
}

export default Features;