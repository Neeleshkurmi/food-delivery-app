import { Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography, Snackbar, Alert } from '@mui/material'
import { Field, Form, Formik } from 'formik'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { registerUser, clearSuccessMessage } from '../../State/Authentication/Action'
import { useDispatch, useSelector } from 'react-redux'

const initialValues = {
  fullName:"",
  email:"",
  password:"",
  role:"ROLE_CUSTOMER"
}

export const RegisterFrom = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { success } = useSelector(state => state.auth);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  useEffect(() => {
    if (success) {
      setOpenSnackbar(true);
    }
  }, [success]);

  const handleSubmit =(values) =>{
    console.log("form values ", values)
    dispatch(registerUser({userData:values,navigate}))
  }
  
  const handleCloseSnackbar = () => {
      setOpenSnackbar(false);
      dispatch(clearSuccessMessage());
    };
    
    // Clear success message on component unmount
    useEffect(() => {
      return () => {
        if (success) {
          dispatch(clearSuccessMessage());
        }
      };
    }, [success, dispatch]);
    
    return (
       <div>
      <Typography variant='h5' className='text-center'>
          Register
      </Typography>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="success"
          sx={{ width: '100%' }}
        >
          Registration successful! You can now login.
        </Alert>
      </Snackbar>
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        <Form>
           <Field
          as  = {TextField}
          name="fullName"
          label="fullName"
          fullWidth
          variant= "outlined"
          margin="normal"
          />
          
          <Field
          as  = {TextField}
          name="email"
          label="email"
          fullWidth
          variant= "outlined"
          margin="normal"
          />
          <Field
          as  = {TextField}
          name="password"
          label="password"
          fullWidth
          variant= "outlined"
          margin="normal"
          />
          
          <FormControl fullWidth margin="normal">
            <InputLabel id="role-select-label">Role</InputLabel>
            <Field
              as={Select}
              name="role"
              labelId="role-select-label"
              label="Role"
              defaultValue="ROLE_CUSTOMER"
            >
              <MenuItem value={"ROLE_CUSTOMER"}>Customer</MenuItem>
              <MenuItem value={"ROLE_RESTAURANT_OWNER"}>Restaurant Owner</MenuItem>
            </Field>
          </FormControl>
          
          <Button sx={{mt:2 , padding:"1rem"}} fullWidth type='submit' variant='contained'>Register</Button>
        </Form>
        
      </Formik>
      <Typography variant='body2'align='center' sx={{mt:3}}>
          Already have an account
        <Button size='small' onClick={()=>navigate("/account/login")}>
          Login
        </Button>
      </Typography>
        
    </div>
  )
}
