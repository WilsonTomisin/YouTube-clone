import React from 'react'
import { Typography, Box } from '@mui/material'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { SearchedVideo } from './components/SearchedVideo'
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
            <Route path='/search/:searchTerm' element={<SearchFeed/>}/>
            <Route path='/search/:searchTerm/video/:id' element={<SearchedVideo/>} />
          </Routes>

        </Box>

    </BrowserRouter>
  )
}
