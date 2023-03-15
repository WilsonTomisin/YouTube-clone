import React from 'react'
import { Router } from 'react-router-dom'
import { Typography,Card,CardContent, CardMedia } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { demoThumbnailUrl,demoChannelTitle,demoChannelUrl,demoProfilePicture,demoVideoUrl, demoVideoTitle } from '../utilities/constants'

export const VideoCard = ({video:{ id: { videoId }, snippet}}) => {
    console.log(videoId, snippet)
  return (
    <div>VideoCard</div>
  )
}
