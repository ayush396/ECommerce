import { useContext } from 'react'
import { CartContext } from '../../contexts/cartState.context'
import './productCard.style.css'

const Products = (props)=>{
    const val= props.data
    const {addItemToCart}=useContext(CartContext)
    const handlehover =()=>{
        document.getElementById('id'+val.id).style.visibility='visible';
        //document.getElementById('img'+val.id).style.scale=1.06;
    }
    const handlehover2 =()=>{
        document.getElementById('id'+val.id).style.visibility='hidden';
    }
    const handlehover3 =()=>{
        document.getElementById('img'+val.id).style.scale=1.06;
    }
    const handlehover4 =()=>{
        document.getElementById('img'+val.id).style.scale=1;
    }
 
    const handleAdd =()=>{
        addItemToCart(val)
    }
    return(
        <div className='product-card' onMouseEnter={handlehover} onMouseLeave={handlehover2}>

                <img className="shopImg" src={val.imageUrl} id={'img'+val.id} alt= ""/><hr/>
                <div className='add' id={'id'+val.id} onClick={handleAdd} onMouseEnter={handlehover3} onMouseLeave={handlehover4}>
                <button type="button" className='but2'>Add To Cart</button>
            
            </div>
        
            <p className='product-name'>{val.name}</p>
            <p className='product-price'>{val.price}</p>
        </div>
    )
}
export default Products