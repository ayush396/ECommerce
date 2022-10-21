import { useContext } from 'react';
import '../../routes/Checkout/checkout.style.css'
import { CartContext } from '../../contexts/cartState.context';
const CheckOutItems = (props) => {
    const vals= props.itemDesc;
    const {addItemToCart,SubtractItemFromCart,ClearItemFromCart} = useContext(CartContext)
    const handleIncrement = ()=>{
        addItemToCart(vals)
    }
    const handleDecrement = ()=>{
        SubtractItemFromCart(vals)
    }
    const handleRemove= ()=>{
        ClearItemFromCart(vals)
    }
    return (<div className='category'>
                <div className='item1'>
                <img className="picAdjust" src = {vals.imageUrl} alt="umm"/>
                </div>
                
                <div className="item">
                    <p className="adjustName">{vals.name}</p>
                    <div className="adjustQuantity">
                        <button className='desBut' onClick={handleDecrement}>{'<'}</button>
                        <p className='quant'>{vals.quantity}</p>
                        <button className='desBut' onClick={handleIncrement}>{' >'}</button>
                    </div>
                    
                    <p className="adjustPrice">{vals.price}</p>
                    <div className='remove'>
                    <button className='desBut remBut' onClick={handleRemove}>X</button>
                    </div>
                    
                </div>
                
            </div>)
}
export default CheckOutItems