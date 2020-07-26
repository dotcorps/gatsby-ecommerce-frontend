import React from "react"
import {loadStripe} from "@stripe/stripe-js"
import {Elements} from "@stripe/react-stripe-js"
import CheckoutForm from "./CheckoutForm"
const stripe=loadStripe('pk_test_51GxSN4J33UMVypMPvqIdolZhvu4dWz0r0YWwuVG12bxGHq1Ft1SQiF2CsiEIl6mCjyXiYePjTCGxEPbbTFj6YOin00P1kQTTDH')

export default()=>{
    return(
    <div>
        <Elements stripe={stripe}>
            <CheckoutForm/>
        </Elements>

    </div>
    )
}