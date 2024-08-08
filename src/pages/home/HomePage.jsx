import React, { useEffect, useState } from 'react'
import { SliderHome } from '../../components/react-slick/SliderHome'
import { CategoryHome } from '../../components/category/CategoryHome'
import { FlashSale } from '../../components/flashsale/FlashSale';
import { ShopMall } from '../../components/shopmall/ShopMall';
import { ListProductHome } from '../../components/product/ListProductHome';
import { useDispatch } from 'react-redux';
import ApiServices from '../../services/ApiService';
import { listProducts } from '../../redux-tookit/feater/productSlice';
import { PaginationHome } from '../../components/box/PaginationHome';
export const HomePage = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [listParam, setListParam] = useState({
        skip: 0,
        limit: 20,
        total: 0,
    });
    const dispatch = useDispatch();
    const getApiProducts = async () => {
        setIsLoading(true);
        const params = {
            skip: listParam.skip,
            limit: 20,
            total: listParam.total
        }
        const res = await ApiServices.getApiProducts(params);
        const { limit, total, skip } = res;
        setListParam({
            skip,
            limit,
            total,
        });
        dispatch(listProducts(res))
        setIsLoading(false);
    }
    useEffect(() => {
        getApiProducts();
    }, [listParam.skip])
    return (
        <>
            <SliderHome />
            <CategoryHome />
            <FlashSale isLoading={isLoading} />
            <ShopMall isLoading={isLoading} />
            <ListProductHome isLoading={isLoading} />
            <PaginationHome
                dataPagination={listParam}
                getSkip={(skips) => {
                    setListParam({
                        ...listParam,
                        skip: skips * 10,
                    })
                }}
            />
        </>
    )
}
