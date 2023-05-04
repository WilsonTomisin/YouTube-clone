import React from 'react'
import { Box, CardMedia,CardContent,Typography} from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { demoProfilePicture } from '../utilities/constants'


export const ChannelCard = ({ChannelDetail, marginTop}) => {

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
      marginTop: marginTop
      
      }}>
      <Link to={`/channel/${ChannelDetail?.id?.channelId}`}>
        <CardContent sx={{display:'flex' , flexDirection:'column', justifyContent:'center', textAlign:'center', color:'#fff'}}>
          <CardMedia image={ChannelDetail?.snippet?.thumbnails?.high?.url} 
          sx={{width:180,
            height: 180,
            borderRadius: '50%'
           
           }}
           alt={ChannelDetail?.snippet?.title}/>
          <Typography variant='h6' color={'gray'} fontWeight='bold' mt={'10px'}>
              {ChannelDetail?.snippet?.title}
              <CheckCircle sx={{fontSize:'15px', color:'turquoise', ml:'5px'}}/>
          </Typography>
          {ChannelDetail?.statistics?.subscriberCount &&
          <Typography variant='h6' color={'#fff'}>
            {parseInt(ChannelDetail?.statistics?.subscriberCount).toLocaleString()} Subscribers
          </Typography>}
        </CardContent>
      </Link>
    </Box>
  )
}
