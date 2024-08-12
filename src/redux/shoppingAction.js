import { type } from "@testing-library/user-event/dist/type";

export const ADDTOCART='ADD_TO_CART';

export const addToCart=(data)=>{
    return{
        type:ADDTOCART,
        payload:data
    }
}
