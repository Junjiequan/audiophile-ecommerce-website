import React ,{useState,useEffect}from 'react'
import { useLocation } from 'react-router-dom'
import ProductMain from '../components/Main/ProductMain'
import Banner from '../components/Banner'
import ProductNav from '../components/ProductNav'
import IsLoading from '../IsLoading'

const ProductDetail = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState();
    const location = useLocation();
    const path = location.pathname.replace('/product_detail/','');

    useEffect(()=>{
        const fetchJSON = async()=>{
            try{
                const resp = await fetch("https://api.jsonbin.io/b/60f2122c0cd33f7437ca192d/5",{});
                if(!resp.ok){
                    throw new Error('fetching data failed')
                };
                const DATA = await resp.json();
                const getPageData = DATA.filter(item =>item.id === path ? item : false);
                setData(getPageData[0]);
                setIsLoading(false);
            } catch(err){
                console.log(err)
            }
        }
        fetchJSON();
    },[path]);

    return (
        <main>
            {
                isLoading
                ? <IsLoading />
                : <ProductMain data={data} />
            }
            <ProductNav />
            <Banner />
        </main>
    )
}

export default ProductDetail
