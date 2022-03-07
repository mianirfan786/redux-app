import {ADD_TO_CART,REMOVE_TO_CART} from "../Constant";

const initialState={
     cardData:[]
}

// export function cartItems(state= initialState, action) {
//      console.log("reducer action data", action.data);
//      switch (action.type){
//      case ADD_TO_CART:
//           return{
//                ...state,
//                cardData: action.data
//           }
//           break;
//      default:
//           return state
//      }
// }

export function cartItems(state= [], action) {
     switch (action.type){
          case ADD_TO_CART:
               console.log("type add to cart call")
               return [
                    ...state,
                    {cardData: action.data}
          ]
               break;
          case REMOVE_TO_CART:
               state.pop();
               return [
                   ...state
               ]
          default:
               return state
     }
}