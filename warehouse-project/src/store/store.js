import {configureStore} from '@reduxjs/toolkit'
import warehouseData from './slice/warehouseSlice'



const store=configureStore({
    reducer: {
        warehouseDetails: warehouseData,
        
    } ,
})

export default store