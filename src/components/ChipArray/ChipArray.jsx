import {  Chip } from '@mui/material';
import {useDispatch, useSelector } from 'react-redux';

function ChipArray({ feature }) {
    const selectedFeatures = useSelector(store => store.addFeatureReducer)

    const dispatch = useDispatch();
    //on click of chip delete from selected feature array
    const handleDelete = () => {
       dispatch({
        type: 'REMOVE_FEATURE',
        payload: feature.id
       })
    }
    //selected features display as chips
    return(
        <Chip 
            key={feature.id}
            label={feature.name}
            value={feature.id}
            variant="outlined"
            onDelete={handleDelete}
        />
    )
}

export default ChipArray;