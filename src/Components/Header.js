import React from 'react'
import './HomeStyle.css'

const Header = (props) => {
    return(

    <div className="add-to-cart">
                <span className="numberStyling">
                    <b>
                        {props.dataGet.length}
                        {/*{props.dataGet.cardData.cartItems.length}*/}
                    </b>
                </span>
        <img src="https://www.freeiconspng.com/thumbs/cart-icon/basket-cart-icon-27.png" />
    </div>
    )}
export default Header