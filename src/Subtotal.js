import React from 'react'
import './Subtotal.css'
import {useStateValue, getBasketTotal} from './StateProvider'
import CurrencyFormat from 'react-currency-format'
function Subtotal() {
    const [{ basket },dispatch] = useStateValue()
    return (
        <div className="subtotal">
            <CurrencyFormat
            renderText={(value)=>(
                <>
                    <p>Subtotal ({basket.length} items): <strong>{value}</strong></p>
                    <small className="subtotal__gifts">
                        <input type="checkbox" name="" id=""/>This order contains a gift
                    </small>
                </>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={"text"}
            thousandSeparator={true}
            prefix="₹"
            
            />
            <button>Proceed To Checkout</button>
        </div>
    )
}

export default Subtotal
