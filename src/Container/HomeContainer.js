import React, {useEffect, useState} from 'react';
import Home from "../Components/Home";
import {connect, useDispatch} from "react-redux";
import {addToCart, removeToCart} from "../Services/Actions/HomeAction";


const HomeContainer = () => {
    const dispatch = useDispatch();

    const valueGet = (valueGet) => {

        dispatch(addToCart(valueGet));
    }

    const removeValue = () => {

        dispatch(removeToCart());
    }


    return(
        <Home valueGet={valueGet} removeValue={removeValue} />
    )
}

//
//
// const mapStateToProps = state => ({
//     cardData:state
// })
// const mapDispatchToProps = dispatch => ({
//     addToCartHandler: data => dispatch(addToCart(data)),
//     removeToCartHandler: data => dispatch(removeToCart(data))
// })
// export default connect(mapStateToProps, mapDispatchToProps)(Home);

export default HomeContainer