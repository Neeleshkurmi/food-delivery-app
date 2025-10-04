import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import { Card , Button} from '@mui/material';

export const AddressCard = ({item,showButton, handleSelectAddress}) => {
  return (
    <Card className="flex gap-5 w-64 p-5">
        <HomeIcon/>
        <div className="space-y-3 text-gray-500">
            <h1 className='font-semibold text-lg text-white'>
                Home
            </h1>
            <p>
                Bhopal, near maratha mandir JP colony, 462022, Madhya Pradesh, India
            </p>
            {showButton && 
            <Button variant="outlined" fullWidth onClick={()=>handleSelectAddress(item)}>
                select
            </Button>}
        </div>
    </Card>
  )
}
