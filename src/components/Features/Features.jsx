import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2
import { Button } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import { FormControlLabel } from '@mui/material';
import { Dispatch, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Features() {

    const [international, setInternational] = useState(false);
    const [domestic, setDomestic] = useState(false);


    const dispatch = useDispatch();
    const features = useSelector(store => store.featureReducer)
    const addedFeatures = useSelector(store => store.addFeatureReducer)

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

    // set domestic state to true if false, and false if true. 
    const handleDomesticCheckbox = () => {
        setDomestic(!domestic);
    }
    // set international state to true if false, and false if true. 
    const handleInternationalCheckbox = () => {
        setInternational(!international);
    }

    const submitPreferences = () => {
        if (international && domestic === 'FALSE'){
            alert('Please select your international and domestic preference!')
        }
        console.log(`submitting preferences 🌴, 
        domestic: ${domestic}, 
        international: ${international},
        features: ${addedFeatures}
         `)

         dispatch({
            type: 'SUBMIT_FEATURES',
            payload: {
                domestic: domestic, 
                international: international,
                features: addedFeatures
            }

         })

        

    }


    return (
       <>
        <FormGroup>
            <FormControlLabel 
            control={<Checkbox 
                        onChange={handleDomesticCheckbox} />} 
            label="domestic (U.S.)" />
            <FormControlLabel 
            control={<Checkbox 
                        onChange={handleInternationalCheckbox} />} 
            label="international" />
        </FormGroup>

        <Grid2 container spacing={2}>
            <Grid2>
                <h3>who's going?</h3>
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
                    return
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
                    return
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
                    return
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
                    return
                }
               
               })}
               
            </Grid2>
            <Grid2>
                <Button
                onClick={submitPreferences}
                variant="contained">find my destinations! ✈️</Button>
            </Grid2>


        </Grid2>

        </>
    )
}

export default Features;