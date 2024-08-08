import React from 'react'
import { Link, useParams } from 'react-router-dom'
import LoadingBackdrop from '../loading/LoadingBackdrop';
import { Rating } from '@mui/material';

export const ListProByCate = ({ listCategories, isLoading }) => {
    const { id } = useParams();

    return (
        <div>
            {isLoading ? (
                <div className='max-w-[1200px] flex justify-center items-center'>
                    <LoadingBackdrop isLoading={isLoading} />
                </div>
            )
                : (
                    <div>
                        <h1 className='uppercase p-2 font-bold w-full'>{id}</h1>
                        <ul className='flex flex-wrap gap-3 justify-between mt-3'>
                            {listCategories.map((product) => (
                                <Link to={`/product/${product.id}`}>
                                    <li className='bg-white w-[220px] cursor-pointer border relative hover:scale-[1.02] 
                                    ease-in duration-200 hover:border-red-600 rounded-2xl py-3'>
                                        <img src={product.thumbnail} alt={product.title} className='w-full border-b-2 rounded-2xl' />
                                    </li>
                                    <span className='absolute top-2 left-0'>
                                        <img
                                            src="https://down-vn.img.susercontent.com/file/76c36bd87ff2eb5887d9ad3516111869"
                                            alt=""
                                            className="w-[50px]"
                                        />
                                    </span>
                                    <div className='px-3 h-[140px] flex flex-col justify-center'>
                                        <h2 className='font-bold flex gap-2 items-center'>{product.title}
                                            <span className='bg-slate-100 font-normal p-1 rounded-md'>{product.category}</span>

                                        </h2>
                                        <h3 className='text-red-500'>{Math.ceil(product.price)}$</h3>
                                        <div className='flex items-center'>
                                            <p className='text-base'>
                                                <Rating
                                                    name='half-rating-read'
                                                    sx={{ fontSize: 14 }}
                                                    defaultValue={product.rating}
                                                    precision={0.5}
                                                    readOnly
                                                />
                                            </p>
                                            <p>Đã bán: {product.stock}</p>
                                        </div>
                                    </div>
                                </Link>
                            ))

                            }
                        </ul>
                    </div>
                )}
        </div>
    )
}
