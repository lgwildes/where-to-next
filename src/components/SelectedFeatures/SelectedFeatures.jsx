import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { IconButton, Chip } from '@mui/material';

function SelectedFeatures() {
    const dispatch = useDispatch();
    const selectedFeatures = useSelector(store => store.addFeatureReducer)
    const features = useSelector(store => store.featureReducer)
    
    selectedFeatures.map(selected => {
        features.map( feature => {
            if(selected === feature ) {

            }
        })
    })

    if(selectedFeatures) {
        return (
            <>
            {/* {JSON.stringify(features)} */}
            {/* key and label */}
           { selectedFeatures.map(feature => {
                return(
                    <Chip key={feature}
                        label={feature}/>
                )
           
           })}
            
            </>
        )
    }
    
  
   
}

export default SelectedFeatures;