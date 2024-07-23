import React, { useState } from 'react'
import { SliderHome } from '../../components/react-slick/SliderHome'
import { CategoryHome } from '../../components/category/CategoryHome'
import { FlashSale } from '../../components/flashsale/FlashSale';
export const HomePage = () => {
    const [isLoading,setIsLoading]=useState(false);
    return (
        <>
            <SliderHome />
            <CategoryHome />
            <FlashSale isLoading={isLoading}/>
        </>
    )
}
