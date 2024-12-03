import {configureStore} from '@reduxjs/toolkit'
import userReducer from './slice/userSlice'
import productReducer from './slice/cartItemSlice'


const store=configureStore({
    reducer: {
        users: userReducer,
        products: productReducer, 
    } ,
})

export default store