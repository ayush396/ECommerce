
const CartItems = (props)=>{
    const itemDetails = props.itemDesc
    return (
        <div className="pos">
     
            <img src={itemDetails.imageUrl} className="cartImg" alt="umm"/>
            <div className="pos-details">
                <p className="">{itemDetails.name}</p>
                <p>{ itemDetails.quantity +' x $ '+ itemDetails.price}</p>
            </div>
    
           
                            
        </div>
    )
}
export default CartItems