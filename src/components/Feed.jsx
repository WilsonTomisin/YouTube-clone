import React from 'react'
import {Box,Stack,Typography} from '@mui/material'
import { SideBar } from './SideBar'
import { Videos } from './Videos'

export const Feed = () => {
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
               <SideBar/>
                <Typography variant='body2' className='copyright' sx={{mt:1.5}}>

                    CopyRight 2022 @Wilson
                </Typography>
                
            </Box> 
            <Box p={2} sx={{
                overflowY:'auto',
                height:'90vh',

            }}>
                <Typography variant='h3' fontWeight= 'bold' sx={{color: 'white'}}>
                    New <span style={{color: '#fc1508'}}>Videos</span>
                </Typography>
                <Videos videos={[]}/>
            </Box>

                
        </Stack>
  )
}
