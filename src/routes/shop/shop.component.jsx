import { useContext } from 'react'
import Products from '../../components/product-cards/productCard.component'
import { ProductContext } from '../../contexts/product.context'

const Shop = ()=>{
    const {products} =useContext(ProductContext)
    console.log(Object.keys(products));
    return (
        <div>
            {Object.keys(products).map((item)=>{
                return (
                <div>
                    <h1 className='headText'>{item.toLocaleUpperCase()}</h1>
                    <div style={{marginLeft:"3.5%"}}>
                        {products[item].map((info)=>{
                            return (
                                <div className='cont'>
                                    <Products data={info}/>
                                </div>
                            )
                        })}
                    </div>
                </div>
                )
            })}
            
            <div >
                {/* {products.map((info)=>{
                    return (
                            <div className='cont'>
                                <Products data={info}/>
                            </div>
                    )})} */}
            </div>
            
        </div>
    )
}

export default Shop