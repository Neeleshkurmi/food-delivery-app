import React from 'react'
import { AddressCard } from '../Cart/AddressCard'
import { Button, Card } from '@mui/material'
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
const Address = () => {
  const handleOpenAddressModal = () => {

  }
  return (
    <div>
      <h1 className='py-5 text-xl font-semibold text-center'>My Addresses</h1>
      <div className='flex gap-5 flex-wrap justify-center'>
        {[1,1,1,1].map((item)=><AddressCard item={item}/>)}
        <Card className="flex gap-5 w-64 p-5 justify-center items-center">
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
  )
}

export default Address
