import React from 'react'
import StarHalfRoundedIcon from '@material-ui/icons/StarHalfRounded';
import StarRoundedIcon from '@material-ui/icons/StarRounded';
import "./Product.css"
import { useStateValue } from "./StateProvider"


function Product({ id, title, image, pricing, rating }) {
    const [{ basket }, dispatch] = useStateValue()

    // Rating star calculation
    let fractionalRating;
    if (rating % 1 !== 0) {
        rating = Math.floor(rating)
        fractionalRating = 1
    }
    // Add item to basket
    const addToBasket = () =>{
        dispatch({
            type:"ADD_TO_BASKET",
            item: {
            id: id,
            title: title,
            image: image,
            pricing: pricing,
            rating:rating,
            count:1
            }

        })
    }
    return (
        <div className="product">
            <div className="product__info">

                <p className="product__title">{title}</p>
                <p className="product__price"><small>₹</small><strong>{pricing}</strong></p>
                <p className="product__rating">
                    {
                        Array(rating).fill().map(_ => (
                            <StarRoundedIcon className="product__ratingStar" />
                        ))
                    }
                    {(fractionalRating) && <StarHalfRoundedIcon className="product__ratingStar" />
                    }
                </p>
            </div>
            <img src={image} alt="" />
            <button onClick={addToBasket}>Add To Basket</button>
        </div>
    )
}

export default Product
