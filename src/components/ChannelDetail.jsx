import React, { useState } from 'react';
import { Box } from '@mui/material';
import { useParams } from 'react-router-dom';
import { ChannelCard } from './ChannelCard';
import { Videos } from './Videos';
import { FetchData } from '../utilities/FetchData';


export const ChannelDetail = () => {
  const { id } = useParams();
  const [channelDetail , setChannelDetail] = React.useState(null)
  const [video, setVideo] = React.useState([])
  console.log(id)

  console.log(video, channelDetail)
  React.useEffect(()=>{
    
      FetchData(`channels?id=${id}`).then((data)=>(
        setChannelDetail(data.items[0])
      ))
      FetchData(`search?part=snippet&id=${id}`).then((data)=>(
        setVideo(data.items)
      ))
    
  },[id])

  return (
    <Box minHeight={'95vh'}>
      <Box>
        <div  
        style={{
          background: 'rgb(0,0,0)',
          background: 'linear-gradient(350deg, rgba(0,0,0,1) 0%, rgba(235,7,34,1) 96%)',
          textAlign: 'center',
          fontSize:'35px',
          height:'400px',
          zIndex:10,
          margin: 'auto',
          fontFamily:'cursive'
        }}>
          {channelDetail?.snippet?.title}
        </div>
        <ChannelCard ChannelDetail={channelDetail} marginTop= '-100px'/>
        <Box display={'flex'} p={2}>
            <Box>
              <Videos videos={video}/>
            </Box>

        </Box>
      </Box>
    </Box>
  )
}
