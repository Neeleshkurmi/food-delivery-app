import { Button, Card } from '@mui/material'
import React from 'react'

export const OrderCard = () => {
  return (
    <Card className='flex justify-between items-center p-5'>
        <div className='flex items-center space-x-5'>
            <img 
            className='h-16 w-16'
            src="https://media.istockphoto.com/id/998309062/photo/burger-with-beef-and-cheese.jpg?s=1024x1024&w=is&k=20&c=8dsV5BdPbebUGFkWuFenRKeaOe95BEnlcRkPqEo6PxA="
            alt=""
            />
            <div>
                <p>Burger</p>
                <p>₹233</p>
            </div>
        </div>
        <div>
            <Button className='cursor-not-allowed'>
                Completed
            </Button>
        </div>
    </Card>
  )
}
