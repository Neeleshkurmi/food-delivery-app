import './App.css';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { darkTheme } from './Theme/DarkTheme';
import { CustomerRoute } from './Routes/CustomerRoute';
import AdminRoute from './Routes/AdminRoute';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from './State/Authentication/Action';


function App() {
  const dispatch=useDispatch()
  const jwt = localStorage.getItem("jwt")
  const {auth}=useSelector(store=>store)

  useEffect(()=>{
    dispatch(getUser(auth.jwt || jwt))
  },[auth.jwt, dispatch, jwt])
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
      <CustomerRoute/>
    {/* {auth.user?.role==="ROLE_ADMIN" || auth.user?.role==="ROLE_RESTAURANT_OWNER" 
    ? <AdminRoute/> : <CustomerRoute/>} */}
    </ThemeProvider>
  );
}

export default App;
