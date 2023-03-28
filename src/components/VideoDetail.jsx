import {useState, useEffect} from 'react'
import { Link, useParams} from 'react-router-dom'
import ReactPlayer from 'react-player'
import { Box, Stack, Typography } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { FetchData } from '../utilities/FetchData'

export const VideoDetail = () => {
  
  const [videoDetail, setvideoDetail] = useState(null);
  const {id} = useParams()
  

  useEffect(()=>{
    
          FetchData(`videos?part=contentDetails,snippet,statistics&id=${id}`).then((data)=>{
              return setvideoDetail(data.items[0])
          })

      
  },[id])

  // console.log(videoDetail)
  // console.log(videoDetail.snippet)
  const {snippet:{title, channelId, channelTitle}, statistics:{ viewCount, likeCount }} = videoDetail
  
  return (
    <Box minHeight={'100vh'}>

      <Stack direction={{xs: 'column',md: 'row'}}>
          <Box flex={1}>
            <Box sx={{width: '100%', position: 'sticky'}} >
                <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} controls />
                <Typography variant='h5' color= 'white' fontSize={'20px'}>
                  {title}
                </Typography>
            </Box>
          </Box>
      </Stack>

      

    </Box>
  )
}
