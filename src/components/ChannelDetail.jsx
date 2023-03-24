import React from 'react';
import { Box } from '@mui/material';
import { useParams } from 'react-router-dom';
import { ChannelCard } from './ChannelCard';
import { Videos } from './Videos';
import { FetchData } from '../utilities/FetchData';


export const ChannelDetail = () => {
  const { id } = useParams();
  const [channelDetail , setChannelDetail] = React.useState(null)
  const [channelVideo, setChannelVideo] = React.useState([])
  console.log(channelDetail)
  
  React.useEffect(()=>{
    
      FetchData(`channels?part=snippet&id=${id}`).then((data)=>(
        setChannelDetail(data.items[0])
      ))
      FetchData(`search?channelId=${id}&part=snippet,id`).then((data)=>(
        setChannelVideo(data.items)
        
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
        }}/>
          {/* {channelDetail?.snippet?.title} */}
        
        <ChannelCard ChannelDetail={channelDetail} marginTop= '-100px'/>
        <Box display={'flex'} p={2}>
            <Box sx={{mr:{sm: '100px'}}}/>
              <Videos  videos={channelVideo}/>
            

        </Box>
      </Box>
    </Box>
  )
}
