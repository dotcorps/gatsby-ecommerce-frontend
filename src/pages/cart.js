import React,{useState, useCallback,useContext} from "react"
import Layout from "../components/layout"
 
import {CartContext} from "../context/CartContext"

import Img from "gatsby-image"
import {cartSubTotal,cartTotal,shouldPayShipping,SHIPPING_RATE} from "../utils/cart"
import SEO from "../components/seo"
import Checkout from "../components/Checkout"

export default () =>{
    const {cart,addToCart}=useContext(CartContext)
    console.log("Cart.render cart",cart);
    console.log("Cart.render addToCart",addToCart);
    
     
    const[, updateState]=useState()
    const forceUpdate=useCallback(()=>updateState({}),[] )
    const [showCheckout, setShowCheckout]=useState(false)

    return (
        <Layout>
            <SEO title="Cart" />
              <h2>Cart </h2>  
              { cart && cart.length>0 &&
                  <>
                    <table>
                        <tr>
                            <th>Product</th><th>Price</th><th>Quantity</th>
                        </tr>
                        <thead>

                        </thead>
                        <tbody>
                        {cart.map(product=>(
                        <tr>
                            <td> 
                                <Img style={{width:'100px', height: '100px', verticalAlign: 'middle'}} fixed= {product.thumbnail.childImageSharp.fixed}/>  
                                <span style={{marginLeft:'14px'}}>{product.name}</span>
                            </td>
                            <td>
                                
                                Rs.{product.price}
                            </td>
                            <td style={{textAlign:'center'}}>
                            <span onClick={() =>{
                                    addToCart(product, -1)
                                    forceUpdate()
                                } 
                                }> -
                            </span>
                                {product.qty}
                                <span onClick={() =>{
                                addToCart(product, 1)
                                forceUpdate()
                                }
                                }> + </span>
                            </td>
                        </tr>   
                        ))}
                        </tbody>
                    </table>
                    <h3> Subtotal = {cartSubTotal(cart)}</h3>
                    {shouldPayShipping(cart) &&
                        <h3>Shipping:Rs.{ SHIPPING_RATE} </h3>
                    }
                    {!shouldPayShipping(cart) &&
                        <h3>Shipping is free </h3>
                    }
                 </>
                }
           
            <h3> Total = {cartTotal(cart)}</h3>
            <div>
                {cart && cart.length>0 &&
                <button 
                onClick={()=>setShowCheckout(true)}
                style={{fontSize:'24px', padding:'12px 24px'}}>
                    Initiate Checkout
                </button>
                }
            </div>
            {showCheckout&&
            <Checkout cart={cart}/> 
            }
        </Layout>
    )
}