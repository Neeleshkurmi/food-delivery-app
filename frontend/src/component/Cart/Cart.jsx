import React, { useEffect } from 'react'
import { Divider, TextField } from '@mui/material'
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import Box from '@mui/material/Box';
import { Card , Button, Modal,Grid} from '@mui/material';
import CartItem from './CartItem'
import { AddressCard } from './AddressCard'
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { findCart } from '../../State/Cart/action';
// import * as yup from 'yup';

export const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  outline:"none",
  boxShadow: 24,
  p: 4,
}; 

const initialValues={
    streetAddress:"",
    state:"",
    pincode:"",
    city:""
}
// const validationSchema=yup.object().shape({
//     streetAddress:yup.string().required("Street address is required"),
//     state:yup.string().required("state name is required"),
//     pincode:yup.string().required("pincode is required"),
//     city:yup.string().required("city name is required")
// })

const handleSubmit=(values) => {
    console.log("form value ",values)
};

const Cart = () => {
    const dispatch = useDispatch();
    const {cart} = useSelector(store=>store);
    const createOrderUsingSelectedAddress=() =>{};
    const handleOpenAddressModal=()=>setOpen(true);
    const [open, setOpen] = React.useState(false);

    const handleClose = () => setOpen(false);

    useEffect(()=>{
        dispatch(findCart(localStorage.getItem("jwt")))
    },[cart.cartItems])

  return (
    <>
        <main className='lg:flex justify-between'>
            
            <section className='lg:w-[30%] space-y-6 lg:min-h-screen pt-10'>
                {cart.cartItems.map((item)=><CartItem item={item}/>)}
                <Divider/>
            <div className="billDetails px-5 text-sm">
                <p className="font-extralight py-5 ">Bill Details</p>
                <div className="space-y-3">
                    <div className="flex justify-between text-gray-400">
                        <p>Item Total</p>
                        <p>₹{cart.cart?.total}</p>
                    </div>
                    <div className="flex justify-between text-gray-400">
                        <p>Deliver Fee</p>
                        <p>₹21</p>
                    </div>
                    <div className="flex justify-between text-gray-400">
                        <p>Platform Fee</p>
                        <p>₹2</p>
                    </div>
                    <div className="flex justify-between text-gray-400">
                        <p>GST & Restaurant Charges</p>
                        <p>₹32</p>
                    </div>
                    <Divider/>
                </div>
                <div className="flex justify-between text-gray-400 py-3">
                    <p>Total pay</p>
                    <p>₹{cart.cart?.total+21+2+32}</p>
                </div>
            </div>
            </section>
            <Divider orientation="vertical" flexItem/>
            <section className="lg:w-[70%] flex justify-center px-5 pb-10 lg:pb-0 ">
                <div>
                    <h1 className="text-center font-semibold text-2xl py-10">
                        Choose Delivery Address
                    </h1>
                    <div className="flex gap-5 flex-wrap justify-center">
                        {[1,1,1,1,1].map((item)=>(
                        <AddressCard handleSelectAddress={createOrderUsingSelectedAddress} item={item} showButton={true} />
                        ))}
                        <Card className="flex gap-5 w-64 p-5">
        <AddLocationAltIcon/ >
        <div className="space-y-3 text-gray-500">
            <h1 className='font-semibold text-lg text-white'>
                Add New Address
            </h1>
            <Button variant="outlined" fullWidth onClick={handleOpenAddressModal}>
                Add
            </Button>
        </div>
    </Card>
                    </div>
                </div>
            </section>
        </main>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Box sx={style}>
                <Formik initialValues={initialValues}
                onSubmit={handleSubmit}
                // validationSchema={validationSchema}
                >
                    <Form>
                    <Grid container spacing={2}>
                        <Grid item sx ={12}>
                            <Field
                            as={TextField}
                            name="streetAddress"
                            label="Street Address"
                            fullWidth
                            variant="outlined"
                            // error = {!ErrorMessage("streetAddress")}
                            // helperText={
                            //     <ErrorMessage>
                            //         {(msg)=> <span className="text-red-600">{msg}</span>}
                            //     </ErrorMessage>
                            // }
                            />

                        </Grid>
                        <Grid item sx ={12}>
                            <Field
                            as={TextField}
                            name="state"
                            label="state name"
                            fullWidth
                            variant="outlined"
                            // error = {!ErrorMessage("streetAddress")}
                            // helperText={
                            //     <ErrorMessage>
                            //         {(msg)=> <span className="text-red-600">{msg}</span>}
                            //     </ErrorMessage>
                            // }
                            />

                        </Grid>
                        <Grid item sx ={12}>
                            <Field
                            as={TextField}
                            name="pincode"
                            label="pincode"
                            fullWidth
                            variant="outlined"
                            // error = {!ErrorMessage("streetAddress")}
                            // helperText={
                            //     <ErrorMessage>
                            //         {(msg)=> <span className="text-red-600">{msg}</span>}
                            //     </ErrorMessage>
                            // }
                            />

                        </Grid>
                        <Grid item sx ={12}>
                            <Field
                            as={TextField}
                            name="city name"
                            label="city name"
                            fullWidth
                            variant="outlined"
                            // error = {!ErrorMessage("streetAddress")}
                            // helperText={
                            //     <ErrorMessage>
                            //         {(msg)=> <span className="text-red-600">{msg}</span>}
                            //     </ErrorMessage>
                            // }
                            />
                        </Grid>
                        <Grid item xs={12}> 
                            <Button variant="outlined" type="submit" color="primary">DELIVER HERE</Button>
                        </Grid>
                    </Grid>
                    </Form>
                </Formik>
            </Box>
        </Modal>
    </>
  )
}

export default Cart
