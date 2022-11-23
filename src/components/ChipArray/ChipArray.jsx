import {  Chip } from '@mui/material';
import {useDispatch, useSelector } from 'react-redux';

function ChipArray({ feature }) {
    const selectedFeatures = useSelector(store => store.addFeatureReducer)

    const dispatch = useDispatch();
    const handleDelete = () => {
       dispatch({
        type: 'REMOVE_FEATURE',
        payload: feature.id
       })
    }

 console.log('👁️👄👁️feature is', feature)
    return(
        <Chip 
            key={feature.id}
            label={feature.name}
            value={feature.id}
            variant="outlined"
            onDelete={handleDelete}
            //onDelete={(event) => handleDelete(event.target.value)}
        />
    )
}

export default ChipArray;