import React from 'react'
import {Box,Typography} from '@mui/material'
import { Videos } from './Videos'
import { FetchData } from '../utilities/FetchData'
import { useParams } from 'react-router-dom'


export const SearchFeed = () => {

    
    const [video, setVideo] = React.useState([]);
    const { searchTerm } = useParams()
        
    React.useEffect(()=>{
        FetchData(`search?q=${searchTerm}&part='snippet,id'`).then(data=>{
            setVideo(data.items)
        })


    },[searchTerm])


    
    
  return (
    <Box p={2} sx={{
        overflowY:'auto',
        height:'90vh',
    }}>
      <Typography variant='h3' fontWeight= 'bold' sx={{color: 'white'}}>
          Search results for:  <span style={{color: '#fc1508'}}>{searchTerm}</span>
      </Typography>
                
      <Videos videos={video}/>
    </Box>

                
      
  )
}
