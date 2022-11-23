import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { IconButton, Chip } from '@mui/material';
import ChipArray from '../ChipArray/ChipArray';

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
           { selectedFeatures.map(feature => {
            return(
                <ChipArray
                feature={feature} />
            )
                    
           })}
            
            </>
        )
    }
    
  
   
}

export default SelectedFeatures;