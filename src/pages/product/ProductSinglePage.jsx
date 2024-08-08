import React, { useEffect, useState } from 'react'
import { NavigateProductPage } from '../../components/box/NavigateProductPage'
import ApiServices from '../../services/ApiService'
import { useParams } from 'react-router-dom'
import { BoxProductDetail } from '../../components/box/BoxProductDetail'
import LoadingBackdrop from '../../components/loading/LoadingBackdrop'
import { BoxProductDesc } from '../../components/box/BoxProductDesc'
import { BoxComment } from '../../components/box/BoxComment'
import BoxProductCategory from '../../components/box/BoxProductCategory'

export const ProductSinglePage = () => {
    const [productDetail, setProductDetail] = useState({});
    const [imgProduct, setImgProduct] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [productCate, setProductCate] = useState([]);
    const { id } = useParams();
    const fetchData = async () => {
        try {
            setIsLoading(true);
            const res = await ApiServices.getProductById(id);
            setProductDetail(res);
            setImgProduct(res.thumbnail);

            const { products } = await ApiServices.getApiProductByCategory(
                res.category
            );
            setProductCate(products);
        } catch (e) {
            console.log(e, 'Err fetchData')
        } finally {
            setIsLoading(false);
        }
    }
    const handleClick = (data) => {
        setImgProduct((prevImgPro =>
            prevImgPro === data ? productDetail.thumbnail : data
        ))
    }
    useEffect(() => {
        fetchData();
    }, [id])
    // console.log(productDetail)
    return (
        <div className='max-w-[1200px] mx-auto  my-8 '>
            <NavigateProductPage title={productDetail.title} />
            {isLoading ? (<LoadingBackdrop isLoading={isLoading} />
            ) : (
                <div>
                    <BoxProductDetail key={productDetail.id}
                        imgProduct={imgProduct}
                        productDetail={productDetail}
                        getImg={handleClick}
                    />
                    <BoxProductDesc productDetail={productDetail} />
                    <BoxComment productDetail={productDetail} />
                    <BoxProductCategory productCate={productCate} />
                </div>
            )}

        </div>
    )
}
