import { createContext,useState } from "react";

const AddingItems = (cartItems,productToAdd)=>{ 
    var isPresent=false;
    cartItems.map((item)=>{
        if(item.id===productToAdd.id){
            isPresent=true;
           
        }
    })
    console.log(isPresent);
    if(isPresent){
        return cartItems.map((item)=>{
        return item.id===productToAdd.id ? {...item,quantity:item.quantity+1} : item
    })
    }
    if(!isPresent)
    return [...cartItems,{...productToAdd,quantity:1}]
 
}
const ReducingItems = (cartItems,productToSubtract)=>{ 
    var isPresent=false;
    cartItems.map((item)=>{
        if(item.id===productToSubtract.id){
            isPresent=true;
           
        }
    })
    if(isPresent){
        return cartItems.map((item)=>{
                if(item.quantity>1)
                return item.id===productToSubtract.id ? {...item,quantity:item.quantity-1} : item
                else return item})
    }
    
    if(!isPresent)
    return cartItems
}
const ClearingItems = (cartItems,productToClear)=>{
    return cartItems.filter((item)=>item.id !== productToClear.id)
}
export const CartContext =createContext({
    isOpened:false,
    setOpened:()=>{},
    itemsInCart:[],
    addItemToCart:()=>{},
    SubtractItemFromCart:()=>{},
    ClearItemFromCart:()=>{}
})

export const CartProvider=({children})=>{
    const [isOpened,setOpened]=useState(null);
   

    const [itemsInCart,setCartItems]=useState([])
    const addItemToCart = (productToAdd)=>{
        setCartItems(AddingItems(itemsInCart,productToAdd))
    }
    const SubtractItemFromCart = (productToSubtract)=>{
        setCartItems(ReducingItems(itemsInCart,productToSubtract))
    }
    const ClearItemFromCart = (productToClear)=>{
        setCartItems(ClearingItems(itemsInCart,productToClear))
    }
    const val= {isOpened,setOpened,addItemToCart,itemsInCart,SubtractItemFromCart,ClearItemFromCart}

    return <CartContext.Provider value={val}>{children}</CartContext.Provider>
}