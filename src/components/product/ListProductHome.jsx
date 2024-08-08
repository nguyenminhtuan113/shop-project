import React from 'react'
import { useSelector } from 'react-redux'
import LoadingPulsate from "../loading/LoadingPulsate";
import { BoxProduct } from '../box/BoxProduct';
export const ListProductHome = ({ isLoading }) => {
    const products = useSelector((state) => state.productSlice.products);

    return (
        <div className='max-w-[1200px] mx-auto my-7'>
            <div className="flex flex-col gap-2 mt-10">
                <div className="bg-white py-5 border-b-4 border-solid border-3 border-orange-500 rounded-md flex justify-center items-center">
                    <h1 className="uppercase font-bold text-red-600">Gợi ý hôm nay</h1>
                </div>
                <div className='flex flex-row mt-2 p-2'>
                    {isLoading ? (
                        <div className='max-w-[1200px] m-auto'>
                            {" "}
                            <LoadingPulsate />
                        </div>
                    ) : (
                        <ul className='flex flex-row flex-wrap gap-3 justify-around'>
                            {
                                products && products.length ? products.map((item) => (
                                    <BoxProduct key={item.id} item={item} />))
                                    : null
                            }
                        </ul>
                    )

                    }
                </div>
            </div>

        </div>
    )
}
