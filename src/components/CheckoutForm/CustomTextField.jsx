import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import { TextField, Grid } from '@material-ui/core';

function FormInput({ name, label, required }) {
  const { control } = useFormContext();
  

  return (
    <Grid item xs={12} sm={6}>
      <Controller
        control={control}
        fullWidth
        name={name}
        render={({ field: { onChange, value } })=>(
          <TextField label={label} required={required} value={value} onChange={onChange} />  
          
        )}
        defaultValue=""
      />
    </Grid>
  );
}

export default FormInput;