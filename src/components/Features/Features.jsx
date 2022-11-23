import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2
import { Button } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import { FormControlLabel } from '@mui/material';
import { Dispatch, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import ButtonOutlined from '../ButtonOutlined/ButtonOutlined';
import ButtonFilled from '../ButtonFilled/ButtonFilled';

function Features() {

    const [international, setInternational] = useState(false);
    const [domestic, setDomestic] = useState(false);

    const history = useHistory();
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
        if (international === false && domestic === false){
            console.log('ALERT TEST)')
            alert('Please select your international and domestic preference!')
        }
        else if(international === true || domestic === true){
            console.log(`submitting preferences 🌴, 
            domestic: ${domestic}, 
            international: ${international},
            features: ${addedFeatures}
             `)
    
                dispatch({
                    type: 'SUBMIT_FEATURES',
                    data: {
                        domestic: domestic, 
                        international: international,
                        features: addedFeatures
                    }
    
                })
                history.push('/results')
        }
       

        

    }

    const isSelected = (featureId) => {
        for (let selected of addedFeatures) {
            if(selected.id === featureId){
                return true;
            }
        }
        return false;
    }
      
    const removeFeature = (featureId) => {
        dispatch({
            type: 'REMOVE_FEATURE',
            payload: featureId
           })
    }
    

    return (
       <div className='search-page'>

        <Grid2 
            container 
            spacing={2} 
            display="flex"
            direction="row"
            justifyContent="space-around">
            <Grid2 
                id="feature-1"
                display="flex"
                flexDirection="column"
                justifyContent="flex-start"
                alignContent="center">
                <h3 className="feature-header">who's going?</h3>
                {/* TODO on click change button color */}
               {features.map(feature => {
                if(feature.category_id === 1){
                    // return isSelected(feature.id) ? 
                    //         <ButtonFilled
                    //             feature={feature} />
                    //     :  
                    //        < ButtonOutlined
                    //             feature={feature} />
                    return(
                        <Button 
                        onClick={(event) => isSelected(feature.id) ? removeFeature(feature.id) : addFeatureId(feature)}
                        key={feature.id}
                        variant={isSelected(feature.id) ? "contained" : "outlined"}
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
            <Grid2
                id="feature-2"
                display="flex"
                flexDirection="column"
                justifyContent="flex-start"
                alignContent="center">
            <h3 className="feature-header">what surrounds you?</h3>
                {/* TODO on click change button to disabled*/}
                {features.map(feature => {
                if(feature.category_id === 2){
                    return(
                        <Button 
                        onClick={(event) => isSelected(feature.id) ? removeFeature(feature.id) : addFeatureId(feature)}
                        key={feature.id}
                        variant={isSelected(feature.id) ? "contained" : "outlined"}
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
            <Grid2
                id="feature-3"
                display="flex"
                flexDirection="column"
                justifyContent="flex-start"
                alignContent="center">
            <h3 className="feature-header">what are you up to?</h3>
                {features.map(feature => {
                if(feature.category_id === 3){
                        return(
                            <Button 
                            onClick={(event) => isSelected(feature.id) ? removeFeature(feature.id) : addFeatureId(feature)}
                            key={feature.id}
                            variant={isSelected(feature.id) ? "contained" : "outlined"}
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
            <Grid2
                id="feature-4"
                display="flex"
                flexDirection="column"
                justifyContent="flex-start"
                alignContent="center">
            <h3 className="feature-header">how do you have fun?</h3>
                {features.map(feature => {
                if(feature.category_id === 4){
                    return(
                        <Button 
                        onClick={(event) => isSelected(feature.id) ? removeFeature(feature.id) : addFeatureId(feature)}
                        key={feature.id}
                        variant={isSelected(feature.id) ? "contained" : "outlined"}
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
        </Grid2>

        <Grid2 
            xs={{m:5 }}
            container
            display="flex"
            justifyContent="space-between"
            alignItems="center"

        >
            <Grid2>
                <FormGroup 
                    id="checkbox-container"
                    container
                    display="flex"
                    justifyContent="center" 
                   

                    >
                    <FormControlLabel 
                    control={<Checkbox 
                                onChange={handleDomesticCheckbox} />} 
                    label="domestic (U.S.)" />
                    <FormControlLabel 
                    control={<Checkbox 
                                onChange={handleInternationalCheckbox} />} 
                    label="international" />
                </FormGroup>
                </Grid2>
                <Grid2 id="search-button">
                    <Button
                        onClick={submitPreferences}
                        variant="contained">find my destinations! ✈️
                    </Button>
                </Grid2>
        </Grid2>
            {/* <Grid2>
            <FormGroup 
                container
                display="flex"
                justifyContent="center" 

                >
                <FormControlLabel 
                control={<Checkbox 
                            onChange={handleDomesticCheckbox} />} 
                label="domestic (U.S.)" />
                <FormControlLabel 
                control={<Checkbox 
                            onChange={handleInternationalCheckbox} />} 
                label="international" />
            </FormGroup>
            </Grid2>
            <Grid2 id="search-button"
                    display="flex"
                    justifyContent="flex-end">
                <Button
                    
                    justifyContent="flex-end"
                    onClick={submitPreferences}
                    variant="contained">find my destinations! ✈️
                </Button>
            </Grid2> */}
        </div>
    )
}

export default Features;