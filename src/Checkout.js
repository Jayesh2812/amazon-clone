import React from 'react'
import {useStateValue} from './StateProvider'
import "./Checkout.css"
import CheckoutProduct from "./CheckoutProduct"
import Subtotal from "./Subtotal"
import {Link} from "react-router-dom"

function Checkout() {
    const [{ basket },dispatch] = useStateValue()
    console.log(basket)
    return (
        <div className="checkout">
        <img className="checkout__add" src="https://hotdealszone.com/wp-content/uploads/2018/10/great-indian-festival-sale-add-money-offer.png"/>
            <div className="checkout__left">

            {basket.length ===0 ?
            (<div>
                <h1>Your Basket is empty</h1>
                <p>You have no items in your basket. To buy one or more items click "Add To Basket" <Link to="/">here</Link></p>
            </div>)
            :
            (<div>
            <h1>Your basket</h1>
            <hr/>
                {basket.map(item =>(
                    <>
                    <CheckoutProduct 
                        id= {item.id}
                        title={item.title}
                        image={item.image}
                        pricing={item.pricing}
                        rating={item.rating}
                        count ={item.count}
                    />
                    </>
                ))}
                
            </div>    
            )
            
        }
        </div>
        <div className="checkout__right">
            <Subtotal/>
        </div>
        </div>
    )
}

export default Checkout
