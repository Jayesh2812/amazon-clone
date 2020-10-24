import React from 'react'
import {useStateValue} from './StateProvider'
import StarHalfRoundedIcon from '@material-ui/icons/StarHalfRounded';
import StarRoundedIcon from '@material-ui/icons/StarRounded';
import './CheckoutProduct.css'

function CheckoutProduct({id, title, image, pricing, rating, count}) {
    const [{basket} ,dispatch] = useStateValue()
    let fractionalRating;
    if (rating % 1 !== 0) {
        rating = Math.floor(rating)
        fractionalRating = 1
    }

    // 
    const decreaseCount=()=>{
        if(count === 1){
            removeFromBasket()
            return
        }
        dispatch(
            {
                type:"DECREASE_PRODUCT_COUNT",
                id:id
            }
        )
    }
    const increaseCount=()=>{
        dispatch(
            {
                type:"INCREASE_PRODUCT_COUNT",
                id:id
            }
        )
    }
    const removeFromBasket =()=>{
        dispatch(
            {
                type:"REMOVE_FROM_BASKET",
                id: id
            }
        )
    }
    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={image} alt=""/>
            <div className="checkoutProduct__info">

                <p className="checkoutProduct__title"><h3>{title}</h3></p>
                <p className="checkoutProduct__price"><small>₹</small><strong>{pricing}</strong></p>
                <p className="checkoutProduct__rating">
                    {
                        Array(rating).fill().map(_ => (
                            <StarRoundedIcon className="checkoutProduct__ratingStar" />
                        ))
                    }
                    {(fractionalRating) && <StarHalfRoundedIcon className="checkoutProduct__ratingStar" />
                    }
                </p>
                <button onClick={removeFromBasket}>Remove from Basket</button>
                <div className="checkoutProduct__count">
                    <button onClick={increaseCount}>+</button>
                    <span>{count}</span>
                    <button onClick={decreaseCount}>-</button>
                </div>
            </div>
        </div>
    )
}

export default CheckoutProduct
