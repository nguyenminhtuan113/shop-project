import { Backdrop, CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

export const CheckoutCart = ({ productCheck }) => {
    const [totalItem, setTotalItem] = useState(0);
    const { carts } = useSelector((state) => state.cartsSlice);
    const [proCheckout, setProCheckout] = useState([]);
    const [open, setOpen] = useState(false);
    const [checkBackdrop, setCheckBackdrop] = useState(false);

    const handleCheck = () => {
        setCheckBackdrop(true);
        const newCartCheck = carts.filter((item) => productCheck.includes(item.id));
        setProCheckout(newCartCheck);
        setTimeout(() => {
            setCheckBackdrop(false);
        }, 1000);
        setOpen(true);
    };

    useEffect(() => {
        const newCartCheck = carts.filter((item) => productCheck.includes(item.id))
        console.log(newCartCheck, 'newCartCheck');
        setProCheckout(newCartCheck);

    }, [productCheck, carts]);

    useEffect(() => {
        const totalPrice = proCheckout.reduce((total, item) => total + item.price * item.quantity, 0)
        console.log(proCheckout,"procheckout")
        setTotalItem(totalPrice)
    }, [proCheckout])
    useEffect(()=>{
        localStorage.setItem("carts",JSON.stringify(proCheckout))
    },[proCheckout])
    console.log(productCheck,"productCheck")
    return (
        <div>
            <div className="flex justify-end py-3">
                <div className="flex w-1/3 flex-col p-6 bg-white border-2 overflow-x-auto shadow-md sm:rounded-lg">
                    <h1 className="font-bold p-3">
                        Total Price: {Math.ceil(totalItem)}
                    </h1>
                    <button
                        onClick={handleCheck}
                        disabled={carts.length === 0}
                        type='button'
                        className='bg-[#FB5630] p-2 rounded-xl text-white'

                    >
                        Thanh toán
                    </button>
                    {checkBackdrop ? (
                        <div>
                            <Backdrop
                                sx={{
                                    color: '#fff',
                                    zIndex: (theme) => theme.zIndex.drawer + 1,
                                }}
                                open={checkBackdrop}
                            >
                                <CircularProgress color='inherit' />
                            </Backdrop>
                        </div>
                    ):null}
                </div>
            </div>

        </div>
    )
}
