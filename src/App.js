import React from 'react'
import { Typography, Box } from '@mui/material'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import { ChannelDetail } from './components/ChannelDetail'
import { SearchFeed } from './components/SearchFeed'
import { VideoDetail } from './components/VideoDetail'
import { Feed } from './components/Feed'
import { NavBar } from './components/NavBar'

export const App = () => {
  return (
    <BrowserRouter>
        <Box sx={{backgroundColor: '#000' ,color:'#fff'}}>
          <NavBar/>
          <Routes>
            <Route path='/' element={<Feed/>}/>
            <Route path='/video/:id' element={<VideoDetail/>}/>
            <Route path='/channel/:id' element={<ChannelDetail/>}/>
            <Route path='/search/:searchterm' element={<SearchFeed/>}/>
          </Routes>

        </Box>

    </BrowserRouter>
  )
}
