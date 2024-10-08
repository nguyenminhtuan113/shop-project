import React from 'react'
import { Link, useParams } from 'react-router-dom'
import HomeIcon from "@mui/icons-material/Home";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
export const NavigateCategory = () => {
    const { id } = useParams();
    return (
        <div className='bg-white mt-6'>
            <h1 className='flex items-center p-3 bg-slate-200  gap-1'>
                <Link to={'/'}>
                    <div className='flex items-center hover:underline'>
                        <HomeIcon />
                        Home
                        <NavigateNextIcon />
                    </div>
                </Link>
                <span>{id}</span>
            </h1>
        </div>
    )
}
