import React , {useState,useContext} from "react"
 
import Layout from "../components/layout"
import {graphql} from "gatsby" 

import Img from "gatsby-image"
import { CartContext } from "../context/CartContext"

const ProductTemplate =({data}) => {

    const [qty, setQty]=useState(1)
    const {addToCart} = useContext(CartContext)

    return( 
    <Layout>
    {console.log("ProductTemplate.render data", data.strapiProduct)}
        <Img fixed={data.strapiProduct.thumbnail.childImageSharp.fixed}/>
        <h2>{data.strapiProduct.name} </h2> <h5> Rs.{data.strapiProduct.price}</h5>
        <p> {data.strapiProduct.description}</p>
        <input 
        type="number" 
        value={qty} 
        onChange={(event) =>setQty(event.target.value)}    
        />
        <button 
        onClick={() => addToCart(data.strapiProduct, qty)} 
        style={{backgroundColor:'#28B463', fontSize: '20px', padding: '24px', borderRadius: '3px'}}>
            Add to Cart
        </button>
        


    </Layout>
    )   }

export default ProductTemplate
export const query=graphql `

query ProductTemplateQuery($id: String!) {
    strapiProduct(id: {eq: $id}) {
      strapiId
      name
      price
      description
      thumbnail{
          childImageSharp{
              fixed(width:640){
                  ...GatsbyImageSharpFixed
                }
             }
        }  
    }
}
  
`