import React from 'react'
import { Stack,Box } from '@mui/material'
import { VideoCard } from './VideoCard'
import { ChannelCard } from './ChannelCard'


export const Videos = ({videos,selectedCat}) => {
  
  return (
    <Stack direction={'row'} justifyContent={'start'} flexWrap={'wrap'} gap={2}>
      
      {videos.map((item, index)=>{
         return(
          <Box key={index}>
            {item.id.videoId && <VideoCard video={item}/>}
            {item.id.channelId && <ChannelCard ChannelDetail={item}/>}
          </Box>

         )
      })}
      
    </Stack>
  )
}
