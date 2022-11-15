import React from 'react';
import {useSelector} from 'react-redux';
import { useState } from 'react';

// import MUI elements
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import { FormControlLabel } from '@mui/material';

function International() {

  const [international, setInternational] = useState('FALSE');
  const [domestic, setdomestic] = useState('FALSE');

  return (
    <div>
         <FormGroup>
            <FormControlLabel 
            control={<Checkbox  />} 
            label="domestic (U.S.)" />
            <FormControlLabel 
            control={<Checkbox  />} 
            label="international" />
         </FormGroup>
    </div>
  )
}

export default International;