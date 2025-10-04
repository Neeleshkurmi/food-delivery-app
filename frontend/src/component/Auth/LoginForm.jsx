import { Button, TextField, Typography, Snackbar, Alert } from '@mui/material'
import { Field, Form, Formik } from 'formik'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { loginUser, clearSuccessMessage } from '../../State/Authentication/Action'
const initialValues = {
  email:"",
  password:"",
}
export const LoginForm = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { success } = useSelector(state => state.auth);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  useEffect(() => {
    if (success) {
      setOpenSnackbar(true);
    }
  }, [success]);

  const handleSubmit =(values) =>{
    dispatch(loginUser({userData:values,navigate}))
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
          Login
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
          Login successful! Welcome back.
        </Alert>
      </Snackbar>
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        <Form>
          
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
          <Button sx={{mt:2 , padding:"1rem"}} fullWidth type='submit' variant='contained'>Login</Button>
        </Form>
        
      </Formik>
      <Typography variant='body2'align='center' sx={{mt:3}}>
          Don't have an account?
        <Button size='small' onClick={()=>navigate("/account/register")}>
          register
        </Button>
      </Typography>
        
    </div>
  )
}
