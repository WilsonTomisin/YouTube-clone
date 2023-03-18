import React from 'react'
import { Box, CardMedia,CardContent,Typography} from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { demoProfilePicture } from '../utilities/constants'
import { margin } from '@mui/system'

export const ChannelCard = ({video}) => {
  // console.log(video)
  return (
    <Box sx={{
      borderRadius: '20px',
      boxShadow: 'none',
      display: 'flex',
      justifyContent:'center',
      alignItems:'center',
      width:{
        xs:'356px',
        md: '310px'
      },
      margin: 'auto',
      
      }}>
      <Link to={`/channel/${video?.id?.channelId}`}>
        <CardContent sx={{display:'flex' , flexDirection:'column', justifyContent:'center', textAlign:'center', color:'#fff'}}>
          <CardMedia image={video?.snippet?.thumbnails?.high?.url} 
          sx={{width:180,
            height: 180,
            borderRadius: '50%'
           
           }}
           alt={video?.snippet?.title}/>
          <Typography variant='h6' color={'gray'} fontWeight='bold' mt={'10px'}>
              {video?.snippet?.title}
              <CheckCircle sx={{fontSize:'15px', color:'turquoise', ml:'5px'}}/>
          </Typography>
          {video?.statistics?.subscriberCount &&
          <Typography>
            {parseInt(video?.statistics?.subscriberCount).toLocaleString()} Subscribers
          </Typography>}
        </CardContent>
      </Link>
    </Box>
  )
}
