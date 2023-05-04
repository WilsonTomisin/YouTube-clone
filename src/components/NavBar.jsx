import React from 'react'
import { Paper, Stack } from '@mui/material'
import { Link } from 'react-router-dom'
import { logo } from '../utilities/constants'
import SearchBar from './SearchBar'


export const NavBar = () => {
  return (
    <Stack spacing={2} 
    p={2}
    direction= 'row' 
    justifyContent={'space-between'}
    sx={{position:'sticky'}}
    >
        <Link to={'/'}>
            <img src={logo} alt= 'logo' height={45}/>
        </Link>
        
        <SearchBar/>
    </Stack>
  )
}
