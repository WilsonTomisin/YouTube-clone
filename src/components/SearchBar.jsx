import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Paper } from '@mui/material'
import {IconButton} from '@mui/material'
import { Search } from '@mui/icons-material'


const SearchBar = () => {
    const [searchTerm, setSearchTerm] = React.useState("")
    const navigate = useNavigate()
    
    function handleSubmit(event) {
        event.preventDefault()
        if (searchTerm) {
            navigate(`/search/${searchTerm}`)
            console.log(searchTerm)
            setSearchTerm('')
        }
    }
  return (
    <Paper component={'form'} onSubmit={handleSubmit}
    sx={{
        borderRadius:'20px',
        mr:{sm: 2},
        border:'1px solid #e3e3e3',
        paddingLeft:'10px',
        paddingTop: '5px',
        
    }}>
        <input className='search-bar' name="" id="" value={searchTerm} placeholder='search...'
        onChange={(e)=>{
            e.preventDefault()
            setSearchTerm(e.target.value)
        }}
        style={{fontSize:'20px'}} />
        <IconButton type='submit'
        sx={{
            color: 'red',

        }}>
            <Search/>
        </IconButton>
    </Paper>
  )
}

export default SearchBar
