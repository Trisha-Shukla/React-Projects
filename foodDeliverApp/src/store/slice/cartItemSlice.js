import { createSlice } from "@reduxjs/toolkit";
import {productData} from '../../utils/productData';
import { fetchCart } from "../../utils/helpers";

const cartInfo=fetchCart();
console.log(cartInfo);

const cartItemSlice = createSlice({
    name: 'items',
    initialState: {
        cartItem: productData,
        showCart:false, 
        cartInfo:cartInfo,       
    },
    reducers: {
        setCartUser:(state, action)=> {
            state.userData = action.payload;
        },
        setCartShow:(state,action)=>{
            state.showCart=action.payload;
        },
        setCartInfo:(state,action)=>{
            state.cartInfo.push(action.payload)
        },
        setUpdateCart: (state, action) => {
            const updatedItem = action.payload;
            console.log(updatedItem);
            
            const existingIndex = state.cartInfo.findIndex((item) => item.id === updatedItem.id);
      
            if (existingIndex >= 0) {
              // Update the item in the cart
              state.cartInfo[existingIndex] = updatedItem;
            }
      
            // Sync with local storage
            localStorage.setItem("cartInfo", JSON.stringify(state.cartInfo));
          },
          setRemoveFromCart: (state, action) => {
            const itemId = action.payload;
            console.log(itemId);
            
            state.cartInfo = state.cartInfo.filter((item) => item.id !== itemId);
      
            // Sync with local storage
            localStorage.setItem("cartInfo", JSON.stringify(state.cartInfo));
          },
          setClearCart:(state,action)=>{
            state.cartInfo=[];
            localStorage.setItem("cartInfo", JSON.stringify(state.cartInfo));
          }
        
    }
});

export const { setCartUser,setCartShow ,setCartInfo,setUpdateCart,setRemoveFromCart,setClearCart} = cartItemSlice.actions;
export default cartItemSlice.reducer;
