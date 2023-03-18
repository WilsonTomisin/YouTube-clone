import React from 'react';
import { Box } from '@mui/material';
import { useParams } from 'react-router-dom';
import { ChannelCard } from './ChannelCard';
import { Videos } from './Videos';
import { FetchData } from '../utilities/FetchData';

export const ChannelDetail = () => {
  const { id } = useParams();
  const [channelDetail , setChannelDetail] = React.useState(null)

  React.useEffect(()=>{
    return(
      FetchData(`channels?id=${id}`).then((data)=>{
        return(
          console.log(data),
          setChannelDetail(data.items[0])
        )
      })
    )
  },[id])

  return (
    <Box>
      
      {id}
    </Box>
  )
}
