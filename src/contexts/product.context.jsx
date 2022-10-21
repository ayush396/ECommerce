import { createContext, useEffect, useState } from "react";
// import SHOP_DATA from '../shop-data.js'
import { getCollections } from "../utils/firebase/firebase.utils";

export const ProductContext = createContext({
    products:{},
    setProducts:()=>{}
});
export const ProductProvider = ({children})=>{
    const [products, setProducts] = useState({})
    useEffect(()=>{
        const handleAsync = async()=>{
            const categoryMap=await getCollections()
            setProducts(categoryMap);
        }
        
        // console.log(categoryMap);
        handleAsync();
        
    },[])
    const val = {products, setProducts}
    return <ProductContext.Provider value={val}>{children}</ProductContext.Provider>
}
