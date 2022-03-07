import React from 'react';
import {useSelector} from "react-redux";
import Header from "../Components/Header";


const HeaderContainer = () => {
    const dataGet = useSelector(state => state.cartItems);
    console.log(dataGet, "dataget");
    return(
        <Header dataGet={dataGet} />
    )
}

//
// const mapStateToProps = state => ({
//     cardData:state
// })
// const mapDispatchToProps = dispatch => ({
//
// })
// export default connect(mapStateToProps, mapDispatchToProps)(Header);

export default HeaderContainer