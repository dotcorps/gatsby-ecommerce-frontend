export const TAX_RATE=process.env.TAX_RATE ||0.1
export const FREE_SHIPPING_THRESHOULD=process.env.FREE_SHIPPING_THRESHOULD || 1000
export const SHIPPING_RATE=process.env.SHIPPING_RATE || 50 

export const saveCart = (cart) => {
    localStorage.setItem('cart', JSON.stringify(cart))
}
export const getCart = () => {
    try{
        const cart = JSON.parse(localStorage.getItem('cart'))
        if(cart){
            return cart
        }
        
    } catch(err){

    }   

    return []
}

 

export const cartSubTotal=(cart) =>{
    //sum up all items 
    const subTotal=cart.reduce((counter,product)=>{
        return counter+product.price * product.qty 

    },0)
    return subTotal
}

export const shouldPayShipping=(cart) =>{
    const subTotal=cartSubTotal(cart)
    return subTotal<FREE_SHIPPING_THRESHOULD 
          
    }

export const cartTotal=(cart) =>{
    if(cart.length===0){
        return 0
    }

    const subTotal=cartSubTotal(cart)
     
    const shipping=shouldPayShipping(cart) ? SHIPPING_RATE : 0
    const total=subTotal + subTotal * TAX_RATE  +shipping
    return Math.round(total) 

}

 