import React from 'react'
import { Router, Link } from 'react-router-dom'
import { Typography,Card,CardContent, CardMedia } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { demoThumbnailUrl,demoChannelTitle,demoChannelUrl,demoProfilePicture,demoVideoUrl, demoVideoTitle } from '../utilities/constants'

export const VideoCard = ({video:{ id: { videoId }, snippet}}) => {
  
  return (
    <Card sx={{width:{
      md: '320px',
      xs: '100%'
    }}}>
        <Link to={videoId ? `video/${videoId}` : demoVideoUrl}>
          <CardMedia image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
          alt ={snippet?.title} 
          sx={{width :'100%', height: 180}}/>
        </Link>
        <CardContent sx={{backgroundColor: '#1e1e1e',width: '100%'}}>
            <Link to={videoId ? `video/${videoId}` : demoVideoUrl}>
              <Typography variant='subtitle1' color={'#fff'} fontWeight='bold'>
                  {snippet?.title.slice(0,60) || demoVideoTitle.slice(0,50)}
              </Typography>
            </Link>
            <Link to={snippet?.channelId ? `channel/${snippet.channelId}` : demoChannelUrl}>
              <Typography variant='subtitle2' color={'gray'} fontWeight='bold'>
                  {snippet?.channelTitle}
                  <CheckCircle sx={{fontSize:'12px', color:'gray', ml:'5px'}}/>
              </Typography>
            </Link>
        </CardContent>
    </Card>
  )
}
