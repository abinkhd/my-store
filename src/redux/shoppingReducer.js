import { ADDTOCART } from "./shoppingAction"


const initialState={
    cartItems:[]
}

const shoppingReducer = (state=initialState,action) => {
    switch(action.type){
        case ADDTOCART:{
               return {...state,cartItems:[...state.cartItems,action.payload]}
        }
        default: return state
    }
}

export default shoppingReducer