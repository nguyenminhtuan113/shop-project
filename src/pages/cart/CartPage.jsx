import React, { useState } from 'react'
import { ListCartPage } from '../../components/listCart/ListCartPage';
import { CheckoutCart } from '../../components/listCart/CheckoutCart';

export const CartPage = () => {
    const [idProduct, setIdProduct] = useState([]);
    console.log(idProduct,'idpro')
    return (
        <div className='max-w-[1200px] mt-6 mx-auto rounded-sm'>
            <ListCartPage setId={(data) => {
                setIdProduct(data)
            }} />
            <CheckoutCart productCheck={idProduct}/>
        </div>
    )
}
