import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Link } from 'react-router-dom';
export const NavigateProductPage = ({ title }) => {
    return (
        <div>
            <h1 className='px-3 py-2 bg-white mb-3 flex flex-row rounded-md'>
            <Link to={'/'} className='hover:underline '>
                <HomeIcon /> Home
            </Link>
            <NavigateNextIcon /> {title}
            </h1>
            
        </div>
    )
}
