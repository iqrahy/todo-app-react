import { Box, Button, TextField, Typography } from '@mui/material';
import React from 'react'

const ToDo = () => {
  return (
    <Box sx={{height:"100vh"}} className='text-center'>

      <Box>
        <Typography className='mt-5' variant='h4'>ToDo App</Typography>
        <Box className="d-flex justify-content-center align-items-center mt-5" >
        <TextField sx={{width:"20%"}} id="standard-basic" label="Add Todo" variant="standard"  />
        <Button variant="outlined" className='mt-3 ms-3'>Add</Button>
        </Box>
      </Box>

      <Box></Box>

    </Box>
  )
}

export default ToDo;