import { Rating } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export const BoxProduct = ({ item }) => {
    return (
        <div>
            <Link to={`product/${item.id}`}>
                <li className='bg-white w-[225px] cursor-pointer border relative hover:scale[1.02] ease-in duration-200 hover:border-red-600 rounded-2xl py-3'>
                    <img src={item.thumbnail} alt={item.title} className='w-full border-b-2 rounded-2xl' />
                    <span className='absolute top-2 left-0'>
                        <img
                            src="https://down-vn.img.susercontent.com/file/76c36bd87ff2eb5887d9ad3516111869"
                            alt=""
                            className="w-[50px]"
                        />
                    </span>
                    <div className='px-3 h-[120px]'>
                        <h2 className=' flex gap-2 flex-row items-center'>
                            {item.title.length > 15 ? `${item.title.slice(0, 15)}${'...'}` : item.title}
                            {/* {"..."} */}

                        </h2>
                        <div className='flex items-center justify-between'>
                            <h3 className='text-red-500 text-xl'>{Math.ceil(item.price)}$</h3>

                            <span className='bg-slate-100 font-normal p-1 rounded-md'>{item.category}</span>
                        </div>
                        <div>
                            {/* {" "} */}
                            <p className='text-base'>
                                <Rating name="half-rating-read" defaultValue={item.rating} precision={0.5} readOnly />
                            </p>
                            <p>Đã bán: {item.stock}</p>
                            

                        </div>
                    </div>
                </li>
            </Link>
        </div>
    )
}
