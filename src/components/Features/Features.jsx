import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2
import { Button } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import { FormControlLabel } from '@mui/material';
import { Dispatch, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Features() {

    const [international, setInternational] = useState('FALSE');
    const [domestic, setdomestic] = useState('FALSE');
    const dispatch = useDispatch();
    const features = useSelector(store => store.featureReducer)
    useEffect(() => {
        dispatch({
            type: 'FETCH_FEATURES'
        })
    },[]);

    const addFeatureId = (featureId) => {
        console.log('adding feature with id of ', featureId );
        dispatch({
            type:'ADD_FEATURE',
            payload: featureId
        })
      
    }


    return (
       <>
        <FormGroup>
            <FormControlLabel 
            control={<Checkbox  />} 
            label="domestic (U.S.)" />
            <FormControlLabel 
            control={<Checkbox  />} 
            label="international" />
        </FormGroup>

        <Grid2 container spacing={2}>
            <Grid2>
                <h3>who's going?</h3>
                {/* TODO loop through each DB category and render buttons */}
                {/* TODO on click change button color */}
               {features.map(feature => {
                if(feature.category_id === 1){
                    return(
                        <Button 
                        onClick={(event) => addFeatureId(feature.id)}
                        key={feature.id}
                        variant="outlined"
                        size="small"
                        value="{feature.id}"
                        >{feature.name}</Button>
                    )
                }
                else{
                    return(
                        <div></div>
                    )
                }
               
               })}
               
            </Grid2>
            <Grid2>
            <h3>what surrounds you?</h3>
                  {/* TODO loop through each DB category and render buttons */}
                {/* TODO on click change button color */}
                {features.map(feature => {
                if(feature.category_id === 2){
                    return(
                        <Button 
                        onClick={(event) => addFeatureId(feature.id)}
                        key={feature.id}
                        variant="outlined"
                        size="small"
                        value="{feature.id}"
                        >{feature.name}</Button>
                    )
                }
                else{
                    return(
                        <div></div>
                    )
                }
               
               })}
               
            </Grid2>
            <Grid2>
            <h3>what are you up to?</h3>
                  {/* TODO loop through each DB category and render buttons */}
                {/* TODO on click change button color */}
                {features.map(feature => {
                if(feature.category_id === 3){
                    return(
                        <Button 
                        onClick={(event) => addFeatureId(feature.id)}
                        key={feature.id}
                        variant="outlined"
                        size="small"
                        value="{feature.id}"
                        >{feature.name}</Button>
                    )
                }
                else{
                    return(
                        <div></div>
                    )
                }
               
               })}
               
            </Grid2>
            <Grid2>
            <h3>how do you have fun?</h3>
                  {/* TODO loop through each DB category and render buttons */}
                {/* TODO on click change button color */}
                {features.map(feature => {
                if(feature.category_id === 4){
                    return(
                        <Button 
                        onClick={(event) => addFeatureId(feature.id)}
                        key={feature.id}
                        variant="outlined"
                        size="small"
                        value="{feature.id}"
                        >{feature.name}</Button>
                    )
                }
                else{
                    return(
                        <div></div>
                    )
                }
               
               })}
               
            </Grid2>


        </Grid2>

        </>
    )
}

export default Features;