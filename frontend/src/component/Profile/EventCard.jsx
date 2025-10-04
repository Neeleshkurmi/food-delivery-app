import { Card, CardActions, CardContent, CardMedia, IconButton, Typography } from '@mui/material'
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';

export const EventCard = () => {
  return (
    <div>
        <Card sx={{width:345}}>
            <CardMedia
            sx={{height:245}}
            image='https://cdn.pixabay.com/photo/2023/12/26/11/46/cake-8470012_1280.jpg'/>

            <CardContent>
                <Typography variant='h5' >
                    Indian Fast Food
                </Typography>
                  <Typography variant='body2' >
                    67% off on your first order and cna become the lucky one to get the ticket of malesia
                </Typography>
                <div className='py-2 space-y-2'>
                    <p>{"mumbai"}</p>
                    <p className='text-sm text-blue-500'>Jan 12, 2025 12:00 AM</p>
                    <p className='text-sm text-red-500'>Jan 27, 2025 12:00 AM</p>
                </div>
            </CardContent>
            {true && <CardActions>
                <IconButton>
                    <DeleteIcon/>
                </IconButton>
            </CardActions>}
        </Card>
    </div>
  )
}
