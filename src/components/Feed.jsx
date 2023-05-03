import React from 'react'
import {Box,Stack,Typography} from '@mui/material'
import { SideBar } from './SideBar'
import { Videos } from './Videos'
import { FetchData } from '../utilities/FetchData'

// import axios from 'axios'

export const Feed = () => {

    const [ selectedCat, setSelectedCat] = React.useState('New')
    const [video, setVideo] = React.useState([]);
        
    React.useEffect(()=>{
        FetchData(`search?q=${selectedCat}&part='snippet,id'`).then(data=>{
            // console.log(data)
            setVideo(data.items)
        })


    },[selectedCat])


    
    
  return (
        <Stack sx={{
            flexDirection:{
                md:'row',
                xs:'column'
            },
        
            
        }}>
            <Box sx={{
                height:{
                    xs: 'auto',
                    md: '97vh'
                },
                borderRight: '3px solid #2e2e2e',
                px:{
                    sm: 0,
                    md: 2
                },
                
                }}>
               <SideBar selectedCat ={selectedCat} setSelectedCat={setSelectedCat}  />
                <Typography variant='body2' className='copyright' sx={{mt:1.5}}>
                    CopyRight 2022 @Wilson
                </Typography>
                
            </Box> 
            <Box p={2} sx={{
                overflowY:'auto',
                height:'90vh',
                

            }}>
                <Typography variant='h3' fontWeight= 'bold' sx={{color: 'white'}}>
                    {selectedCat} <span style={{color: '#fc1508'}}>Videos</span>
                </Typography>
                
                <Videos videos={video} selectedCat={selectedCat} />
            </Box>

                
        </Stack>
  )
}
