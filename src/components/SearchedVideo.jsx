import {useState, useEffect} from 'react'
import { Link, useParams} from 'react-router-dom'
import ReactPlayer from 'react-player'
import { Box, Stack, Typography } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { FetchData } from '../utilities/FetchData'
import { Videos } from './Videos'

export const SearchedVideo = () => {
  
  const [videoDetail, setvideoDetail] = useState(null);
  const [videos, setvideos] = useState(null)

  const {id} = useParams()
  

  useEffect(()=>{
    
      FetchData(`videos?part=contentDetails,snippet,statistics&id=${id}`).then((data)=> {
          return setvideoDetail(data.items[0])
      })

      FetchData(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(res => {
        return setvideos(res.items)
      })
      
      /*FetchData(`channels?part=snippet&id=${id}`).then((data)=>(
          setchannelDetails(data.items)
      )).catch(e => console.log(e))*/

      
  },[id])



  let Title 
  let ChannelId
  let ChannelTitle
  let ViewCount
  let LikeCount

  try {
    if (videoDetail && videoDetail.snippet) {
      const {snippet:{title, channelId, channelTitle}, statistics:{ viewCount, likeCount }} = videoDetail
      Title = title
      ChannelId = channelId
      ChannelTitle = channelTitle
      ViewCount = viewCount
      LikeCount = likeCount
    }
  } catch (error) {
    console.log(`${error.message}`)
  }
  

  // console.log(channelDetails)
  // console.log(videoDetail.snippet)
  
  
  return (
    <Box minHeight={'100vh'}>

      <Stack direction={{xs: 'column',md: 'row'}}>
          <Box flex={1}>
            <Box sx={{width: '100%', position: 'sticky'}} >
                <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} controls className='react-player' />
                <Typography variant='h5' color= 'white' fontSize={'20px'} py={1} px={2 } >
                  {Title}
                </Typography>
                <Stack direction={'row'} justifyContent='space-between' color={'#fff'} >
                  <Link to={`/channel/${ChannelId}`}>
                      <Typography variant={{sm:'subtitle1' , md: 'h5'}} color='#fff' sx={{ marginLeft: '7px'}}>
                        {ChannelTitle}
                        <CheckCircle sx={{color: 'red' , fontSize: '13px', marginLeft: '7px'}} />
                      </Typography>
                  </Link>
                  <Stack direction={'row'} gap='20px' alignItems={'center'}>
                    <Typography variant='body1'>
                      {parseInt(ViewCount).toLocaleString()} views
                    </Typography>
                    <Typography variant='body1'>
                      {parseInt(LikeCount).toLocaleString()} likes
                    </Typography>
                  </Stack>
                </Stack>
            </Box>
          </Box>
          <Box px={2} py={{xs:5,md:1}} justifyContent='center' alignItems={'center'}>
            <Videos videos={videos} direction='column'/>
          </Box>
      </Stack>

      

    </Box>
  )
}
