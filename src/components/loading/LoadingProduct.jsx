import React from 'react'
import { BeatLoader } from 'react-spinners'

export const LoadingProduct = () => {
    return (
        <div>
            <div className='flex justify-center items-center'>
                <BeatLoader color='#ea580c' size={19} />
            </div>
        </div>
    )
}
