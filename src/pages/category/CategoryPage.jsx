import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import ApiServices from '../../services/ApiService';
import { NavigateCategory } from '../../components/category/NavigateCategory';
import { ListCategory } from '../../components/category/ListCategory';
import { ListProByCate } from '../../components/category/ListProByCate';

export const CategoryPage = () => {
    const [listCategories, setListCategories] = useState([]);
    const [loading, setLoading] = useState(false)
    const { id } = useParams();
    const navigate = useNavigate();
    const fetchData = async () => {
        setLoading(true)
        const res = await ApiServices.getApiProductByCategory(id);
        const { products } = res;
        setListCategories(products);
        setLoading(false);
    }
    useEffect(() => {
        if (id) {
            fetchData();
        }
        window.scrollTo({ top: 0, behavior: "smooth" })
    }, [id])
    const handleCategoryClick = (categoryId) => {

        navigate(`/category/${categoryId}`)
    }
    return (
        <div className='max-w-[1200px] mx-auto mt-3'>
            <NavigateCategory />
            <div className='flex gap-6 bg-white p-3'>
                <div className='w-1/4 rounded-md mt-3'>
                    <h1 className='uppercase font-bold'>Danh mục</h1>
                    <ListCategory handleClick={(category) => {
                        handleCategoryClick(category)
                    }} />
                </div>
                <div className='flex-col rounded-md gap-2 w-full'>
                    <ListProByCate listCategories={listCategories} isLoading={loading} />
                </div>
            </div>
        </div>
    )
}
