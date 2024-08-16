import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';

export const ListCategory = ({ handleClick }) => {
    const categories = useSelector((state) => state.categorySlice.categories);
    const { id } = useParams();
    return (
        <div className='flex flex-col gap-2 bg-gray-100  rounded px-2 py-3'>
            {categories.map((item, index) => (
                <div className={`p-1 cursor-pointer hover:underline
                 ${id === item.slug
                        ? 'bg-red-500 text-white rounded-md'
                        : ''}`}
                    key={index}
                    onClick={() => handleClick(item.slug, item.name)}
                >
                    {item.name}
                </div>
            ))}
        </div>
    )
}
