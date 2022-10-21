import { useContext } from 'react'
import { CartContext } from '../../contexts/cartState.context'
import CartItems from './cart-item.component'
import './cart.style.css'
import { Link } from 'react-router-dom'
const DropDown = ()=>{
    const {itemsInCart} = useContext(CartContext)
  
    return (
        <div className="cart-dropdown">
            <div className='box'>
                {
                    itemsInCart.length>0?
                    (itemsInCart.map((item)=>{
                        return <CartItems itemDesc={item}/>
                    })):(<div className='empty'>
                            <p>Your Cart is Empty</p>
                        </div>)
                }
            </div>
            
            <Link to='checkOut'><button type='button' className='but ext'>CHECKOUT</button></Link>
        </div>
    )
}
export default DropDown