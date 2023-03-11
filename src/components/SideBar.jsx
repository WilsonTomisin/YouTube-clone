import React from 'react';
import { Stack } from '@mui/system';
import {categories} from '../utilities/constants'

export const SideBar = () => {
    const selectedCat = 'New'
  return (
    <Stack direction={'row'}
    sx={{
        overflowY:'auto',
        height:{
            sx:'auto',
            md:'96%',
        },
        flexDirection:{
            md:'column',
        }
    }}>
        {categories.map((data,index)=>{
            return(
                <button key={index}
                className='category-btn'
                style={{
                    background: data.name == selectedCat && '#fc1508',
                    color:'#fff'
                }}>
                    <span style={{
                        marginRight:'15px',
                        color: data.name == selectedCat ? 'white': '#fc1508'
                    }}>{data.icon}</span>
                    <span style={{opacity: data.name ==selectedCat ? 1 : 0.5}}>{data.name}</span>
                </button>
            )
        })}
    </Stack>
  )
}
