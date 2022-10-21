import { useContext } from 'react';
import { CartContext } from '../../contexts/cartState.context';
import './cart.style.css'
import { ReactComponent as ShoppingIcon} from './shopping-bag.svg';

const Cart = ()=>{
    var count=0;
    const {itemsInCart} = useContext(CartContext)
    itemsInCart.map((item)=>{
        count=count+item.quantity
    })
    const cartCount=count ;
    const {isOpened,setOpened}=useContext(CartContext)
    const toggler = () =>{
        setOpened(!isOpened);
    }
    return (
        <div className='carts' onClick={toggler}>
            <ShoppingIcon/>
            <p className='count'>{cartCount}</p>
        </div>
    )
}

export default Cart;
