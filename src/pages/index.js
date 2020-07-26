import React from "react"
import {  graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {fromProductSulgToUrl} from "../utils/products"

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
     <h2> Shop for Certified Organic </h2>
     <div style={{display: 'grid',
          gridTemplateColumns:'repeat(3, 1fr)',
          gridgap:'20px'
          }}
      >
          {data.allStrapiProduct.nodes.map(product =>(
            <Link 
            style={{color:'#000',  textDecoration:'none'}}
            to={fromProductSulgToUrl(product.slug)}>
                <div>
                  <Img fixed={product.thumbnail.childImageSharp.fixed}/>
                </div>
                <h5 style={{marginBottom:'10px'}}>   {product.name}</h5>
                <h6> Price: Rs.{product.price}</h6>
            </Link>
          ))}
   </div>
  </Layout>
)

export default IndexPage

export const   pageQuery= graphql`
 query MyQuery {
  allStrapiProduct {
    nodes {
      id
      name
      price
      strapiId
      description
      created_at
      slug
      thumbnail{
        childImageSharp{
          fixed(width:200, height:200){
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  }
}
`
