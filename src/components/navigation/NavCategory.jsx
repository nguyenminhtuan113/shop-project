import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export const NavCategory = () => {
    const listCate = useSelector((state) => state.categorySlice.categories)

    // console.log(listCate, "listCate")
    return (
        <ul className='flex gap-5 p-2'>
            {listCate.slice(0, 5).map((cate, index) => (<li key={index} className='hover:text-gray-300 text-sm'><Link>{cate.name}</Link></li>))}

        </ul>
    )
}
