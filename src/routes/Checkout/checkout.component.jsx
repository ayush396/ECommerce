import { useContext } from "react"
import CheckOutItems from "../../components/checkout-items/checkItems.component"
import { CartContext } from "../../contexts/cartState.context"
import './checkout.style.css'
const Checkout=()=>{
    var total=0;
    const {isOpened,setOpened,itemsInCart}=useContext(CartContext)
    setOpened(!isOpened)
    return(<div className="container">
        <p className="adjust">Product</p>
        <p className="adjust">Description</p>
        <p className="adjust">Quantity</p>
        <p className="adjust">Price</p>
        <p className="adjust">Remove</p>
        <hr/>
        {itemsInCart.map((item)=>{
            total=total+(item.quantity*item.price)
            return <CheckOutItems itemDesc={item}/>
        })}
        <h2 className="total">Grand Total: {total}</h2>
    </div>)
}
export default Checkout